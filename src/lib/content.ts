import type { CollectionEntry } from "astro:content";
import { defaultLocale, getLocaleMeta, translateLabel, type SiteLocale } from "./i18n";

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
