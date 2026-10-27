import { allPosts } from "$lib/content/blog";
import { site } from "$lib/content/site";

export const prerender = true;
const xml = (value: string) => value.replace(/[<>&"']/g, (char) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&apos;" }[char]!));

export function GET() {
  const items = allPosts
    .map(
      (item) => `<item>
  <title>${xml(item.title)}</title>
  <link>${new URL(item.path, site.url).toString()}</link>
  <guid isPermaLink="false">${new URL(`/blog/${item.slug}/`, site.url).toString()}</guid>
  <category>${item.section === "professional" ? "Professional writing" : "Personal Blog"}</category>
  <pubDate>${new Date(`${item.date}T00:00:00+08:00`).toUTCString()}</pubDate>
  <description>${xml(item.description)}</description>
</item>`
    )
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
  <title>${xml(site.name)} — Articles</title>
  <link>${site.url}</link>
  <description>${xml(site.description)}</description>
  ${items}
</channel>
</rss>`;

  return new Response(body, {
    headers: {
      "content-type": "application/rss+xml; charset=utf-8"
    }
  });
}
