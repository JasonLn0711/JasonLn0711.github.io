import type { CollectionEntry } from "astro:content";
import { defaultLocale, getLocaleMeta, localizePath, translateLabel, type SiteLocale } from "./i18n";

export type BlogEntry = CollectionEntry<"blog">;

export function sortBlogEntries(entries: BlogEntry[]) {
  return [...entries]
    .filter((entry) => !entry.data.draft)
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

export function getBlogLocale(entry: BlogEntry): SiteLocale {
  return entry.data.locale;
}

export function getBlogRouteSlug(entry: BlogEntry) {
  const configuredSlug = entry.data.routeSlug?.trim();

  if (configuredSlug) {
    return configuredSlug;
  }

  const segments = entry.slug.split("/").filter(Boolean);
  return segments.at(-1) ?? entry.slug;
}

export function getBlogTranslationKey(entry: BlogEntry) {
  return entry.data.translationKey?.trim() || getBlogRouteSlug(entry);
}

export function getLocalizedBlogEntries(entries: BlogEntry[], locale: SiteLocale = defaultLocale) {
  const groups = new Map<string, BlogEntry[]>();

  sortBlogEntries(entries).forEach((entry) => {
    const key = getBlogTranslationKey(entry);
    const current = groups.get(key) ?? [];
    current.push(entry);
    groups.set(key, current);
  });

  return sortBlogEntries(
    [...groups.values()].map((group) => (
      group.find((entry) => getBlogLocale(entry) === locale) ??
      group.find((entry) => getBlogLocale(entry) === defaultLocale) ??
      group[0]
    ))
  );
}

export function getBlogStaticPaths(entries: BlogEntry[], locale: SiteLocale = defaultLocale) {
  const localizedEntries = getLocalizedBlogEntries(entries, locale);

  return localizedEntries.map((post, index) => ({
    params: { slug: getBlogRouteSlug(post) },
    props: {
      post,
      previousPost: localizedEntries[index + 1] ?? null,
      nextPost: localizedEntries[index - 1] ?? null
    }
  }));
}

export function getBlogPath(entry: BlogEntry, locale: SiteLocale = defaultLocale) {
  return localizePath(`/blog/${getBlogRouteSlug(entry)}/`, locale);
}

export function sortProjects(entries: CollectionEntry<"projects">[]) {
  return [...entries].sort((a, b) => {
    if (a.data.featured !== b.data.featured) {
      return Number(b.data.featured) - Number(a.data.featured);
    }

    if (a.data.year !== b.data.year) {
      return b.data.year - a.data.year;
    }

    return a.data.title.localeCompare(b.data.title);
  });
}

export function formatDate(date: Date, locale: SiteLocale = defaultLocale) {
  return new Intl.DateTimeFormat(getLocaleMeta(locale).intl, {
    year: "numeric",
    month: "short",
    day: "numeric"
  }).format(date);
}

export function formatLabel(value: string, locale: SiteLocale = defaultLocale) {
  const translated = translateLabel(value, locale);

  if (translated !== value) {
    return translated;
  }

  return value
    .split("-")
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(" ");
}

export function projectFilters(entry: CollectionEntry<"projects">) {
  const filters = new Set<string>([entry.data.category]);

  if (entry.data.category === "Fraud Analysis") {
    filters.add("AI Systems");
  }

  if (
    entry.data.stack.includes("Whisper") ||
    /speech|transcript|audio/i.test(`${entry.data.title} ${entry.data.summary}`)
  ) {
    filters.add("Speech");
  }

  if (entry.data.category === "Cybersecurity") {
    filters.add("Security");
  }

  return [...filters];
}
