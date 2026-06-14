<script lang="ts">
  import PageMeta from "$lib/components/PageMeta.svelte";
  import { researchPillars, site } from "$lib/content/site";
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
        My research asks how AI systems preserve evidence, human review,
        reconstructability, and public-safe scope when they move from fluent
        outputs into decisions, workflows, and action.
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
            <p class="thesis">{pillar.thesis}</p>
            <div class="evidence-list">
              {#each pillar.evidence.slice(0, 2) as item}
                <span>{item}</span>
              {/each}
            </div>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  .index-page {
    padding-block: clamp(3.5rem, 9vw, 6rem);
  }

  .index-head {
    margin-bottom: clamp(2.4rem, 7vw, 4rem);
  }

  h1 {
    margin: 1rem 0 0.85rem;
    color: var(--ink-strong);
    font-family: var(--font-serif);
    font-size: clamp(2.6rem, 8vw, 4.8rem);
    font-weight: 500;
    line-height: 1.06;
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
    font-family: var(--font-mono);
    font-size: 0.78rem;
  }

  h2 {
    margin: 0;
    color: var(--ink-strong);
    font-size: clamp(1.25rem, 3vw, 1.65rem);
    line-height: 1.3;
  }

  p {
    margin: 0.5rem 0 0;
  }

  .thesis {
    color: var(--ink);
  }

  .evidence-list {
    display: grid;
    gap: 0.55rem;
    margin-top: 1rem;
  }

  .evidence-list span {
    border-left: 2px solid var(--line-strong);
    padding-left: 0.8rem;
    color: var(--muted);
    line-height: 1.62;
  }

  @media (max-width: 760px) {
    .program-row {
      grid-template-columns: 1fr;
      gap: 0.7rem;
    }
  }
</style>
