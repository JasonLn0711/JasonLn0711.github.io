<script lang="ts">
  import PageMeta from "#lib/components/PageMeta.svelte";
  import { professionalPosts, professionalSeries } from "#lib/content/blog.ts";
  import { site } from "#lib/content/site.ts";
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
    <p class="section-rail"><a href="/research/">Research／研究</a> · <a href="/projects/">Projects／專案</a> · <a href="/teaching/">Teaching／教學</a> · <a href="/event-notes/">Talks &amp; Workshops／演講與工作坊</a></p>

    <nav class="filters" aria-label="Article type">
      <button type="button" aria-pressed={filter === "all"} onclick={() => filter = "all"}>All posts／全部文章</button>
      {#each [["essay", "Essays／專業論述"], ["research-note", "Research notes／研究筆記"], ["update", "Work updates／工作進展"]] as [value, label]}
        <button type="button" aria-pressed={filter === value} onclick={() => filter = value}>{label}</button>
      {/each}
      <button type="button" aria-pressed={filter === "daily-learning"} onclick={() => filter = "daily-learning"}>Daily learning／每日學習</button>
      <a class="series-cta" href="/professional/series/">Reading series／系列閱讀 →</a>
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
  .section-rail {
    margin: 0 0 1.25rem;
    padding-block: 0.75rem;
    border-block: 1px solid var(--line);
    font-size: 0.92rem;
    line-height: 1.8;
  }

  .filters {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.6rem;
    margin-bottom: 1.15rem;
  }

  .filters button {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    font: inherit;
    font-size: 0.92rem;
    cursor: pointer;
    padding: 0.45rem 0.85rem;
    border: 1px solid var(--control-line);
    border-radius: var(--radius-sm);
    background: var(--surface);
    color: var(--ink-strong);
    transition:
      border-color 160ms var(--ease),
      background 160ms var(--ease),
      color 160ms var(--ease);
  }

  .filters button:hover {
    border-color: var(--accent);
    background: var(--accent-soft);
    color: var(--accent);
  }

  .filters button[aria-pressed="true"] {
    background: var(--accent-strong);
    border-color: var(--accent-strong);
    color: var(--on-accent);
  }

  .filters .series-cta {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    padding-inline: 0.35rem;
    font-size: 0.92rem;
    font-weight: var(--heading-weight);
  }

  .series-links {
    display: grid;
    gap: 0.25rem;
    margin-bottom: 2rem;
    padding: 0.55rem 0.9rem;
    border-left: 2px solid var(--accent);
    background: var(--surface-strong);
    border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  }

  .series-links a {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    font-size: 0.94rem;
    font-weight: var(--heading-weight);
  }

  .blog-index {
    padding-block: var(--page-pad-block);
  }

  .index-head {
    margin-bottom: clamp(1.5rem, 4vw, 2.25rem);
  }

  h1 {
    margin: 0.7rem 0 0.8rem;
    color: var(--ink-strong);
    font-size: var(--page-title-size);
    font-weight: var(--heading-weight);
    letter-spacing: -0.025em;
    line-height: 1.12;
    text-wrap: balance;
  }

  .index-head p:last-child {
    margin: 0;
    color: var(--muted);
    font-size: clamp(1.02rem, 0.96rem + 0.3vw, 1.14rem);
    line-height: 1.7;
  }

  .post-list {
    display: grid;
    gap: 1.5rem;
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
    font-size: 0.8rem;
  }

  h2 {
    margin: 0;
    color: var(--ink-strong);
    font-size: clamp(1.2rem, 1.08rem + 0.6vw, 1.45rem);
    line-height: 1.32;
    text-wrap: pretty;
  }

  h2 a {
    color: var(--ink-strong);
    text-decoration-color: var(--control-line);
    text-underline-offset: 0.19em;
  }

  h2 a:hover {
    color: var(--accent);
    text-decoration-color: currentColor;
  }

  p {
    margin: 0.45rem 0 0.55rem;
    color: var(--muted);
    line-height: 1.72;
  }

  @media (max-width: 700px) {
    .post-row {
      grid-template-columns: 1fr;
      gap: 0.35rem;
    }
  }
</style>
