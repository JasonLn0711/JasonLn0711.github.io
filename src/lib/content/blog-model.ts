export type RelationType = "prerequisite" | "extends" | "related";
export type Relation = { slug: string; type: RelationType; reason: string; reasonZh?: string };
export type Series = { slug: string; title: string; description: string; roadmap: string[] };
export type RawBlogMetadata = {
  title?: string; description?: string; pubDate?: string | Date; updatedDate?: string | Date;
  tags?: string[]; category?: string; draft?: boolean; featured?: boolean; cover?: string;
  ogImage?: string; routeSlug?: string; kind?: "essay" | "daily-learning";
  learningDate?: string | Date; languages?: ("en" | "zh-Hant")[];
  series?: string; order?: number; relations?: Relation[];
};
export type BlogPost = {
  slug: string; title: string; description: string; date: string; dateLabel: string;
  updatedDate?: string; category: string; categoryLabel: string; tags: string[];
  featured: boolean; cover?: string; ogImage: string; modulePath: string;
  kind: "essay" | "daily-learning"; learningDate?: string; languages: ("en" | "zh-Hant")[];
  series?: string; order?: number; relations: Relation[];
};

export function taipeiDate(now = new Date()): string {
  const parts = new Intl.DateTimeFormat("en", {
    timeZone: "Asia/Taipei", year: "numeric", month: "2-digit", day: "2-digit"
  }).formatToParts(now);
  return ["year", "month", "day"].map((key) => parts.find((p) => p.type === key)?.value).join("-");
}

export function normalizeDate(value: string | Date | undefined): string {
  // mdsvex serializes YAML date objects as UTC-midnight ISO strings.
  const date = value instanceof Date ? value.toISOString().slice(0, 10)
    : typeof value === "string" && /^\d{4}-\d{2}-\d{2}T00:00:00\.000Z$/.test(value) ? value.slice(0, 10)
    : value ?? "";
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !Number.isFinite(Date.parse(`${date}T00:00:00Z`)) ||
      new Date(`${date}T00:00:00Z`).toISOString().slice(0, 10) !== date) {
    throw new Error(`Invalid calendar date: ${String(value)}; use YYYY-MM-DD`);
  }
  return date;
}

export function formatDate(value: string): string {
  return new Intl.DateTimeFormat("en", {
    timeZone: "Asia/Taipei", year: "numeric", month: "short", day: "numeric"
  }).format(new Date(`${value}T00:00:00+08:00`));
}

export function isPublished(metadata: RawBlogMetadata, today = taipeiDate()): boolean {
  return metadata.draft !== true && normalizeDate(metadata.pubDate) <= today;
}

const validSlug = (slug: string) => /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug);

