import { modules } from "virtual:published-blog";
import seriesData from "./blog-series.json";
import { createBlogPosts, type Series } from "./blog-model";

export type { BlogPost, RawBlogMetadata } from "./blog-model";
export { formatDate } from "./blog-model";
export const blogSeries: Series[] = seriesData;
export const blogPosts = createBlogPosts(Object.entries(modules).map(([modulePath, module]) => ({
  modulePath, metadata: module.metadata
})), blogSeries);

export function findBlogPost(slug: string) { return blogPosts.find((post) => post.slug === slug); }
export function getBlogComponent(slug: string) {
  const post = findBlogPost(slug);
  return post ? modules[post.modulePath]?.default : undefined;
}
