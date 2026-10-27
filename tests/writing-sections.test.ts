import test from "node:test";
import assert from "node:assert/strict";
import { readPublishedPosts } from "../scripts/blog-source.ts";
import { createBlogPosts } from "../src/lib/content/blog-model.ts";
import { readFileSync } from "node:fs";

test("published professional inventory is separate from personal Blog and retains its reading graph", () => {
  const posts = readPublishedPosts(process.cwd(), "2026-10-27");
  assert.equal(posts.length, 5);
  assert.ok(posts.every(p => p.section === "professional" && p.path === `/professional/${p.slug}/`));
  assert.equal(posts.filter(p => p.section === "blog").length, 0);
  assert.equal(posts.filter(p => p.series === "evidence-aware-ai").length, 4);
  const redirects = readFileSync("public/_redirects", "utf8");
  for (const p of posts) {
    for (const alias of ["blog", "writing"]) assert.ok(redirects.includes(`/${alias}/${p.slug}/ ${p.path} 301`));
    for (const rel of p.relations) assert.ok(posts.some(p => p.slug === rel.slug));
  }
  assert.ok(!redirects.includes("/blog/*"));
});

test("personal and professional source locations determine distinct canonical paths", () => {
  const metadata = { title: "Public essay", description: "Description", pubDate: "2026-01-01" };
  const posts = createBlogPosts([
    {modulePath:"src/content/blog/personal.mdx",metadata:{...metadata,category:"life"}},
    {modulePath:"src/content/professional/technical.mdx",metadata}
  ],[],"2026-10-27");
  assert.equal(posts.find(p=>p.slug === "personal")?.path,"/blog/personal/");
  assert.equal(posts.find(p=>p.slug === "technical")?.path,"/professional/technical/");
});
