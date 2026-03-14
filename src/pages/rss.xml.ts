import type { APIRoute } from "astro";
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { sortBlogEntries } from "../lib/content";
import { site } from "../lib/site";

export const GET: APIRoute = async (context) => {
  const posts = sortBlogEntries(await getCollection("blog"));

  return rss({
    title: "Jason Chia-Sheng Lin | Research Writing",
    description: "Research notes, essays, and engineering writing on speech intelligence, trustworthy AI, fraud detection systems, and AI security.",
    site: context.site ?? site.url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.slug}/`
    }))
  });
};
