<script lang="ts">
  import type { BlogPost } from "#lib/content/blog.ts";
  import { articleLanguage } from "#lib/content/home.ts";
  import { homeArticleZh } from "#lib/content/site.ts";

  let { post, locale = "en" }: {
    post: BlogPost;
    locale?: "en" | "zh-Hant";
  } = $props();

  let zh = $derived(locale === "zh-Hant");
  let translated = $derived(zh ? homeArticleZh[post.slug] : undefined);
  let dateLabel = $derived(new Intl.DateTimeFormat(zh ? "zh-TW" : "en", {
    timeZone: "Asia/Taipei", year: "numeric", month: "short", day: "numeric"
  }).format(new Date(`${post.date}T00:00:00Z`)));
</script>

<article class="article-row">
  <div class="article-meta">
    <time datetime={post.date}>{dateLabel}</time>
    <span>{articleLanguage(post.languages, zh)}</span>
  </div>
  <div class="article-copy" lang={translated ? "zh-Hant" : post.languages[0]}>
    <h3><a href={post.path}>{translated?.title ?? post.title}</a></h3>
    <p>{translated?.description ?? post.description}</p>
  </div>
</article>

<style>
  .article-row {
    display: grid;
    grid-template-columns: 8.5rem minmax(0, 1fr);
    gap: 0.35rem 1.75rem;
    align-items: start;
  }

  .article-meta {
    display: grid;
    gap: 0.2rem;
    padding-block-start: 0.2rem;
    color: var(--muted);
    font-size: 0.82rem;
    line-height: 1.5;
  }

  time {
    font-variant-numeric: tabular-nums;
  }

  .article-copy {
    min-inline-size: 0;
    overflow-wrap: anywhere;
  }

  h3 {
    margin: 0;
    font-size: 1.06rem;
    font-weight: var(--heading-weight);
    line-height: 1.48;
  }

  h3 a {
    color: var(--ink-strong);
    text-decoration: none;
  }

  h3 a:hover {
    color: var(--accent);
    text-decoration: underline;
    text-underline-offset: 0.22em;
  }

  p {
    margin: 0.35rem 0 0;
    color: var(--muted);
    font-size: 0.95rem;
    line-height: 1.82;
    text-wrap: pretty;
  }

  @media (max-width: 42em) {
    .article-row {
      grid-template-columns: minmax(0, 1fr);
      gap: 0.3rem;
    }

    .article-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 0 0.75rem;
      padding-block-start: 0;
    }
  }
</style>
