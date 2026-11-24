<script lang="ts">
  import PageMeta from "$lib/components/PageMeta.svelte";
  import { blogPosts } from "$lib/content/blog";
  import { site } from "$lib/content/site";
  let filter = $state("all");
  let posts = $derived(filter === "all" ? blogPosts : blogPosts.filter((post) => post.category === filter));
</script>

<PageMeta
  title={`Blog | ${site.name}`}
  description="Personal perspectives, reading reflections, life experiences and humanities."
  path="/blog/"
/>

<section class="blog-index">
  <div class="content-shell">
    <header class="index-head">
      <p class="kicker">Blog / 個人雜記</p>
      <h1>Perspectives, reading and life</h1>
      <p>
        Personal perspectives, reading reflections, life experiences and humanities.
        <span lang="zh-Hant">個人觀點、閱讀心得、生命經驗，以及人文雜記。</span>
      </p>
    </header>
    {#if blogPosts.length > 0}
      <nav class="filters" aria-label="Article type">
        <button type="button" aria-pressed={filter === "all"} onclick={() => filter = "all"}>All posts／全部文章</button>
        {#each [["perspective", "Perspectives／個人觀點"], ["reading", "Reading／閱讀心得"], ["life", "Life／生命經驗"], ["humanities", "Humanities & miscellany／人文與雜記"]] as [value, label]}
          <button type="button" aria-pressed={filter === value} onclick={() => filter = value}>{label}</button>
        {/each}
      </nav>
      <noscript><p lang="zh-Hant">目前列出所有文章。啟用 JavaScript 可切換文章類型。</p></noscript>
      <div class="post-list" aria-live="polite">
        {#each posts as post}
          <article class="post-row">
            <time datetime={post.date}>{post.dateLabel}</time>
            <div>
              <h2><a href={`/blog/${post.slug}/`}>{post.title}</a></h2>
              <p>{post.description}</p>
              <span class="post-meta">
                {post.categoryLabel}{post.tags.length ? ` · ${post.tags.join(" / ")}` : ""}
              </span>
            </div>
          </article>
        {:else}
          <p>No articles in this category yet. <span lang="zh-Hant">此分類尚無已發布文章。</span></p>
        {/each}
      </div>
    {:else}
      <p>No personal articles have been published here yet. <span lang="zh-Hant">此處尚未發布個人文章。</span></p>
    {/if}
    <p class="professional-link"><a href="/professional/">Professional writing <span lang="zh-Hant">／專業文章</span> →</a></p>
  </div>
</section>

<style>
  .filters { display: flex; flex-wrap: wrap; align-items: center; gap: 0.75rem; margin-bottom: 1.2rem; }
  .filters button { font: inherit; cursor: pointer; padding: 0.6rem 0.8rem; border: 1px solid var(--line); border-radius: var(--radius-sm); background: transparent; color: var(--ink); }
  .filters button[aria-pressed="true"] { background: var(--ink-strong); color: var(--bg); }


  .blog-index {
    padding-block: clamp(3.5rem, 9vw, 6rem);
  }

  .index-head {
    margin-bottom: clamp(2.2rem, 6vw, 3.5rem);
  }

  h1 {
    margin: 1rem 0 0.85rem;
    color: var(--ink-strong);
    font-family: var(--font-serif);
    font-size: clamp(2.7rem, 8vw, 4.8rem);
    font-weight: 500;
    line-height: 1.06;
  }

  .index-head p:last-child {
    margin: 0;
    color: var(--muted);
    font-size: 1.12rem;
    line-height: 1.75;
  }

  .post-list {
    display: grid;
    gap: 1.6rem;
  }

  .post-row {
    display: grid;
    grid-template-columns: 8.5rem minmax(0, 1fr);
    gap: 1.5rem;
    border-top: 1px solid var(--line);
    padding-top: 1.4rem;
  }

  time,
  .post-meta {
    color: var(--muted);
    font-family: var(--font-mono);
    font-size: 0.78rem;
  }

  h2 {
    margin: 0;
    color: var(--ink-strong);
    font-size: clamp(1.25rem, 3vw, 1.55rem);
    line-height: 1.32;
  }

  p {
    margin: 0.45rem 0 0.55rem;
    color: var(--muted);
    line-height: 1.72;
  }

  .professional-link {
    margin-top: 1.25rem;
  }

  @media (max-width: 700px) {
    .post-row {
      grid-template-columns: 1fr;
      gap: 0.4rem;
    }
  }
</style>
