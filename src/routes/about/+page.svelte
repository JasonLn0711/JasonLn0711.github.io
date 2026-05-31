<script lang="ts">
  import PageMeta from "$lib/components/PageMeta.svelte";
  import { site, workingPrinciples } from "$lib/content/site";
</script>

<PageMeta
  title={`About | ${site.name}`}
  description="A calm, evidence-led working model for trustworthy AI, speech intelligence, cybersecurity, and regulated systems."
  path="/about/"
/>

<section class="section about-page">
  <div class="page-shell about-grid">
    <div class="portrait" data-reveal>
      <img src={site.avatar} alt={site.name} />
      <div class="panel caption">
        <strong>Researcher · Builder · Steward</strong>
        <span>Calm human core. Evidence in hand. Systems in service.</span>
      </div>
    </div>
    <div class="about-copy" data-reveal>
      <p class="kicker">About / Working With Me</p>
      <h1 class="headline">A calm, evidence-led approach to serious AI systems.</h1>
      <p class="subhead">
        I work at the intersection of AI agents, speech intelligence, and
        cybersecurity, where uncertainty is high and the margin for error is
        low. I care about helping people clarify hard problems without making
        the conversation feel heavy.
      </p>
      <p class="subhead">
        My working model blends investigation-informed thinking, human judgment,
        rigorous evidence, clear boundaries, and practical system design.
      </p>
    </div>
    <div class="principles">
      {#each workingPrinciples as item, index}
        <article class="panel principle" data-reveal>
          <span class="maturity">0{index + 1}</span>
          <h2>{item.title}</h2>
          <p class="accent">{item.subtitle}</p>
          <p>{item.body}</p>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  .about-page {
    padding-top: 10.5rem;
  }

  .about-grid {
    display: grid;
    grid-template-columns: 0.58fr 0.62fr 1fr;
    gap: 1rem;
    align-items: start;
  }

  .portrait {
    position: relative;
  }

  img {
    width: 100%;
    min-height: 620px;
    object-fit: cover;
    border-radius: var(--radius-lg);
  }

  .caption {
    position: absolute;
    right: 1rem;
    bottom: 1rem;
    left: 1rem;
    display: grid;
    gap: 0.35rem;
    padding: 1rem;
  }

  .caption span,
  .principle p {
    color: var(--muted);
    line-height: 1.65;
  }

  .about-copy {
    display: grid;
    gap: 1rem;
  }

  .principles {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }

  .principle {
    padding: 1.2rem;
  }

  .principle h2 {
    margin: 0.8rem 0 0;
    font-size: clamp(1.35rem, 2.5vw, 2.2rem);
    line-height: 1.02;
  }

  .accent {
    color: var(--accent) !important;
  }

  @media (max-width: 1120px) {
    .about-page {
      padding-top: 8rem;
    }

    .about-grid,
    .principles {
      grid-template-columns: 1fr;
    }

    img {
      min-height: auto;
      aspect-ratio: 4 / 5;
    }
  }
</style>
