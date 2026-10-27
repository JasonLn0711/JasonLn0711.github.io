<script lang="ts">
  import PageMeta from "$lib/components/PageMeta.svelte";
  import { professionalPosts, professionalSeries } from "$lib/content/blog";
  import { site } from "$lib/content/site";
  let filter = $state("all");
  let posts = $derived(filter === "all" ? professionalPosts : professionalPosts.filter((post) => filter === "daily-learning" ? post.kind === filter : post.category === filter));
</script>

<PageMeta
  title={`Professional writing | ${site.name}`}
  description="Research perspectives, technical commentary and work updates."
  path="/professional/"
/>

<section class="blog-index">
  <div class="content-shell">
    <header class="index-head">
      <p class="kicker">Professional writing / 專業文章</p>
      <h1>Research, practice and technical essays</h1>
      <p>
        Research perspectives, technical commentary and work updates.
        研究觀點、技術評論與工作進展；研究成果、專案及教學另有各自的頁面。
      </p>
    </header>
    <p><a href="/research/">Research／研究</a> · <a href="/projects/">Projects／專案</a> · <a href="/teaching/">Teaching／教學</a> · <a href="/event-notes/">Talks &amp; Workshops／演講與工作坊</a></p>

    <nav class="filters" aria-label="Article type">
      <button type="button" aria-pressed={filter === "all"} onclick={() => filter = "all"}>All posts／全部文章</button>
      {#each [["essay", "Essays／專業論述"], ["research-note", "Research notes／研究筆記"], ["update", "Work updates／工作進展"]] as [value, label]}
        <button type="button" aria-pressed={filter === value} onclick={() => filter = value}>{label}</button>
      {/each}
      <button type="button" aria-pressed={filter === "daily-learning"} onclick={() => filter = "daily-learning"}>Daily learning／每日學習</button>
      <a href="/professional/series/">Reading series／系列閱讀 →</a>
    </nav>
    <noscript><p>目前列出所有文章；啟用 JavaScript 可切換文章類型。</p></noscript>
    <div class="series-links">
      {#each professionalSeries as series}<a href={`/professional/series/${series.slug}/`}>{series.title} →</a>{/each}
    </div>
    <div class="post-list" aria-live="polite">
      {#if posts.length === 0}<p>No articles in this category yet. 此分類尚無已發布文章。</p>{/if}
      {#each posts as post}
        <article class="post-row">
          <time datetime={post.date}>{post.dateLabel}</time>
          <div>
            <h2><a href={`/professional/${post.slug}/`}>{post.title}</a></h2>
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
