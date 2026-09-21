import test from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { compile } from "mdsvex";
import { compile as compileSvelte } from "svelte/compiler";
import math from "remark-math";
import { remarkMathRender } from "../scripts/remark-math-render.js";
import { readPublishedPosts } from "../scripts/blog-source.ts";
import { createBlogPosts, recentPosts, taipeiDate, normalizeDate, seriesPosts, articleConnections, type RawBlogMetadata, type Series } from "../src/lib/content/blog-model.ts";

const today = "2026-09-21";
const series: Series[] = [{slug: "topic", title: "Topic", description: "A larger question", roadmap: ["Basics", "Application"]}];
const entry = (slug: string, metadata: RawBlogMetadata = {}) => ({
  modulePath: `src/content/blog/${slug}.mdx`,
  metadata: {title: slug, description: "A concept", pubDate: today, ...metadata}
});

test("three Taipei calendar days, including every post and excluding tomorrow", () => {
  const input = ["2026-09-18", "2026-09-19", "2026-09-20", "2026-09-21", "2026-09-21", "2026-09-22"].map((date) => ({date}));
  assert.equal(taipeiDate(new Date("2026-09-20T16:00:00Z")), today);
  assert.deepEqual(recentPosts(input, new Date("2026-09-20T16:00:00Z")).map((p) => p.date), [today, today, "2026-09-20", "2026-09-19"]);
  assert.equal(recentPosts(input, new Date("2026-09-20T15:59:59Z")).some((p) => p.date === today), false);
});

test("three-day window crosses year and leap-month boundaries; empty is valid", () => {
  const dates = (values: string[]) => values.map((date) => ({ date }));
  assert.equal(recentPosts(dates(["2025-12-30", "2025-12-31", "2026-01-01"]), new Date("2026-01-01T01:00:00Z")).length, 3);
  assert.equal(recentPosts(dates(["2024-02-28", "2024-02-29", "2024-03-01"]), new Date("2024-03-01T01:00:00Z")).length, 3);
  assert.deepEqual(recentPosts([], new Date()), []);
  assert.throws(() => normalizeDate("2026-02-29"), /Invalid calendar date/);
  assert.equal(normalizeDate("2026-06-14T00:00:00.000Z"), "2026-06-14");
});

test("updates do not make old posts new; legacy posts retain defaults", () => {
  const posts = createBlogPosts([entry("old", {pubDate: "2026-01-01", updatedDate: today})], [], today);
  assert.deepEqual(recentPosts(posts, new Date("2026-09-21T00:00:00Z")), []);
  assert.equal(posts[0].kind, "essay");
  assert.deepEqual(posts[0].languages, ["en"]);
});

test("draft and future posts are excluded before relation validation", () => {
  const posts = createBlogPosts([entry("draft", {draft: true}), entry("future", {pubDate: "2099-01-01"}), entry("public")], [], today);
  assert.deepEqual(posts.map((p) => p.slug), ["public"]);
  assert.throws(() => createBlogPosts([entry("a", {relations: [{slug: "draft", type: "related", reason: "Context"}]}), entry("draft", {draft: true})], [], today), /target is not published/);
});

test("duplicate slug, self link, missing target and invalid relation fail with filename", () => {
  assert.throws(() => createBlogPosts([entry("a"), entry("b", {routeSlug: "a"})], [], today), /b.mdx.*duplicate slug/);
  for (const slug of ["a", "absent"]) {
    assert.throws(() => createBlogPosts([entry("a", {relations: [{slug, type: "related", reason: "Context"}]})], [], today), /a.mdx/);
  }
  assert.throws(() => createBlogPosts([entry("a", {relations: [{slug: "b", type: "related", reason: ""}]}), entry("b")], [], today), /Invalid relation/);
});

