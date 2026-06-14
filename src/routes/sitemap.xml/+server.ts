import { blogPosts } from "$lib/content/blog";
import { routePaths, site } from "$lib/content/site";

export const prerender = true;

export function GET() {
  const paths = Array.from(
    new Set([
      ...routePaths,
      ...blogPosts.flatMap((post) => [`/blog/${post.slug}/`, `/writing/${post.slug}/`])
    ])
  );

  const body = `<?xml version="1.0" encoding="UTF-8" ?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths
  .map(
    (path) => `  <url>
    <loc>${new URL(path, site.url).toString()}</loc>
    <changefreq>weekly</changefreq>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "content-type": "application/xml; charset=utf-8"
    }
  });
}
