<script lang="ts">
  import PageMeta from "#lib/components/PageMeta.svelte";
  import { researchPillars, site } from "#lib/content/site.ts";

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
      <a href="/research/"><span aria-hidden="true">←</span> Research</a>
    </nav>
    <article>
      <header class="detail-head">
        <p class="kicker">{pillar.maturity}</p>
        <h1>{pillar.title}</h1>
        <p class="lead">{pillar.summary}</p>
        <a class="evidence-link" href="#public-evidence">View public evidence <span aria-hidden="true">↓</span></a>
      </header>

      <section class="plain-section">
        <h2>Research question</h2>
        <p>{pillar.thesis}</p>
      </section>

      <section class="plain-section">
        <h2>Why it matters</h2>
        <p>{pillar.why}</p>
      </section>

      <section class="plain-section">
        <h2 id="public-evidence" tabindex="-1">Evidence</h2>
        <ul>
          {#each pillar.evidence as item}
            <li>{item}</li>
          {/each}
        </ul>
        <p class="evidence-scope">{pillar.boundary}</p>
      </section>

      <section class="plain-section">
        <h2>How the study evaluates it</h2>
        <ol>
          {#each pillar.validation as step}
            <li>{step}</li>
          {/each}
        </ol>
      </section>

      <section class="plain-section">
        <h2>Open questions</h2>
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
    padding-block: var(--page-pad-block);
  }

  .detail-head {
    margin-bottom: clamp(1.8rem, 4.5vw, 2.75rem);
  }

  h1 {
    margin: 0.75rem 0 1rem;
    color: var(--ink-strong);
    font-size: var(--page-title-size);
    font-weight: var(--heading-weight);
    letter-spacing: -0.025em;
    line-height: 1.12;
    text-wrap: balance;
    overflow-wrap: anywhere;
  }

  .lead {
    margin: 0;
    color: var(--ink-strong);
    font-size: clamp(1.06rem, 0.98rem + 0.45vw, 1.24rem);
    line-height: 1.7;
  }

  .plain-section {
    border-top: 1px solid var(--line);
    padding-block: clamp(1.6rem, 4vw, 2.5rem);
  }

  .evidence-link {
    display: inline-flex;
    gap: 0.4rem;
    align-items: center;
    min-height: 44px;
    margin-top: 0.85rem;
    font-weight: var(--heading-weight);
  }

  #public-evidence {
    scroll-margin-top: 5.5rem;
  }

  .evidence-scope {
    margin-top: 1.25rem;
    padding: 0.85rem 1.05rem;
    border-left: 2px solid var(--amber);
    border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
    background: var(--surface-strong);
    color: var(--ink);
    font-size: 0.95rem;
  }

  h2 {
    margin: 0 0 0.9rem;
    color: var(--ink-strong);
    font-size: var(--section-title-size);
    font-weight: var(--heading-weight);
    line-height: 1.22;
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
