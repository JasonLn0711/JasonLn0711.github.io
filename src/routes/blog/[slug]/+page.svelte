<script lang="ts">
  import ArticleConnections from "$lib/components/ArticleConnections.svelte";
  import ArticleToc from "$lib/components/ArticleToc.svelte";
  import PageMeta from "$lib/components/PageMeta.svelte";
  import { getBlogComponent, type BlogPost } from "$lib/content/blog";
  import { site } from "$lib/content/site";

  let {
    data
  } = $props<{
    data: {
      post: BlogPost;
      canonicalPath: string;
      indexPath: string;
    };
  }>();

  let post = $derived(data.post);
  let Content = $derived(getBlogComponent(post.slug));
</script>

<PageMeta
  title={`${post.title} | ${site.name}`}
  description={post.description}
  path={data.canonicalPath}
  image={post.ogImage}
  lang={post.languages.includes("zh-Hant") ? "zh-tw" : "en"}
  type="article"
  publishedTime={post.date}
  modifiedTime={post.updatedDate}
/>

<div class="article-shell page-shell">
  {#key post.slug}<ArticleToc contentId="article-content" />{/key}

  <article class="article-main">
    <header class="article-header">
      <p class="kicker">{post.kind === "daily-learning" ? "Daily learning · 每日學習" : post.categoryLabel}</p>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <div class="meta-line">
        <time datetime={post.date}>{post.dateLabel}</time>
        {#if post.tags.length}
          <span>{post.tags.join(" / ")}</span>
        {/if}
      </div>
      {#if post.learningDate}<p class="learning-date">學習日期 / Learning date: {post.learningDate}</p>{/if}
      {#if post.languages.includes("en") && post.languages.includes("zh-Hant")}
        <nav class="language-links" aria-label="Article languages">
          <a href="#zh" lang="zh-Hant">閱讀中文 ↓</a>
          <a href="#en" lang="en">Read in English ↓</a>
        </nav>
      {/if}
    </header>

    <div id="article-content" class="article-content longform">
      {#if Content}
        <Content />
      {/if}
    </div>

    <footer class="article-footer">
      <ArticleConnections {post} />
      <a href={data.indexPath}>← Blog／所有文章</a>
    </footer>
  </article>
</div>

<style>
  .language-links { display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 1.25rem; }
  .learning-date { font-size: 0.8rem !important; }
  .article-shell {
    display: grid;
    grid-template-columns: var(--toc-width) minmax(0, var(--article-width)) 1fr;
    gap: clamp(2rem, 5vw, 3.5rem);
    align-items: start;
    padding-block: clamp(3.4rem, 9vw, 6rem);
  }

  .article-main {
    grid-column: 2;
    min-width: 0;
  }

  .article-header {
    border-bottom: 1px solid var(--line);
    margin-bottom: clamp(2rem, 6vw, 3rem);
    padding-bottom: clamp(1.5rem, 5vw, 2.4rem);
  }

  h1 {
    margin: 0.9rem 0 1rem;
    color: var(--ink-strong);
    font-family: var(--font-serif);
    font-size: clamp(2.35rem, 7vw, 4.6rem);
    font-weight: 500;
    line-height: 1.08;
  }

  .article-header p:not(.kicker) {
    margin: 0 0 1.1rem;
    color: var(--muted);
    font-size: clamp(1.08rem, 2.4vw, 1.25rem);
    line-height: 1.7;
  }

  .article-footer {
    border-top: 1px solid var(--line);
    margin-top: 3rem;
    padding-top: 1.2rem;
  }

  @media (max-width: 1040px) {
    .article-shell {
      width: min(100% - 1.35rem, var(--article-width));
      grid-template-columns: minmax(0, 1fr);
    }

    .article-main {
      grid-column: 1;
    }
  }
</style>
