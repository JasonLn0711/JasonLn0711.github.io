<script lang="ts">
  import PageMeta from "$lib/components/PageMeta.svelte";
  import { researchPillars, site } from "$lib/content/site";
</script>

<PageMeta
  title={`Research Atlas | ${site.name}`}
  description="Three evidence-aware research territories for trustworthy AI, speech workflows, and high-stakes deployment."
  path="/research/"
/>

<section class="section research-page">
  <div class="page-shell research-layout">
    <aside class="research-rail" data-reveal>
      <p class="kicker">Research Atlas</p>
      <h1 class="headline">Evidence-aware directions for real-world AI systems.</h1>
      <p class="subhead">
        Every territory is organized around problem class, public evidence,
        validation path, and scope boundary.
      </p>
      <div class="read-guide panel-soft">
        <strong>How to read this atlas</strong>
        <span>Evidence ledgers -> validation paths -> outputs.</span>
      </div>
    </aside>
    <div class="territory-list">
      {#each researchPillars as pillar, index}
        <a class="territory panel" href={`/research/${pillar.slug}/`} data-reveal>
          <div class="territory-head">
            <span class="mono">0{index + 1}</span>
            <span class="maturity">{pillar.maturity}</span>
          </div>
          <h2>{pillar.title}</h2>
          <p>{pillar.thesis}</p>
          <div class="evidence-ledger">
            {#each pillar.evidence as item}
              <span>{item}</span>
            {/each}
          </div>
          <div class="validation">
            {#each pillar.validation as step}
              <small>{step}</small>
            {/each}
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>

<style>
  .research-page {
    padding-top: 10.5rem;
  }

  .research-layout {
    display: grid;
    grid-template-columns: minmax(280px, 0.42fr) minmax(0, 1fr);
    gap: clamp(1.5rem, 4vw, 4rem);
  }

  .research-rail {
    position: sticky;
    top: 7.5rem;
    align-self: start;
  }

  .read-guide {
    display: grid;
    gap: 0.35rem;
    margin-top: 2rem;
    padding: 1rem;
    color: var(--muted);
  }

  .read-guide strong {
    color: var(--ink);
  }

  .territory-list {
    display: grid;
    gap: 1rem;
  }

  .territory {
    display: grid;
    gap: 1.2rem;
    padding: clamp(1.2rem, 3vw, 2rem);
  }

  .territory-head,
  .validation {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    align-items: center;
    justify-content: space-between;
  }

  h2 {
    margin: 0;
    font-size: clamp(2rem, 4vw, 4rem);
    line-height: 0.96;
  }

  p {
    max-width: 78ch;
    color: var(--muted);
    line-height: 1.7;
  }

  .evidence-ledger {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.7rem;
  }

  .evidence-ledger span,
  .validation small {
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 0.8rem;
    padding: 0.75rem;
    background: rgba(255, 255, 255, 0.035);
    color: var(--muted);
  }

  .validation {
    justify-content: flex-start;
  }

  .validation small {
    color: var(--accent);
  }

  @media (max-width: 1000px) {
    .research-page {
      padding-top: 8rem;
    }

    .research-layout,
    .evidence-ledger {
      grid-template-columns: 1fr;
    }

    .research-rail {
      position: static;
    }
  }
</style>
