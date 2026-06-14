import type { Component } from "svelte";

type RawBlogMetadata = {
  title?: string;
  description?: string;
  pubDate?: string | Date;
  updatedDate?: string | Date;
  tags?: string[];
  category?: string;
  draft?: boolean;
  featured?: boolean;
  cover?: string;
  ogImage?: string;
  routeSlug?: string;
};

type BlogModule = {
  default: Component;
  metadata: RawBlogMetadata;
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  dateLabel: string;
  updatedDate?: string;
  category: string;
  categoryLabel: string;
  tags: string[];
  featured: boolean;
  cover?: string;
  ogImage: string;
  modulePath: string;
};

const modules = import.meta.glob<BlogModule>("../../content/blog/*.mdx", { eager: true });

function slugFromPath(path: string) {
  const fileName = path.split("/").pop() ?? "";
  return fileName.replace(/\.(mdx|md|svx)$/i, "");
}

function normalizeDate(value: string | Date | undefined) {
  if (!value) return "";
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return value.slice(0, 10);
}

function labelCategory(value: string) {
  return value
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "numeric"
  }).format(new Date(`${value}T00:00:00`));
}

export const blogPosts: BlogPost[] = Object.entries(modules)
  .map(([modulePath, module]) => {
    const metadata = module.metadata ?? {};
    const date = normalizeDate(metadata.pubDate);
    const category = metadata.category ?? "Essay";
    const slug = metadata.routeSlug ?? slugFromPath(modulePath);

    return {
      slug,
      title: metadata.title ?? slug,
      description: metadata.description ?? "",
      date,
      dateLabel: date ? formatDate(date) : "",
      updatedDate: normalizeDate(metadata.updatedDate) || undefined,
      category,
      categoryLabel: labelCategory(category),
      tags: metadata.tags ?? [],
      featured: metadata.featured ?? false,
      cover: metadata.cover,
      ogImage: metadata.ogImage ?? metadata.cover ?? "/og/default.png",
      modulePath
    };
  })
  .filter((post) => {
    const metadata = modules[post.modulePath]?.metadata;
    return !metadata?.draft;
  })
  .sort((a, b) => b.date.localeCompare(a.date));

export function findBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogComponent(slug: string) {
  const post = findBlogPost(slug);
  return post ? modules[post.modulePath]?.default : undefined;
}
