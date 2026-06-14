<script lang="ts">
  import PageMeta from "$lib/components/PageMeta.svelte";
  import { blogPosts } from "$lib/content/blog";
  import { site } from "$lib/content/site";
</script>

<PageMeta
  title={`Blog | ${site.name}`}
  description="Long-form notes on trustworthy AI, speech intelligence, cybersecurity, interface design, and evidence-aware systems."
  path="/blog/"
/>

<section class="blog-index">
  <div class="content-shell">
    <header class="index-head">
      <p class="kicker">Blog / Writing</p>
      <h1>Notes and essays</h1>
      <p>
        Long-form writing on trustworthy AI, speech and language systems,
        security, interface design, and evidence-aware deployment.
      </p>
    </header>

    <div class="post-list">
      {#each blogPosts as post}
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
