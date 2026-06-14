<script lang="ts">
  import PageMeta from "$lib/components/PageMeta.svelte";
  import { blogPosts } from "$lib/content/blog";
  import { currentSnapshot, recentHighlights, site, workTracks } from "$lib/content/site";

  const recentPosts = blogPosts.slice(0, 3);
  const featuredHighlights = recentHighlights.slice(0, 5);
</script>

<PageMeta title={site.defaultTitle} description={site.description} path="/" />

<section class="home-intro">
  <div class="content-shell">
    <p class="kicker">{site.title}</p>
    <h1>{site.name}</h1>
    <p class="lead">{currentSnapshot.headline}</p>
    <p>{currentSnapshot.summary}</p>
    <div class="intro-links" aria-label="Primary links">
      <a href="/now/">Recent work</a>
      <a href="/research/">Research</a>
      <a href="/projects/">Systems</a>
      <a href="/teaching/">Teaching</a>
      <a href="/blog/">Writing</a>
      <a href="/resume/">CV</a>
    </div>
  </div>
</section>

<section class="home-section">
  <div class="content-shell">
    <div class="section-title-row">
      <h2>Recent 90-day snapshot</h2>
      <a href="/now/">Full timeline</a>
    </div>
    <div class="snapshot-list">
      {#each featuredHighlights as item}
        <article class="snapshot-row">
          <time datetime={item.date}>{item.period}</time>
          <div>
            <h3><a href={item.href}>{item.title}</a></h3>
            <p>{item.summary}</p>
            <span>{item.category} · {item.status}</span>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>

<section class="home-section">
  <div class="content-shell">
    <h2>How to read the work</h2>
    <div class="track-list">
      {#each workTracks as track}
        <article>
          <h3><a href={track.href}>{track.title}</a></h3>
          <p>{track.summary}</p>
        </article>
      {/each}
    </div>
  </div>
</section>

<section class="home-section">
  <div class="content-shell">
    <h2>Start here</h2>
    <div class="start-list">
      <p><strong>For research collaborators:</strong> start with <a href="/research/">Research</a> and the recent evidence surfaces.</p>
      <p><strong>For healthcare or regulated-AI partners:</strong> start with <a href="/projects/">Systems</a> and the scope controls on each prototype.</p>
      <p><strong>For AI systems learners:</strong> start with <a href="/teaching/">Teaching</a>, then read the AI Gateway accelerator handout.</p>
      <p><strong>For hiring or review:</strong> start with <a href="/now/">Now</a> and <a href="/resume/">CV</a> for the fastest current map.</p>
    </div>
  </div>
</section>

<section class="home-section">
  <div class="content-shell">
    <div class="section-title-row">
      <h2>Recent writing</h2>
      <a href="/blog/">All posts</a>
    </div>
    <div class="snapshot-list">
      {#each recentPosts as post}
        <article class="snapshot-row">
          <time datetime={post.date}>{post.dateLabel}</time>
          <div>
            <h3><a href={`/blog/${post.slug}/`}>{post.title}</a></h3>
            <p>{post.description}</p>
            <span>{post.categoryLabel}{post.tags.length ? ` · ${post.tags.slice(0, 3).join(" / ")}` : ""}</span>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  .home-intro {
    padding-block: clamp(4rem, 10vw, 7rem) clamp(2.5rem, 7vw, 4.5rem);
  }

  .home-intro h1 {
    margin: 1.1rem 0 1.2rem;
    color: var(--ink-strong);
    font-family: var(--font-serif);
    font-size: clamp(3rem, 9vw, 5.4rem);
    font-weight: 500;
    letter-spacing: 0;
    line-height: 1.05;
    text-wrap: balance;
  }

  .home-intro p {
    margin: 0;
    color: var(--ink);
  }

  .home-intro p + p {
    margin-top: 1.1rem;
  }

  .lead {
    color: var(--ink-strong) !important;
    font-size: clamp(1.22rem, 2.4vw, 1.55rem);
    line-height: 1.62;
  }

  .intro-links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem 1rem;
    margin-top: 1.7rem;
  }

  .home-section {
    border-top: 1px solid var(--line);
    padding-block: clamp(2.3rem, 7vw, 4rem);
  }

  .home-section h2 {
    margin: 0 0 1.35rem;
    color: var(--ink-strong);
    font-family: var(--font-serif);
    font-size: clamp(1.65rem, 4vw, 2.35rem);
    font-weight: 500;
    line-height: 1.18;
  }

  .section-title-row {
    display: flex;
    gap: 1rem;
    align-items: baseline;
    justify-content: space-between;
  }

  .snapshot-list,
  .track-list,
  .start-list {
    display: grid;
    gap: 1.35rem;
  }

  .snapshot-row,
  .track-list article,
  .start-list p {
    padding-top: 1.1rem;
    border-top: 1px solid var(--line);
  }

  .snapshot-row:first-child,
  .track-list article:first-child,
  .start-list p:first-child {
    padding-top: 0;
    border-top: 0;
  }

  .snapshot-row {
    display: grid;
    grid-template-columns: 8.5rem minmax(0, 1fr);
    gap: 1.5rem;
  }

  h3 {
    margin: 0;
    color: var(--ink-strong);
    font-size: 1.08rem;
    line-height: 1.35;
  }

  p {
    margin: 0.45rem 0 0;
    color: var(--muted);
    line-height: 1.72;
  }

  .start-list p {
    margin: 0;
  }

  time,
  .snapshot-row span {
    color: var(--muted);
    font-family: var(--font-mono);
    font-size: 0.78rem;
  }

  @media (max-width: 700px) {
    .snapshot-row,
    .section-title-row {
      grid-template-columns: 1fr;
    }

    .snapshot-row {
      gap: 0.4rem;
    }

    .section-title-row {
      display: grid;
      gap: 0.2rem;
    }
  }
</style>
