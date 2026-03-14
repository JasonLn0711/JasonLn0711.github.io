import type { CollectionEntry } from "astro:content";

const projectKindOrder = {
  flagship: 0,
  prototype: 1,
  experiment: 2
} as const;

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

    if (a.data.kind !== b.data.kind) {
      return projectKindOrder[a.data.kind] - projectKindOrder[b.data.kind];
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

export function groupProjectsByKind(entries: CollectionEntry<"projects">[]) {
  return {
    flagship: entries.filter((entry) => entry.data.kind === "flagship"),
    prototype: entries.filter((entry) => entry.data.kind === "prototype"),
    experiment: entries.filter((entry) => entry.data.kind === "experiment")
  };
}

export function projectKindLabel(kind: CollectionEntry<"projects">["data"]["kind"]) {
  if (kind === "flagship") {
    return "Flagship";
  }

  if (kind === "prototype") {
    return "Prototype";
  }

  return "Experiment";
}

export function projectModeLabel(mode: CollectionEntry<"projects">["data"]["mode"]) {
  if (mode === "adaptation") {
    return "Adaptation study";
  }

  if (mode === "study") {
    return "Research study";
  }

  return "Original build";
}
