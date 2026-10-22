import type { BlogPost } from "./blog-model";

/** Input is the existing published manifest; updatedDate never changes ordering. */
export function latestWriting<T extends Pick<BlogPost, "slug" | "date">>(posts: readonly T[]): T[] {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug)).slice(0, 5);
}

export function featuredWriting<T extends Pick<BlogPost, "slug">>(posts: readonly T[], slugs: readonly string[]): T[] {
  return slugs.flatMap((slug) => {
    const post = posts.find((item) => item.slug === slug);
    return post ? [post] : [];
  });
}

export function articleLanguage(languages: BlogPost["languages"], zh: boolean): string {
  if (languages.includes("en") && languages.includes("zh-Hant")) return zh ? "中英雙語" : "English & 中文";
  return languages.includes("zh-Hant") ? (zh ? "中文原文" : "Chinese article") : (zh ? "英文原文" : "English article");
}
