import { modules } from "virtual:published-blog";
import seriesData from "./blog-series.json";
import { createBlogPosts, type BlogPost, type Series } from "./blog-model";

export type { BlogPost, RawBlogMetadata } from "./blog-model";
export { formatDate } from "./blog-model";
export const allSeries: Series[] = seriesData;
export const allPosts = createBlogPosts(Object.entries(modules).map(([modulePath, module]) => ({
  modulePath, metadata: module.metadata
})), allSeries);
export const blogPosts = allPosts.filter((post) => post.section === "blog");
export const professionalPosts = allPosts.filter((post) => post.section === "professional");
export const blogSeries = allSeries.filter((series) => blogPosts.some((p) => p.series === series.slug));
export const professionalSeries = allSeries.filter((series) => professionalPosts.some((p) => p.series === series.slug));

export function findBlogPost(slug: string) { return allPosts.find((post) => post.slug === slug); }
export function getBlogArticle(post: BlogPost) {
  return modules[post.modulePath];
}
