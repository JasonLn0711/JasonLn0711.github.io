<script lang="ts">
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
  type="article"
  publishedTime={post.date}
  modifiedTime={post.updatedDate}
/>

<div class="article-shell page-shell">
  <ArticleToc contentId="article-content" />

  <article class="article-main">
    <header class="article-header">
      <p class="kicker">{post.categoryLabel}</p>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <div class="meta-line">
        <time datetime={post.date}>{post.dateLabel}</time>
        {#if post.tags.length}
          <span>{post.tags.join(" / ")}</span>
        {/if}
      </div>
    </header>

    <div id="article-content" class="article-content longform">
      {#if Content}
        <Content />
      {/if}
    </div>

    <footer class="article-footer">
      <a href={data.indexPath}>Back to writing</a>
    </footer>
  </article>
</div>

<style>
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