export function createBlogPosts(
  entries: { modulePath: string; metadata: RawBlogMetadata }[], series: Series[], today = taipeiDate()
): BlogPost[] {
  const seriesIds = new Set<string>();
  for (const item of series) {
    if (!validSlug(item.slug) || seriesIds.has(item.slug) || !item.title?.trim() ||
        !item.description?.trim() || !Array.isArray(item.roadmap) || item.roadmap.some((step) => !step.trim())) {
      throw new Error(`Invalid or duplicate series: ${item.slug}`);
    }
    seriesIds.add(item.slug);
  }
  const slugs = new Set<string>();
  const positions = new Set<string>();
  const learningDates = new Set<string>();
  const posts: BlogPost[] = [];
  for (const { modulePath, metadata: m } of entries) {
    try {
      if (!isPublished(m, today)) continue;
      const slug = m.routeSlug ?? modulePath.split("/").pop()!.replace(/\.mdx$/, "");
      if (!validSlug(slug) || slug === "series" || slugs.has(slug)) throw new Error(`Invalid or duplicate slug: ${slug}`);
      slugs.add(slug);
      if (!m.title?.trim() || !m.description?.trim()) throw new Error("Title and description are required");
      const date = normalizeDate(m.pubDate);
      const learningDate = m.learningDate ? normalizeDate(m.learningDate) : undefined;
      const updatedDate = m.updatedDate ? normalizeDate(m.updatedDate) : undefined;
      const languages = m.languages ?? ["en"];
      if (!Array.isArray(languages) || languages.length === 0 ||
          new Set(languages).size !== languages.length || languages.some((lang) => !["en", "zh-Hant"].includes(lang))) {
        throw new Error("Languages must contain en and/or zh-Hant without duplicates");
      }
      if (m.kind && !["essay", "daily-learning"].includes(m.kind)) throw new Error("Invalid article kind");
      if (m.kind === "daily-learning") {
        if (!learningDate || learningDate > date || learningDates.has(learningDate) ||
            !languages.includes("en") || !languages.includes("zh-Hant")) {
          throw new Error("Daily learning needs a unique learningDate no later than publication, and both languages");
        }
        learningDates.add(learningDate);
      }
      if (updatedDate && (updatedDate < date || updatedDate > today)) throw new Error("Updated date must be between publication and today");
      if (m.series) {
        const position = `${m.series}:${m.order}`;
        if (!seriesIds.has(m.series) || !Number.isInteger(m.order) || m.order! < 1 || positions.has(position)) {
          throw new Error(`Unknown series or invalid/duplicate order: ${position}`);
        }
        positions.add(position);
      } else if (m.order !== undefined) throw new Error("Order requires a series");
      const relations = m.relations ?? [];
      const targets = new Set<string>();
      if (!Array.isArray(relations)) throw new Error("Relations must be an array");
      for (const relation of relations) {
        if (!validSlug(relation.slug) || relation.slug === slug || targets.has(relation.slug) ||
            !["prerequisite", "extends", "related"].includes(relation.type) || !relation.reason?.trim() ||
            (m.kind === "daily-learning" && !relation.reasonZh?.trim())) {
          throw new Error(`Invalid relation: ${relation.slug}`);
        }
        targets.add(relation.slug);
      }
      const category = m.category ?? (m.kind === "daily-learning" ? "daily-learning" : "essay");
      posts.push({
        slug, title: m.title, description: m.description, date, dateLabel: formatDate(date), updatedDate,
        category, categoryLabel: category.split(/[-_\s]+/).map((s) => s.charAt(0).toUpperCase() + s.slice(1)).join(" "),
        tags: m.tags ?? [], featured: m.featured ?? false, cover: m.cover,
        ogImage: m.ogImage ?? m.cover ?? "/og/default.png", modulePath,
        kind: m.kind ?? "essay", learningDate, languages, series: m.series, order: m.order, relations
      });
    } catch (error) { throw new Error(`${modulePath}: ${(error as Error).message}`); }
  }
  for (const post of posts) {
    for (const relation of post.relations) {
      if (!slugs.has(relation.slug)) throw new Error(`${post.modulePath}: relation target is not published: ${relation.slug}`);
    }
  }
  return posts.sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug));
}

export function recentPosts<T extends { date: string }>(posts: T[], now = new Date()): T[] {
  const today = taipeiDate(now);
  const first = new Date(`${today}T00:00:00Z`);
  first.setUTCDate(first.getUTCDate() - 2);
  const start = first.toISOString().slice(0, 10);
  return posts.filter((post) => post.date >= start && post.date <= today)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function seriesPosts(posts: BlogPost[], slug: string): BlogPost[] {
  return posts.filter((post) => post.series === slug).sort((a, b) => a.order! - b.order!);
}

export function articleConnections(posts: BlogPost[], post: BlogPost) {
  return {
    outgoing: post.relations.map((relation) => ({ ...relation, post: posts.find((p) => p.slug === relation.slug)! })),
    incoming: posts.flatMap((source) => source.relations.filter((r) => r.slug === post.slug)
      .map((relation) => ({ ...relation, post: source })))
  };
}
