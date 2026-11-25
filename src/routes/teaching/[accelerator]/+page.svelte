<script lang="ts">
  import PageMeta from "#lib/components/PageMeta.svelte";
  import { site, teachingAccelerators } from "#lib/content/site.ts";

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
      <a href="/teaching/"><span aria-hidden="true">←</span> Teaching</a>
    </nav>

    <article>
      <header class="detail-head">
        <p class="kicker">Accelerator · {accelerator.date}</p>
        <h1>{accelerator.title}</h1>
        <p class="lead">{accelerator.summary}</p>
      </header>

      <section class="plain-section">
        <h2>What you’ll learn</h2>
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
        <h2>What you’ll make</h2>
        <ul>
          {#each accelerator.evidenceDefinition as item}
            <li>{item}</li>
          {/each}
        </ul>
      </section>

    </article>
  </div>
</section>

<style>
  .detail-page {
    padding-block: var(--page-pad-block);
  }

  .detail-head {
    margin-bottom: clamp(1.8rem, 4.5vw, 2.75rem);
  }

  h1 {
    margin: 0.75rem 0 1rem;
    color: var(--ink-strong);
    font-size: var(--page-title-size);
    font-weight: var(--heading-weight);
    letter-spacing: -0.025em;
    line-height: 1.12;
    text-wrap: balance;
  }

  .lead {
    margin: 0;
    color: var(--ink-strong);
    font-size: clamp(1.06rem, 0.98rem + 0.45vw, 1.24rem);
    line-height: 1.7;
  }

  .plain-section {
    border-top: 1px solid var(--line);
    padding-block: clamp(1.6rem, 4vw, 2.5rem);
  }

  h2 {
    margin: 0 0 1rem;
    color: var(--ink-strong);
    font-size: var(--section-title-size);
    font-weight: var(--heading-weight);
    line-height: 1.22;
  }

  h3 {
    margin: 0;
    color: var(--ink-strong);
    font-size: clamp(1.08rem, 1rem + 0.35vw, 1.26rem);
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
    gap: 0.35rem;
  }

  .day-row {
    display: grid;
    grid-template-columns: 5rem minmax(0, 1fr);
    gap: 1rem;
    align-items: start;
    min-height: 44px;
    border-top: 1px solid var(--line);
    padding: 0.9rem 0.65rem;
    margin-inline: -0.65rem;
    border-radius: var(--radius-sm);
    color: inherit;
    text-decoration: none;
    transition: background 160ms var(--ease);
  }

  .day-row:first-child {
    border-top: 0;
  }

  a.day-row:hover {
    background: var(--bg-soft);
  }

  .day-row:hover h3 {
    color: var(--accent);
  }

  .day-row span,
  .day-row em {
    color: var(--muted);
    font-size: 0.76rem;
    font-style: normal;
  }

  .upcoming {
    color: var(--muted);
  }

  ul {
    display: grid;
    gap: 0.65rem;
    margin: 0;
    padding-left: 1.25rem;
  }

  @media (max-width: 760px) {
    .day-row {
      grid-template-columns: 1fr;
      gap: 0.35rem;
    }
  }
</style>
