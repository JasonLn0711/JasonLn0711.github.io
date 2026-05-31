<script lang="ts">
  import PageMeta from "$lib/components/PageMeta.svelte";
  import { site, writings } from "$lib/content/site";

  let { data } = $props<{ data: { writing: (typeof writings)[number] } }>();
  let writing = $derived(data.writing);
</script>

<PageMeta
  title={`${writing.title} | ${site.name}`}
  description={writing.summary}
  path={`/writing/${writing.slug}/`}
/>

<article class="section article-page">
  <div class="page-shell article-grid">
    <header class="article-head panel" data-reveal>
      <p class="kicker">{writing.category}</p>
      <h1>{writing.title}</h1>
      <p>{writing.summary}</p>
      <div class="meta-line">
        <span class="status-dot"></span>
        <span>{writing.date}</span>
        <span>{writing.readTime}</span>
      </div>
    </header>
    <div class="article-body">
      {#each writing.body as paragraph}
        <p data-reveal>{paragraph}</p>
      {/each}
      <a class="button" href="/writing/">Back to archive <span class="button-mark">→</span></a>
    </div>
  </div>
</article>

<style>
  .article-page {
    padding-top: 10.5rem;
  }

  .article-grid {
    display: grid;
    grid-template-columns: minmax(280px, 0.48fr) minmax(0, 0.9fr);
    gap: clamp(1.5rem, 4vw, 4rem);
    align-items: start;
  }

  .article-head {
    position: sticky;
    top: 7.5rem;
    display: grid;
    gap: 1rem;
    padding: clamp(1.25rem, 3vw, 2rem);
  }

  h1 {
    margin: 0;
    font-size: clamp(2.1rem, 5vw, 5.4rem);
    line-height: 0.94;
  }

  .article-head p,
  .article-body p {
    color: var(--muted);
    line-height: 1.8;
  }

  .article-body {
    display: grid;
    gap: 1.25rem;
    font-size: 1.08rem;
  }

  @media (max-width: 900px) {
    .article-page {
      padding-top: 8rem;
    }

    .article-grid {
      grid-template-columns: 1fr;
    }

    .article-head {
      position: static;
    }
  }
</style>
