import { error } from "@sveltejs/kit";
import { professionalPosts, findBlogPost } from "$lib/content/blog";

export const prerender = true;

export function entries() {
  return professionalPosts.map((post) => ({ slug: post.slug }));
}

export function load({ params }) {
  const post = findBlogPost(params.slug);

  if (!post || post.section !== "professional") {
    error(404, "Blog post not found");
  }

  return {
    post,
    canonicalPath: `/professional/${post.slug}/`,
    indexPath: "/professional/"
  };
}
