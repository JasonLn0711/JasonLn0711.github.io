<script lang="ts">
  import PageMeta from "$lib/components/PageMeta.svelte";
  import { researchPillars, site } from "$lib/content/site";

  let { data } = $props<{ data: { pillar: (typeof researchPillars)[number] } }>();
  let pillar = $derived(data.pillar);
</script>

<PageMeta
  title={`${pillar.title} | ${site.name}`}
  description={pillar.summary}
  path={`/research/${pillar.slug}/`}
/>

<section class="detail-page">
  <div class="content-shell">
    <nav class="back-nav" aria-label="Back navigation">
      <a href="/research/">Research</a>
    </nav>
    <article>
      <header class="detail-head">
        <p class="kicker">{pillar.maturity}</p>
        <h1>{pillar.title}</h1>
        <p class="lead">{pillar.summary}</p>
      </header>

      <section class="plain-section">
        <h2>Thesis</h2>
        <p>{pillar.thesis}</p>
      </section>

      <section class="plain-section">
        <h2>Why it matters now</h2>
        <p>{pillar.why}</p>
      </section>

      <section class="plain-section">
        <h2>Evidence surface</h2>
        <ul>
          {#each pillar.evidence as item}
            <li>{item}</li>
          {/each}
        </ul>
      </section>

      <section class="plain-section">
        <h2>Validation path</h2>
        <ol>
          {#each pillar.validation as step}
            <li>{step}</li>
          {/each}
        </ol>
      </section>

      <section class="plain-section">
        <h2>Current outputs</h2>
        <p>{pillar.outputs}</p>
      </section>

      <section class="plain-section">
        <h2>Scope control</h2>
        <p>{pillar.boundary}</p>
      </section>

      <section class="plain-section">
        <h2>Questions</h2>
        <ul>
          {#each pillar.questions as question}
            <li>{question}</li>
          {/each}
        </ul>
      </section>
    </article>
  </div>
</section>

<style>
  .detail-page {
    padding-block: clamp(3.5rem, 9vw, 6rem);
  }

  .back-nav {
    margin-bottom: 1.5rem;
    font-family: var(--font-mono);
    font-size: 0.78rem;
  }

  .detail-head {
    margin-bottom: clamp(2.2rem, 6vw, 3.5rem);
  }

  h1 {
    margin: 1rem 0 1rem;
    color: var(--ink-strong);
    font-family: var(--font-serif);
    font-size: clamp(2.6rem, 8vw, 4.8rem);
    font-weight: 500;
    line-height: 1.06;
    text-wrap: balance;
  }

  .lead {
    margin: 0;
    color: var(--ink-strong);
    font-size: clamp(1.12rem, 2.1vw, 1.34rem);
    line-height: 1.72;
  }

  .plain-section {
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
  li {
    color: var(--muted);
    line-height: 1.74;
  }

  p {
    margin: 0;
  }

  ul,
  ol {
    display: grid;
    gap: 0.65rem;
    margin: 0;
    padding-left: 1.25rem;
  }
</style>
