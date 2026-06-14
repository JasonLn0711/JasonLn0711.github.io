<script lang="ts">
  import PageMeta from "$lib/components/PageMeta.svelte";
  import { site, teachingAccelerators, teachingHighlights } from "$lib/content/site";
</script>

<PageMeta
  title={`Teaching | ${site.name}`}
  description="Public teaching surfaces and accelerator handouts for AI systems engineering, AI Gateway architecture, agent governance, cybersecurity, and enterprise delivery."
  path="/teaching/"
/>

<section class="index-page">
  <div class="content-shell">
    <header class="index-head">
      <p class="kicker">Teaching</p>
      <h1>AI systems engineering, taught as evidence work.</h1>
      <p>
        This page collects public-safe learning surfaces from the AI Systems
        Engineering Handbook and related talks. The goal is to help students and
        builders move from model demos to architecture, governance, security,
        validation, and delivery evidence.
      </p>
    </header>

    <section class="plain-section" aria-labelledby="accelerators-heading">
      <div class="section-title-row">
        <h2 id="accelerators-heading">Accelerators</h2>
        <a href={site.github} rel="noreferrer" target="_blank">GitHub</a>
      </div>

      <div class="accelerator-list">
        {#each teachingAccelerators as accelerator}
          <article class="accelerator-row">
            <div class="accelerator-meta">
              <span>{accelerator.date}</span>
              <span>{accelerator.audience}</span>
            </div>
            <div>
              <h3><a href={`/teaching/${accelerator.slug}/`}>{accelerator.title}</a></h3>
              <p>{accelerator.summary}</p>
              <p class="thesis">{accelerator.thesis}</p>

              <div class="day-list" aria-label={`${accelerator.title} course days`}>
                {#each accelerator.days as day}
                  {#if day.published}
                    <a class="day-row" href={day.href}>
                      <span>{day.day}</span>
                      <strong>{day.title}</strong>
                      <em>{day.status}</em>
                    </a>
                  {:else}
                    <div class="day-row upcoming">
                      <span>{day.day}</span>
                      <strong>{day.title}</strong>
                      <em>{day.status}</em>
                    </div>
                  {/if}
                {/each}
              </div>
            </div>
          </article>
        {/each}
      </div>
    </section>

    <section class="plain-section" aria-labelledby="surfaces-heading">
      <h2 id="surfaces-heading">Teaching surfaces</h2>
      <div class="surface-list">
        {#each teachingHighlights as item}
          <article>
            <div class="meta-line">
              <span>{item.date}</span>
              <span>{item.audience}</span>
            </div>
            <h3><a href={item.href}>{item.title}</a></h3>
            <p>{item.summary}</p>
            <span>{item.status}</span>
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

  .section-title-row {
    display: flex;
    gap: 1rem;
    align-items: baseline;
    justify-content: space-between;
  }

  h2 {
    margin: 0 0 1.35rem;
    color: var(--ink-strong);
    font-family: var(--font-serif);
    font-size: clamp(1.6rem, 4vw, 2.2rem);
    font-weight: 500;
    line-height: 1.18;
  }

  h3 {
    margin: 0;
    color: var(--ink-strong);
    font-size: clamp(1.18rem, 2.6vw, 1.55rem);
    line-height: 1.32;
  }

  p {
    margin: 0.5rem 0 0;
  }

  .accelerator-list,
  .surface-list {
    display: grid;
    gap: 1.45rem;
  }

  .accelerator-row {
    display: grid;
    grid-template-columns: 9rem minmax(0, 1fr);
    gap: 1.5rem;
    border-top: 1px solid var(--line);
    padding-top: 1.35rem;
  }

  .accelerator-row:first-child,
  .surface-list article:first-child {
    border-top: 0;
    padding-top: 0;
  }

  .accelerator-meta {
    display: grid;
    gap: 0.35rem;
    align-content: start;
    color: var(--muted);
    font-family: var(--font-mono);
    font-size: 0.78rem;
  }

  .thesis {
    color: var(--ink);
  }

  .day-list {
    display: grid;
    gap: 0.45rem;
    margin-top: 1.1rem;
  }

  .day-row {
    display: grid;
    grid-template-columns: 4.2rem minmax(0, 1fr) auto;
    gap: 0.7rem;
    align-items: baseline;
    border-top: 1px solid var(--line);
    padding-top: 0.72rem;
    color: var(--ink);
    text-decoration: none;
  }

  .day-row:hover strong {
    color: var(--accent);
  }

  .day-row span,
  .day-row em,
  .surface-list span {
    color: var(--muted);
    font-family: var(--font-mono);
    font-size: 0.76rem;
    font-style: normal;
  }

  .day-row strong {
    color: var(--ink-strong);
    font-size: 0.98rem;
    line-height: 1.35;
  }

  .upcoming {
    color: var(--muted);
  }

  .surface-list article {
    border-top: 1px solid var(--line);
    padding-top: 1.1rem;
  }

  .surface-list h3 {
    margin-top: 0.45rem;
    font-size: clamp(1.08rem, 2.4vw, 1.35rem);
  }

  .surface-list span {
    display: block;
    margin-top: 0.55rem;
  }

  @media (max-width: 760px) {
    .accelerator-row,
    .day-row {
      grid-template-columns: 1fr;
      gap: 0.35rem;
    }

    .section-title-row {
      display: grid;
      gap: 0.15rem;
    }
  }
</style>
