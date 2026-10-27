import { error } from "@sveltejs/kit";
import { allPosts, findBlogPost } from "$lib/content/blog";

export const prerender = true;

export function entries() {
  return allPosts.map((post) => ({ slug: post.slug }));
}

export function load({ params }) {
  const post = findBlogPost(params.slug);

  if (!post) {
    error(404, "Blog post not found");
  }

  return {
    post,
    canonicalPath: post.path,
    indexPath: "/writing/"
  };
}
