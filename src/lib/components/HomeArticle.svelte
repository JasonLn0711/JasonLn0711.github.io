<script lang="ts">
  import type { BlogPost } from "#lib/content/blog.ts";
  import { articleLanguage } from "#lib/content/home.ts";
  import { homeArticleZh } from "#lib/content/site.ts";

  let { post, locale = "en", featured = false, cover }: {
    post: BlogPost;
    locale?: "en" | "zh-Hant";
    featured?: boolean;
    cover?: string;
  } = $props();

  let zh = $derived(locale === "zh-Hant");
  let translated = $derived(zh ? homeArticleZh[post.slug] : undefined);
  let dateLabel = $derived(new Intl.DateTimeFormat(zh ? "zh-TW" : "en", {
    timeZone: "Asia/Taipei", year: "numeric", month: "short", day: "numeric"
  }).format(new Date(`${post.date}T00:00:00Z`)));
</script>

<article class="article-row" class:featured class:with-cover={cover}>
  <div class="article-meta">
    <time datetime={post.date}>{dateLabel}</time>
    <span>{post.section === "professional" ? (zh ? "專業文章 · " : "Professional · ") : (zh ? "個人雜記 · " : "Blog · ")}{articleLanguage(post.languages, zh)}</span>
  </div>
  <div class="article-copy" lang={translated ? "zh-Hant" : post.languages[0]}>
    <h3><a href={post.path}>{translated?.title ?? post.title}<span class="arrow" aria-hidden="true"> ↗</span></a></h3>
    <p>{translated?.description ?? post.description}</p>
  </div>
  {#if cover}
    <img class="feature-cover" src={cover} alt="" width="768" height="432" loading={featured ? "eager" : "lazy"} decoding="async" />
  {/if}
</article>

<style>
  .article-row {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 0.4rem 1.2rem;
    padding-block: 1rem;
    border-block-end: 1px solid var(--line);
  }

  .article-row:first-child { padding-block-start: 0; }
  .article-row:last-child { border-block-end: 0; }
  .article-meta { display: flex; flex-wrap: wrap; gap: 0.1rem 0.85rem; color: var(--muted); font-size: 0.81rem; }
  time { font-variant-numeric: tabular-nums; }
  .article-copy { min-inline-size: 0; overflow-wrap: anywhere; }
  h3 { margin: 0; font-size: 1.16rem; font-weight: var(--heading-weight); line-height: 1.4; text-wrap: pretty; }
  h3 a { color: var(--ink-strong); text-decoration-color: var(--control-line); text-underline-offset: 0.19em; }
  h3 a:hover { color: var(--accent); text-decoration-color: currentColor; }
  .arrow { color: var(--accent); white-space: nowrap; font-size: 0.8em; }
  p { margin: 0.4rem 0 0; color: var(--muted); font-size: 0.96rem; line-height: 1.65; }

  .with-cover {
    grid-template-columns: minmax(0, 1fr) minmax(3.75rem, 22%);
    grid-template-rows: min-content 1fr;
    grid-template-areas: "meta cover" "copy cover";
    align-items: start;
  }

  .with-cover .article-meta { grid-area: meta; }
  .with-cover .article-copy { grid-area: copy; }

  .feature-cover {
    grid-area: cover;
    inline-size: 100%;
    block-size: auto;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    border: 1px solid var(--line);
    border-radius: var(--radius-sm);
  }

  .featured {
    gap: 0.6rem 1.5rem;
    padding-block: clamp(1.25rem, 2.8vw, 2rem);
  }

  .featured.with-cover {
    grid-template-columns: minmax(0, 1.08fr) minmax(0, 1.12fr);
    align-content: start;
  }

  .featured h3 {
    font-size: clamp(1.6rem, 1.25rem + 0.95vw, 2.25rem);
    line-height: 1.2;
    letter-spacing: -0.025em;
    text-wrap: balance;
  }

  @media (max-width: 38em) {
    .featured.with-cover {
      grid-template-columns: minmax(0, 1fr);
      grid-template-rows: auto;
      grid-template-areas: "meta" "copy" "cover";
    }

    .featured .feature-cover { margin-block-start: 0.35rem; }
  }
</style>
