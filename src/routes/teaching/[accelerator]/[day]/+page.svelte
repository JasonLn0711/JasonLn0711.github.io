<script lang="ts">
  import ArticleToc from "$lib/components/ArticleToc.svelte";
  import PageMeta from "$lib/components/PageMeta.svelte";
  import { site, teachingAccelerators } from "$lib/content/site";

  let { data } = $props<{
    data: {
      accelerator: (typeof teachingAccelerators)[number];
      day: (typeof teachingAccelerators)[number]["days"][number];
    };
  }>();

  let accelerator = $derived(data.accelerator);
  let day = $derived(data.day);
</script>

<PageMeta
  title={`${day.title} | ${site.name}`}
  description={day.description}
  path={day.href}
  type="article"
/>

<section class="handout-page">
  <div class="page-shell handout-layout">
    <ArticleToc contentId="handout-content" />

    <article id="handout-content" class="handout-content">
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
          <span>{accelerator.sourceRepo}</span>
        </div>
      </header>

      <section id="overview">
        <h2>Overview</h2>
        <p class="claim">{day.firstConclusion}</p>
        <p>{accelerator.thesis}</p>
      </section>

      <section id="learning-outcomes">
        <h2>Learning outcomes</h2>
        <ul>
          {#each day.outcomes as item}
            <li>{item}</li>
          {/each}
        </ul>
      </section>

      {#each day.sections as section}
        <section id={section.id}>
          <h2>{section.title}</h2>
          {#each section.body as paragraph}
            <p>{paragraph}</p>
          {/each}
          {#if section.bullets.length}
            <ul>
              {#each section.bullets as item}
                <li>{item}</li>
              {/each}
            </ul>
          {/if}
        </section>
      {/each}

      <section id="request-lifecycle">
        <h2>Request lifecycle template</h2>
        <ol>
          {#each day.requestLifecycle as item}
            <li>{item}</li>
          {/each}
        </ol>
      </section>

      <section id="core-vocabulary">
        <h2>Core vocabulary</h2>
        <dl>
          {#each day.vocabulary as item}
            <div>
              <dt>{item.term}</dt>
              <dd>{item.meaning}</dd>
            </div>
          {/each}
        </dl>
      </section>

      <section id="risk-control-map">
        <h2>Risk-control map</h2>
        <ul>
          {#each day.riskControls as item}
            <li>{item}</li>
          {/each}
        </ul>
      </section>

      <section id="worksheet-prompts">
        <h2>Worksheet prompts</h2>
        <ul>
          {#each day.worksheetPrompts as item}
            <li>{item}</li>
          {/each}
        </ul>
      </section>

      <section id="submission">
        <h2>Day 1 submission</h2>
        <ul>
          {#each day.deliverables as item}
            <li>{item}</li>
          {/each}
        </ul>
      </section>

      <section id="next-gate">
        <h2>Next gate</h2>
        <p>{day.nextGate}</p>
      </section>

      <section id="source-boundary">
        <h2>Source boundary</h2>
        <p>{accelerator.boundary}</p>
        <p class="source-link">
          Canonical source:
          <a href={day.sourceHref} rel="noreferrer" target="_blank">{day.sourcePath}</a>
        </p>
      </section>
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

  section {
    border-top: 1px solid var(--line);
    padding-block: clamp(1.8rem, 5vw, 3rem);
  }

  h2 {
    margin: 0 0 1rem;
    color: var(--ink-strong);
    font-family: var(--font-serif);
    font-size: clamp(1.45rem, 3.4vw, 2rem);
    font-weight: 500;
    line-height: 1.2;
  }

  p,
  li,
  dd {
    color: var(--muted);
    line-height: 1.76;
  }

  p {
    margin: 0;
  }

  p + p,
  p + ul {
    margin-top: 0.9rem;
  }

  .claim {
    color: var(--ink-strong);
    font-size: 1.08rem;
  }

  ul,
  ol {
    display: grid;
    gap: 0.62rem;
    margin: 0;
    padding-left: 1.25rem;
  }

  dl {
    display: grid;
    gap: 0.9rem;
    margin: 0;
  }

  dt {
    color: var(--ink-strong);
    font-weight: 700;
  }

  dd {
    margin: 0.2rem 0 0;
  }

  .source-link {
    margin-top: 0.9rem;
    font-family: var(--font-mono);
    font-size: 0.78rem;
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
