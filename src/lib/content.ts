import type { CollectionEntry } from "astro:content";

export function sortBlogEntries(entries: CollectionEntry<"blog">[]) {
  return [...entries]
    .filter((entry) => !entry.data.draft)
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
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

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  }).format(date);
}

export function projectFilters(entry: CollectionEntry<"projects">) {
  const filters = new Set<string>([entry.data.category]);

  if (entry.data.category === "Fraud") {
    filters.add("AI");
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
