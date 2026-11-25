<script lang="ts">
  import PageMeta from "#lib/components/PageMeta.svelte";
  import { site, talkHighlights, teachingHighlights } from "#lib/content/site.ts";
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
    <p class="notes-rail"><a href="/event-notes/">Talks &amp; Workshops · 演講與工作坊筆記 →</a></p>

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
    padding-block: var(--page-pad-block);
  }

  .index-head {
    margin-bottom: clamp(1.5rem, 4vw, 2.25rem);
  }

  .notes-rail {
    margin: 0 0 1.5rem;
  }

  .notes-rail a {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    font-weight: var(--heading-weight);
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

  .plain-section {
    border-top: 1px solid var(--line);
    padding-block: clamp(1.8rem, 4.5vw, 2.8rem);
  }

  h2 {
    margin: 0 0 1.25rem;
    color: var(--ink-strong);
    font-size: var(--section-title-size);
    font-weight: var(--heading-weight);
    line-height: 1.2;
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
    font-size: clamp(1.12rem, 1.04rem + 0.45vw, 1.35rem);
    line-height: 1.35;
  }

  h3 a {
    color: var(--ink-strong);
    text-decoration-color: var(--control-line);
    text-underline-offset: 0.19em;
  }

  h3 a:hover {
    color: var(--accent);
    text-decoration-color: currentColor;
  }

  p {
    margin: 0.45rem 0 0;
  }

  time,
  .talk-row span,
  .status {
    color: var(--muted);
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
