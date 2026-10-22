import assert from "node:assert/strict";
import test from "node:test";
import { createBlogPosts, type RawBlogMetadata } from "../src/lib/content/blog-model.ts";
import { latestWriting, featuredWriting, articleLanguage } from "../src/lib/content/home.ts";

const entry = (slug: string, pubDate: string, extra: RawBlogMetadata = {}) => ({
  modulePath: `/content/${slug}.mdx`, metadata: { title: slug, description: "A public article", pubDate, ...extra }
});

test("homepage keeps the latest five published articles even after a long gap", () => {
  const posts = createBlogPosts([
    entry("old", "2026-01-01", { updatedDate: "2026-10-22" }),
    ...[2, 3, 4, 5, 6, 7].map((day) => entry(`post-${day}`, `2026-01-0${day}`)),
    entry("draft", "2026-10-22", { draft: true }),
    entry("future", "2026-10-24")
  ], [], "2026-10-23");
  const original = [...posts];
  assert.deepEqual(latestWriting(posts).map((p) => p.slug), ["post-7", "post-6", "post-5", "post-4", "post-3"]);
  assert.deepEqual(posts, original);
});

test("homepage handles empty, short and same-day lists deterministically", () => {
  assert.deepEqual(latestWriting([]), []);
  const posts = [{ slug: "z", date: "2026-01-01" }, { slug: "a", date: "2026-01-01" }];
  assert.deepEqual(latestWriting(posts).map((p) => p.slug), ["a", "z"]);
  assert.equal(latestWriting(posts.slice(0, 1)).length, 1);
});

test("curation preserves editorial order and never creates links to unpublished articles", () => {
  const posts = createBlogPosts([entry("first", "2026-01-01"), entry("second", "2026-02-01"), entry("draft", "2026-01-01", { draft: true })], [], "2026-10-23");
  assert.deepEqual(featuredWriting(posts, ["first", "draft", "missing", "second"]).map((p) => p.slug), ["first", "second"]);
  assert.deepEqual(featuredWriting([], ["first"]), []);
});

test("translated homepage captions do not imply translated article bodies", () => {
  assert.equal(articleLanguage(["en"], true), "英文原文");
  assert.equal(articleLanguage(["zh-Hant"], false), "Chinese article");
  assert.equal(articleLanguage(["en", "zh-Hant"], true), "中英雙語");
});
