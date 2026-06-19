<script lang="ts">
  import ArticleToc from "$lib/components/ArticleToc.svelte";
  import PageMeta from "$lib/components/PageMeta.svelte";
  import { getTeachingDayComponent } from "$lib/content/teaching";
  import { site, teachingAccelerators } from "$lib/content/site";

  let { data } = $props<{
    data: {
      accelerator: (typeof teachingAccelerators)[number];
      day: (typeof teachingAccelerators)[number]["days"][number];
    };
  }>();

  let accelerator = $derived(data.accelerator);
  let day = $derived(data.day);
  let Content = $derived(getTeachingDayComponent(day.slug));
</script>

<PageMeta
  title={`${day.title} | ${site.name}`}
  description={day.description}
  path={day.href}
  type="article"
/>

<section class="handout-page">
  <div class="page-shell handout-layout">
    <ArticleToc contentId="article-content" />

    <article class="handout-content">
      <nav class="back-nav" aria-label="Back navigation">
        <a href={`/teaching/${accelerator.slug}/`}>{accelerator.title}</a>
      </nav>

      <header class="article-head">
        <p class="kicker">{day.day} · Student handout</p>
        <h1>{day.title}</h1>
        <p class="lead">{day.description}</p>
        <div class="meta-line">
          <span>{accelerator.date}</span>
          <span>{day.status}</span>
          <span>Full local lesson</span>
        </div>
      </header>

      <div id="article-content" class="longform">
        {#if Content}
          <Content />
        {/if}
      </div>
    </article>
  </div>
</section>

<style>
  .handout-page {
    padding-block: clamp(3rem, 8vw, 5.5rem);
  }

  .handout-layout {
    display: grid;
    grid-template-columns: var(--toc-width) minmax(0, var(--article-width));
    gap: clamp(2rem, 5vw, 4rem);
    align-items: start;
    justify-content: center;
  }

  .handout-content {
    max-width: var(--article-width);
  }

  .back-nav {
    margin-bottom: 1.5rem;
    font-family: var(--font-mono);
    font-size: 0.78rem;
  }

  .article-head {
    margin-bottom: clamp(2.2rem, 6vw, 3.5rem);
  }

  h1 {
    margin: 1rem 0 1rem;
    color: var(--ink-strong);
    font-family: var(--font-serif);
    font-size: clamp(2.5rem, 8vw, 4.6rem);
    font-weight: 500;
    line-height: 1.06;
    text-wrap: balance;
  }

  .lead {
    margin: 0 0 1rem;
    color: var(--ink-strong);
    font-size: clamp(1.12rem, 2.1vw, 1.34rem);
    line-height: 1.72;
  }

  @media (max-width: 1040px) {
    .handout-layout {
      display: block;
      width: min(100% - 2rem, var(--article-width));
    }
  }

  @media (max-width: 620px) {
    .handout-layout {
      width: min(100% - 1.35rem, var(--article-width));
    }

    h1 {
      font-size: clamp(2.3rem, 13vw, 3.3rem);
    }
  }
</style>
