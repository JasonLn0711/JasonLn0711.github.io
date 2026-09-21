import { error } from "@sveltejs/kit";
import { blogSeries, blogPosts } from "$lib/content/blog";
import { seriesPosts } from "$lib/content/blog-model";
export const prerender = true;
export function entries() { return blogSeries.map((series) => ({ slug: series.slug })); }
export function load({ params }: { params: { slug: string } }) {
  const series = blogSeries.find((item) => item.slug === params.slug);
  if (!series) error(404, "Series not found");
  return { series, posts: seriesPosts(blogPosts, series.slug) };
}
