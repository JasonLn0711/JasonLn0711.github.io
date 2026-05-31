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

<section class="section detail">
  <div class="page-shell detail-grid">
    <aside class="detail-rail panel" data-reveal>
      <span class="kicker">Research Territory</span>
      <h1>{pillar.title}</h1>
      <p>{pillar.summary}</p>
      <a class="button primary" href="/contact/">Discuss fit <span class="button-mark">→</span></a>
    </aside>
    <article class="detail-body">
      <section class="panel block" data-reveal>
        <p class="kicker">Thesis</p>
        <h2>{pillar.thesis}</h2>
      </section>
      <section class="panel block" data-reveal>
        <p class="kicker">Why it matters now</p>
        <p>{pillar.why}</p>
      </section>
      <section class="panel block" data-reveal>
        <p class="kicker">Evidence Ledger</p>
        <div class="rows">
          {#each pillar.evidence as item}
            <span>{item}</span>
          {/each}
        </div>
      </section>
      <section class="panel block" data-reveal>
        <p class="kicker">Validation Path</p>
        <div class="steps">
          {#each pillar.validation as step}
            <span>{step}</span>
          {/each}
        </div>
      </section>
      <section class="panel block" data-reveal>
        <p class="kicker">Questions</p>
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
  .detail {
    padding-top: 10.5rem;
  }

  .detail-grid {
    display: grid;
    grid-template-columns: minmax(280px, 0.42fr) minmax(0, 1fr);
    gap: 1rem;
    align-items: start;
  }

  .detail-rail {
    position: sticky;
    top: 7.5rem;
    display: grid;
    gap: 1.2rem;
    padding: clamp(1.25rem, 3vw, 2rem);
  }

  h1 {
    margin: 0;
    font-size: clamp(2.2rem, 4.8vw, 5.2rem);
    line-height: 0.94;
  }

  h2 {
    margin: 0;
    font-size: clamp(1.7rem, 3vw, 3.4rem);
    line-height: 1.04;
  }

  p,
  li {
    color: var(--muted);
    line-height: 1.7;
  }

  .detail-body {
    display: grid;
    gap: 1rem;
  }

  .block {
    padding: clamp(1.25rem, 3vw, 2rem);
  }

  .rows,
  .steps {
    display: grid;
    gap: 0.7rem;
  }

  .rows span,
  .steps span {
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 0.75rem;
    padding: 0.85rem;
    color: var(--muted);
    background: rgba(255, 255, 255, 0.035);
  }

  .steps {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  ul {
    margin: 0;
    padding-left: 1.2rem;
  }

  @media (max-width: 960px) {
    .detail {
      padding-top: 8rem;
    }

    .detail-grid,
    .steps {
      grid-template-columns: 1fr;
    }

    .detail-rail {
      position: static;
    }
  }
</style>
