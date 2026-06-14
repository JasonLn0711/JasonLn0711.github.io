<script lang="ts">
  import PageMeta from "$lib/components/PageMeta.svelte";
  import { site, teachingAccelerators } from "$lib/content/site";

  let { data } = $props<{ data: { accelerator: (typeof teachingAccelerators)[number] } }>();
  let accelerator = $derived(data.accelerator);
</script>

<PageMeta
  title={`${accelerator.title} | ${site.name}`}
  description={accelerator.summary}
  path={`/teaching/${accelerator.slug}/`}
/>

<section class="detail-page">
  <div class="content-shell">
    <nav class="back-nav" aria-label="Back navigation">
      <a href="/teaching/">Teaching</a>
    </nav>

    <article>
      <header class="detail-head">
        <p class="kicker">Accelerator · {accelerator.date}</p>
        <h1>{accelerator.title}</h1>
        <p class="lead">{accelerator.summary}</p>
      </header>

      <section class="plain-section">
        <h2>First principle</h2>
        <p>{accelerator.thesis}</p>
      </section>

      <section class="plain-section">
        <h2>Course sequence</h2>
        <div class="day-list">
          {#each accelerator.days as day}
            {#if day.published}
              <a class="day-row" href={day.href}>
                <span>{day.day}</span>
                <div>
                  <h3>{day.title}</h3>
                  <p>{day.description}</p>
                </div>
                <em>{day.status}</em>
              </a>
            {:else}
              <div class="day-row upcoming">
                <span>{day.day}</span>
                <div>
                  <h3>{day.title}</h3>
                  <p>{day.description}</p>
                </div>
                <em>{day.status}</em>
              </div>
            {/if}
          {/each}
        </div>
      </section>

      <section class="plain-section">
        <h2>Evidence definition</h2>
        <ul>
          {#each accelerator.evidenceDefinition as item}
            <li>{item}</li>
          {/each}
        </ul>
      </section>

      <section class="plain-section">
        <h2>Expansion mechanism</h2>
        <ol>
          {#each accelerator.expansionModel as item}
            <li>{item}</li>
          {/each}
        </ol>
      </section>

      <section class="plain-section">
        <h2>Source boundary</h2>
        <p>{accelerator.boundary}</p>
        <p class="source-link">
          Canonical source:
          <a href={accelerator.sourceHref} rel="noreferrer" target="_blank">
            {accelerator.sourceRepo}/{accelerator.sourcePath}
          </a>
        </p>
      </section>
    </article>
  </div>
</section>

<style>
  .detail-page {
    padding-block: clamp(3.5rem, 9vw, 6rem);
  }

  .back-nav {
    margin-bottom: 1.5rem;
    font-family: var(--font-mono);
    font-size: 0.78rem;
  }

  .detail-head {
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

  .plain-section {
    border-top: 1px solid var(--line);
    padding-block: clamp(1.8rem, 5vw, 3rem);
  }

  h2 {
    margin: 0 0 1rem;
    color: var(--ink-strong);
    font-family: var(--font-serif);
    font-size: clamp(1.45rem, 3.4vw, 2rem);
    font-weight: 500;
    line-height: 1.2;
  }

  h3 {
    margin: 0;
    color: var(--ink-strong);
    font-size: clamp(1.1rem, 2.2vw, 1.34rem);
    line-height: 1.35;
  }

  p,
  li {
    color: var(--muted);
    line-height: 1.74;
  }

  p {
    margin: 0;
  }

  .day-list {
    display: grid;
    gap: 1rem;
  }

  .day-row {
    display: grid;
    grid-template-columns: 5rem minmax(0, 1fr) 10rem;
    gap: 1rem;
    align-items: start;
    border-top: 1px solid var(--line);
    padding-top: 1rem;
    color: inherit;
    text-decoration: none;
  }

  .day-row:first-child {
    border-top: 0;
    padding-top: 0;
  }

  .day-row:hover h3 {
    color: var(--accent);
  }

  .day-row span,
  .day-row em {
    color: var(--muted);
    font-family: var(--font-mono);
    font-size: 0.76rem;
    font-style: normal;
  }

  .upcoming {
    color: var(--muted);
  }

  ul,
  ol {
    display: grid;
    gap: 0.65rem;
    margin: 0;
    padding-left: 1.25rem;
  }

  .source-link {
    margin-top: 0.9rem;
    font-family: var(--font-mono);
    font-size: 0.78rem;
  }

  @media (max-width: 760px) {
    .day-row {
      grid-template-columns: 1fr;
      gap: 0.35rem;
    }
  }
</style>
