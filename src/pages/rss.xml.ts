import type { APIRoute } from "astro";
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { getBlogPath, getLocalizedBlogEntries } from "../lib/content";
import { defaultLocale } from "../lib/i18n";
import { site } from "../lib/site";

export const GET: APIRoute = async (context) => {
  const posts = getLocalizedBlogEntries(await getCollection("blog"), defaultLocale);

  return rss({
    title: "Jason Chia-Sheng Lin | Research Writing",
    description: "Essays, research notes, and technical writing on trustworthy AI systems, speech intelligence, cybersecurity, and real-world deployment.",
    site: context.site ?? site.url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: getBlogPath(post, defaultLocale)
    }))
  });
};
