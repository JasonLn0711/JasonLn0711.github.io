import { error } from "@sveltejs/kit";
import { professionalSeries, professionalPosts } from "$lib/content/blog";
import { seriesPosts } from "$lib/content/blog-model";
export const prerender = true;
export function entries() { return professionalSeries.map((series) => ({ slug: series.slug })); }
export function load({ params }: { params: { slug: string } }) {
  const series = professionalSeries.find((item) => item.slug === params.slug);
  if (!series) error(404, "Series not found");
  return { series, posts: seriesPosts(professionalPosts, series.slug) };
}