test("series ordering is editorial and incoming links preserve the reason", () => {
  const posts = createBlogPosts([
    entry("next", {series: "topic", order: 2, relations: [{slug: "first", type: "prerequisite", reason: "Defines the notation", reasonZh: "定義符號"}]}),
    entry("first", {series: "topic", order: 1})
  ], series, today);
  assert.deepEqual(seriesPosts(posts, "topic").map((p) => p.slug), ["first", "next"]);
  const connections = articleConnections(posts, posts.find((p) => p.slug === "first")!);
  assert.equal(connections.incoming[0].post.slug, "next");
  assert.equal(connections.incoming[0].reasonZh, "定義符號");
  assert.throws(() => createBlogPosts([entry("a", {series: "topic", order: 1}), entry("b", {series: "topic", order: 1})], series, today), /duplicate order/);
  assert.throws(() => createBlogPosts([entry("a", {series: "missing", order: 1})], series, today), /Unknown series/);
});

test("one bilingual daily post per learning date, independently of publication date", () => {
  const daily: RawBlogMetadata = {kind: "daily-learning", learningDate: "2026-09-20", languages: ["zh-Hant", "en"]};
  assert.equal(createBlogPosts([entry("daily", daily)], [], today).length, 1);
  assert.throws(() => createBlogPosts([entry("daily", {...daily, languages: ["en"]})], [], today), /both languages/);
  assert.throws(() => createBlogPosts([entry("a", daily), entry("b", daily)], [], today), /unique learningDate/);
  assert.throws(() => createBlogPosts([entry("daily", {...daily, learningDate: "2026-09-22"})], [], today), /learningDate/);
});

test("source manifest omits draft/future modules and checks language sections", () => {
  const root = mkdtempSync(join(tmpdir(), "blog-source-test-"));
  try {
    mkdirSync(join(root, "src/content/blog"), {recursive: true});
    mkdirSync(join(root, "src/lib/content"), {recursive: true});
    writeFileSync(join(root, "src/lib/content/blog-series.json"), "[]");
    const file = (name: string, extra: string, body = "Text") => writeFileSync(join(root, `src/content/blog/${name}.mdx`), `---\ntitle: ${name}\ndescription: Test\npubDate: 2026-09-21\n${extra}\n---\n${body}`);
    file("hidden", "draft: true", "DRAFT_ONLY_SENTINEL");
    file("future", "", "Future");
    writeFileSync(join(root, "src/content/blog/future.mdx"), "---\ntitle: Future\ndescription: Future\npubDate: 2099-01-01\n---\nFUTURE_ONLY_SENTINEL");
    file("public", "");
    assert.deepEqual(readPublishedPosts(root, today).map((p) => p.slug), ["public"]);
    file("daily", "kind: daily-learning\nlearningDate: 2026-09-21\nlanguages: [zh-Hant, en]");
    assert.throws(() => readPublishedPosts(root, today), /missing <section/);
    file("daily", "kind: daily-learning\nlearningDate: 2026-09-21\nlanguages: [zh-Hant, en]", '<section id="zh" lang="zh-Hant">\n中文\n</section>\n<section id="en" lang="en">\nEnglish\n</section>');
    assert.equal(readPublishedPosts(root, today).length, 2);
  } finally { rmSync(root, {recursive: true, force: true}); }
});

const preprocess = (source: string) => compile(source, {remarkPlugins: [math, remarkMathRender]});

test("inline and display mathematics survive Svelte compilation with MathML", async () => {
  const result = await preprocess(String.raw`## Math
+Inline $x_{i}^{2}+\alpha$ and $\{x\}$, $6.02\times 10^{23}$.
+
+$$
+\sum_{i=1}^{n}x_i = \frac{a}{b} + \begin{bmatrix}1&0\\0&1\end{bmatrix}
+$$`.replace(/^\+/gm, ""));
  assert.ok(result);
  assert.match(result.code, /katex-display/);
  assert.match(result.code, /MathML/);
  assert.doesNotThrow(() => compileSvelte(result.code, {generate: "server", filename: "fixture.svelte"}));
});

test("invalid formula reports its location; code examples and escaped currency stay literal", async () => {
  await assert.rejects(preprocess("Text\n\n$\\notarealcommand{x}$"), /Invalid math/);
  const result = await preprocess('Price \\$20.\n\n`$x_{i}$`\n\n```text\n$$not mathematics$$\n```');
  assert.ok(result);
  assert.doesNotMatch(result.code, /class=\\?"katex/);
  assert.doesNotThrow(() => compileSvelte(result.code, {generate: "server", filename: "literal.svelte"}));
});
