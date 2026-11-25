<script lang="ts">
  import PageMeta from "#lib/components/PageMeta.svelte";
  import { blogPosts } from "#lib/content/blog.ts";
  import { site } from "#lib/content/site.ts";
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
  .filters {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.6rem;
    margin-bottom: 1.5rem;
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

  .blog-index {
    padding-block: var(--page-pad-block);
  }

  .index-head {
    margin-bottom: clamp(1.75rem, 4.5vw, 2.5rem);
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
  .post-meta {
    color: var(--muted);
    font-size: 0.8rem;
  }

  h2 {
    margin: 0;
    color: var(--ink-strong);
    font-size: clamp(1.2rem, 1.08rem + 0.6vw, 1.45rem);
    line-height: 1.32;
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

  .professional-link {
    margin-top: 1.75rem;
    padding-top: 1rem;
    border-top: 1px solid var(--line);
  }

  .professional-link a {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    font-weight: var(--heading-weight);
  }

  @media (max-width: 700px) {
    .post-row {
      grid-template-columns: 1fr;
      gap: 0.35rem;
    }
  }
</style>
