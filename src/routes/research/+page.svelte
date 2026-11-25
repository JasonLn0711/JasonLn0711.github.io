<script lang="ts">
  import PageMeta from "#lib/components/PageMeta.svelte";
  import { researchPillars, site } from "#lib/content/site.ts";
</script>

<PageMeta
  title={`Research | ${site.name}`}
  description="Research programs on speech decision stability, provenance-bounded evidence packets, runtime governance, and security evidence."
  path="/research/"
/>

<section class="index-page">
  <div class="content-shell">
    <header class="index-head">
      <p class="kicker">Research</p>
      <h1>Evidence-aware AI systems for high-stakes work.</h1>
      <p>
        I study how AI systems use evidence, how people review their decisions,
        and how we can reconstruct what happened when an AI system acts.
      </p>
    </header>

    <div class="program-list">
      {#each researchPillars as pillar}
        <article class="program-row">
          <div class="program-meta">
            <span>{pillar.shortTitle}</span>
            <span>{pillar.maturity}</span>
          </div>
          <div>
            <h2><a href={`/research/${pillar.slug}/`}>{pillar.title}</a></h2>
            <p>{pillar.summary}</p>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  .index-page {
    padding-block: var(--page-pad-block);
  }

  .index-head {
    margin-bottom: clamp(2rem, 5vw, 3rem);
  }

  h1 {
    margin: 0.7rem 0 0.85rem;
    color: var(--ink-strong);
    font-size: var(--page-title-size);
    font-weight: var(--heading-weight);
    letter-spacing: -0.025em;
    line-height: 1.12;
    text-wrap: balance;
  }

  .index-head p:last-child,
  p {
    color: var(--muted);
    line-height: 1.72;
  }

  .program-list {
    display: grid;
    gap: 1.7rem;
  }

  .program-row {
    display: grid;
    grid-template-columns: 9.5rem minmax(0, 1fr);
    gap: 1.6rem;
    border-top: 1px solid var(--line);
    padding-top: 1.5rem;
  }

  .program-meta {
    display: grid;
    gap: 0.35rem;
    align-content: start;
    color: var(--muted);
    font-size: 0.8rem;
  }

  .program-meta span:first-child {
    color: var(--ink-strong);
    font-weight: var(--heading-weight);
  }

  h2 {
    margin: 0;
    color: var(--ink-strong);
    font-size: clamp(1.2rem, 1.08rem + 0.65vw, 1.55rem);
    line-height: 1.3;
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
    margin: 0.5rem 0 0;
  }

  @media (max-width: 760px) {
    .program-row {
      grid-template-columns: 1fr;
      gap: 0.55rem;
    }
  }
</style>
