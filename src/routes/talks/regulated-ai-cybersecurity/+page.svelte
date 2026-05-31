<script lang="ts">
  import PageMeta from "$lib/components/PageMeta.svelte";
  import { site, talkHighlights } from "$lib/content/site";

  const talk = talkHighlights[0];
  const chapters = [
    "Regulatory pressure makes cybersecurity design a product requirement.",
    "Threat modeling turns a vague AI SaMD risk into a reviewable system map.",
    "Patch SLA, SBOM, and Zero Trust create the operational evidence trail.",
    "The useful governance question is how teams keep the system inspectable after launch."
  ];
</script>

<PageMeta
  title={`Regulated AI Cybersecurity Talk | ${site.name}`}
  description={talk.summary}
  path="/talks/regulated-ai-cybersecurity/"
/>

<section class="section story-page">
  <div class="page-shell story-grid">
    <aside class="story-hero panel" data-reveal>
      <p class="kicker">CYBERSEC 2026</p>
      <h1>{talk.title}</h1>
      <p>{talk.summary}</p>
      <div class="meta-line">
        <span class="status-dot"></span>
        <span>{talk.schedule}</span>
      </div>
      <span class="muted">{talk.venue}</span>
    </aside>
    <article class="chapter-list">
      {#each chapters as chapter, index}
        <section class="chapter panel" data-reveal>
          <span class="maturity">0{index + 1}</span>
          <h2>{chapter}</h2>
          <p>
            This chapter connects regulatory expectation, engineering practice,
            and human review so the audience can see what must be designed,
            validated, and maintained.
          </p>
        </section>
      {/each}
    </article>
  </div>
</section>

<style>
  .story-page {
    padding-top: 10.5rem;
  }

  .story-grid {
    display: grid;
    grid-template-columns: minmax(280px, 0.48fr) minmax(0, 1fr);
    gap: 1rem;
    align-items: start;
  }

  .story-hero {
    position: sticky;
    top: 7.5rem;
    display: grid;
    gap: 1rem;
    padding: clamp(1.3rem, 3vw, 2rem);
  }

  h1 {
    margin: 0;
    font-size: clamp(2rem, 4.5vw, 4.8rem);
    line-height: 0.95;
  }

  .story-hero p,
  .chapter p {
    color: var(--muted);
    line-height: 1.7;
  }

  .chapter-list {
    display: grid;
    gap: 1rem;
  }

  .chapter {
    padding: clamp(1.3rem, 3vw, 2rem);
  }

  .chapter h2 {
    margin: 0.8rem 0 0;
    font-size: clamp(1.8rem, 3vw, 3.5rem);
    line-height: 1;
  }

  @media (max-width: 960px) {
    .story-page {
      padding-top: 8rem;
    }

    .story-grid {
      grid-template-columns: 1fr;
    }

    .story-hero {
      position: static;
    }
  }
</style>
