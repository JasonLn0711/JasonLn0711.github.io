<script lang="ts">
  import type { BlogPost } from "$lib/content/blog";
  import { articleLanguage } from "$lib/content/home";
  import { homeArticleZh } from "$lib/content/site";
  let { post, locale = "en", featured = false }: { post: BlogPost; locale?: "en" | "zh-Hant"; featured?: boolean } = $props();
  let zh = $derived(locale === "zh-Hant");
  let translated = $derived(zh ? homeArticleZh[post.slug] : undefined);
  let dateLabel = $derived(new Intl.DateTimeFormat(zh ? "zh-TW" : "en", {
    timeZone: "Asia/Taipei", year: "numeric", month: "short", day: "numeric"
  }).format(new Date(`${post.date}T00:00:00+08:00`)));
</script>

<article class:featured class="article-row">
  <div class="article-meta">
    <time datetime={post.date}>{dateLabel}</time>
    <span>{post.section === "professional" ? (zh ? "專業文章 · " : "Professional · ") : (zh ? "個人雜記 · " : "Blog · ")}{articleLanguage(post.languages, zh)}</span>
  </div>
  <div class="article-copy" lang={translated ? "zh-Hant" : post.languages[0]}>
    <h3><a href={post.path}>{translated?.title ?? post.title}<span class="arrow" aria-hidden="true"> ↗</span></a></h3>
    <p>{translated?.description ?? post.description}</p>
  </div>
</article>

<style>
  .article-row { display: grid; gap: 0.55rem; padding-block: 1.5rem; border-bottom: 1px solid var(--line); }
  .article-row:first-child { padding-top: 0; }
  .article-row:last-child { border-bottom: 0; padding-bottom: 0; }
  .article-meta { display: flex; flex-wrap: wrap; gap: 0.25rem 1rem; color: var(--muted); font-size: 0.875rem; }
  time { font-variant-numeric: tabular-nums; }
  h3 { margin: 0; font-size: 1.15rem; font-weight: 600; line-height: 1.5; text-wrap: pretty; }
  .featured h3 { font-size: clamp(1.2rem, 2vw, 1.4rem); }
  h3 a { color: var(--ink-strong); text-decoration: none; text-underline-offset: 0.2em; }
  h3 a:hover { color: var(--accent); text-decoration: underline; }
  .arrow { color: var(--accent); white-space: nowrap; font-size: 0.85em; }
  p { margin: 0.45rem 0 0; max-width: 65ch; color: var(--muted); line-height: 1.8; }
  .article-copy { min-width: 0; overflow-wrap: anywhere; }
</style>
