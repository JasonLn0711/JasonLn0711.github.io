<script lang="ts">
  import PageMeta from "$lib/components/PageMeta.svelte";
  import { site, talkHighlights, teachingHighlights } from "$lib/content/site";
</script>

<PageMeta
  title={`Talks and Teaching | ${site.name}`}
  description="Talks and teaching surfaces for AI systems engineering, medical cybersecurity, voice AI, agent governance, and evidence-aware deployment."
  path="/talks/"
/>

<section class="index-page">
  <div class="content-shell">
    <header class="index-head">
      <p class="kicker">Talks / Teaching</p>
      <h1>Public explanations for serious AI systems.</h1>
      <p>
        I use talks and teaching packages to translate research into systems
        practice: cybersecurity controls, AI Gateway design, agent governance,
        model serving, voice AI, and evidence-aware deployment.
      </p>
    </header>

    <section class="plain-section" aria-labelledby="teaching-heading">
      <h2 id="teaching-heading">Current teaching surfaces</h2>
      <div class="teaching-list">
        {#each teachingHighlights as item}
          <article>
            <div class="meta-line">
              <span>{item.date}</span>
              <span>{item.audience}</span>
            </div>
            <h3><a href={item.href}>{item.title}</a></h3>
            <p>{item.summary}</p>
            <span class="status">{item.status}</span>
          </article>
        {/each}
      </div>
    </section>

    <section class="plain-section" aria-labelledby="talks-heading">
      <h2 id="talks-heading">Talks and public framing</h2>
      <div class="talk-list">
        {#each talkHighlights as talk}
          <article class="talk-row">
            <time>{talk.schedule}</time>
            <div>
              <p class="kicker">{talk.event}</p>
              <h3><a href={talk.href}>{talk.title}</a></h3>
              <p>{talk.summary}</p>
              <span>{talk.format} · {talk.venue}</span>
            </div>
          </article>
        {/each}
      </div>
    </section>
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

  .plain-section {
    border-top: 1px solid var(--line);
    padding-block: clamp(2.1rem, 6vw, 3.4rem);
  }

  h2 {
    margin: 0 0 1.35rem;
    color: var(--ink-strong);
    font-family: var(--font-serif);
    font-size: clamp(1.6rem, 4vw, 2.2rem);
    font-weight: 500;
    line-height: 1.18;
  }

  .teaching-list,
  .talk-list {
    display: grid;
    gap: 1.35rem;
  }

  .teaching-list article,
  .talk-row {
    border-top: 1px solid var(--line);
    padding-top: 1.1rem;
  }

  .teaching-list article:first-child,
  .talk-row:first-child {
    border-top: 0;
    padding-top: 0;
  }

  .talk-row {
    display: grid;
    grid-template-columns: 8.5rem minmax(0, 1fr);
    gap: 1.5rem;
  }

  h3 {
    margin: 0.4rem 0 0;
    color: var(--ink-strong);
    font-size: clamp(1.1rem, 2.4vw, 1.35rem);
    line-height: 1.35;
  }

  p {
    margin: 0.45rem 0 0;
  }

  time,
  .talk-row span,
  .status {
    color: var(--muted);
    font-family: var(--font-mono);
    font-size: 0.78rem;
  }

  .status {
    display: block;
    margin-top: 0.55rem;
  }

  @media (max-width: 700px) {
    .talk-row {
      grid-template-columns: 1fr;
      gap: 0.4rem;
    }
  }
</style>
