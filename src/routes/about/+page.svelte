<script lang="ts">
  import PageMeta from "$lib/components/PageMeta.svelte";
  import { site, workingPrinciples } from "$lib/content/site";
</script>

<PageMeta
  title={`About | ${site.name}`}
  description="A concise profile of Jason Chia-Sheng Lin's evidence-aware AI research, systems work, and collaboration style."
  path="/about/"
/>

<section class="about-page">
  <div class="content-shell">
    <header class="about-head">
      <p class="kicker">About</p>
      <h1>I build evidence-aware AI systems for high-stakes work.</h1>
      <p class="lead">
        I am a doctoral researcher at National Yang Ming Chiao Tung University,
        working across trustworthy AI, speech intelligence, clinical workflow
        support, cybersecurity, agent governance, and AI systems engineering.
      </p>
      <p>
        My work is shaped by research training and earlier cybercrime
        investigation experience. I care about systems where claims stay
        grounded, boundaries are visible, and humans can review what the AI did
        before it becomes an operational decision.
      </p>
    </header>

    <section class="plain-section">
      <h2>Working model</h2>
      <div class="principle-list">
        {#each workingPrinciples as item}
          <article>
            <h3>{item.title}</h3>
            <p class="subtitle">{item.subtitle}</p>
            <p>{item.body}</p>
          </article>
        {/each}
      </div>
    </section>

    <section class="plain-section">
      <h2>Where the work points</h2>
      <p>
        The common thread is practical trust: speech systems that preserve
        decision evidence, clinical demos that stay synthetic and staff-review
        oriented, governance work that preserves reconstructability, and
        teaching materials that help teams deploy AI with infrastructure,
        security, evaluation, and delivery discipline.
      </p>
    </section>
  </div>
</section>

<style>
  .about-page {
    padding-block: clamp(3.5rem, 9vw, 6rem);
  }

  .about-head {
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

  .about-head p:not(.kicker):not(.lead),
  .plain-section p {
    color: var(--muted);
    line-height: 1.74;
  }

  .about-head p:not(.kicker):not(.lead) {
    margin: 1rem 0 0;
  }

  .plain-section {
    border-top: 1px solid var(--line);
    padding-block: clamp(2rem, 6vw, 3.2rem);
  }

  h2 {
    margin: 0 0 1.35rem;
    color: var(--ink-strong);
    font-family: var(--font-serif);
    font-size: clamp(1.6rem, 4vw, 2.2rem);
    font-weight: 500;
    line-height: 1.18;
  }

  .principle-list {
    display: grid;
    gap: 1.35rem;
  }

  .principle-list article {
    border-top: 1px solid var(--line);
    padding-top: 1.1rem;
  }

  .principle-list article:first-child {
    border-top: 0;
    padding-top: 0;
  }

  h3 {
    margin: 0;
    color: var(--ink-strong);
    font-size: 1.08rem;
    line-height: 1.35;
  }

  .subtitle {
    margin: 0.35rem 0 0;
    color: var(--accent) !important;
  }

  .principle-list p:last-child {
    margin: 0.45rem 0 0;
  }
</style>
