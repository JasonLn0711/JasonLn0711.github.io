<script lang="ts">
  import PageMeta from "$lib/components/PageMeta.svelte";
  import { blogPosts, blogSeries } from "$lib/content/blog";
  import { site } from "$lib/content/site";
  let filter = $state("all");
  let posts = $derived(filter === "daily-learning" ? blogPosts.filter((post) => post.kind === filter) : blogPosts);
</script>

<PageMeta
  title={`Blog | ${site.name}`}
  description="Bilingual daily learning notes and connected essays on AI, cybersecurity, and evidence-aware systems."
  path="/blog/"
/>

<section class="blog-index">
  <div class="content-shell">
    <header class="index-head">
      <p class="kicker">Blog / 學習札記</p>
      <h1>Learning, notes and essays</h1>
      <p>
        Bilingual daily learning notes and connected essays on AI, cybersecurity and evidence-aware systems.
        每日整理理解，用例子與文章連結逐步拆解大問題。
      </p>
    </header>

    <nav class="filters" aria-label="Article type">
      <button type="button" aria-pressed={filter === "all"} onclick={() => filter = "all"}>All posts／全部文章</button>
      <button type="button" aria-pressed={filter === "daily-learning"} onclick={() => filter = "daily-learning"}>Daily learning／每日學習</button>
      <a href="/blog/series/">Reading series／系列閱讀 →</a>
    </nav>
    <noscript><p>目前列出所有文章；啟用 JavaScript 可切換文章類型。</p></noscript>
    <div class="series-links">
      {#each blogSeries as series}<a href={`/blog/series/${series.slug}/`}>{series.title} →</a>{/each}
    </div>
    <div class="post-list">
      {#if posts.length === 0}<p>No daily learning articles published yet. 首篇每日學習文章將在內容確認並發布後出現。</p>{/if}
      {#each posts as post}
        <article class="post-row">
          <time datetime={post.date}>{post.dateLabel}</time>
          <div>
            <h2><a href={`/blog/${post.slug}/`}>{post.title}</a></h2>
            <p>{post.description}</p>
            <span>
              {post.categoryLabel}{post.tags.length ? ` · ${post.tags.join(" / ")}` : ""}
            </span>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  .filters { display: flex; flex-wrap: wrap; align-items: center; gap: 0.75rem; margin-bottom: 1.2rem; }
  .filters button { font: inherit; cursor: pointer; padding: 0.6rem 0.8rem; border: 1px solid var(--line); border-radius: var(--radius-sm); background: transparent; color: var(--ink); }
  .filters button[aria-pressed="true"] { background: var(--ink-strong); color: var(--bg); }
  .series-links { display: grid; gap: 0.5rem; margin-bottom: 2rem; }

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
  span {
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

  @media (max-width: 700px) {
    .post-row {
      grid-template-columns: 1fr;
      gap: 0.4rem;
    }
  }
</style>
