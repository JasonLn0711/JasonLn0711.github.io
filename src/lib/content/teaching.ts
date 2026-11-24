import type { Component } from "svelte";
import type { ArticleHeading } from "./article-headings";

type TeachingModule = {
  default: Component;
  metadata: { articleHeadings?: ArticleHeading[] };
};

const dayModules = import.meta.glob<TeachingModule>(
  "../../content/teaching/enterprise-ai-architecture-sprint/*.md",
  { eager: true }
);

function slugFromPath(path: string) {
  const fileName = path.split("/").pop() ?? "";
  return fileName.replace(/\.md$/i, "");
}

export function getTeachingDay(slug: string) {
  const entry = Object.entries(dayModules).find(([path]) => slugFromPath(path) === slug);
  return entry?.[1];
}
