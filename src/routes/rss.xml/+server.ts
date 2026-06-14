import { blogPosts } from "$lib/content/blog";
import { site } from "$lib/content/site";

export const prerender = true;

export function GET() {
  const items = blogPosts
    .map(
      (item) => `<item>
  <title><![CDATA[${item.title}]]></title>
  <link>${new URL(`/blog/${item.slug}/`, site.url).toString()}</link>
  <guid>${new URL(`/blog/${item.slug}/`, site.url).toString()}</guid>
  <pubDate>${new Date(item.date).toUTCString()}</pubDate>
  <description><![CDATA[${item.description}]]></description>
</item>`
    )
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
  <title>${site.name} Blog</title>
  <link>${site.url}</link>
  <description>${site.description}</description>
  ${items}
</channel>
</rss>`;

  return new Response(body, {
    headers: {
      "content-type": "application/rss+xml; charset=utf-8"
    }
  });
}
