<script lang="ts">
  import PageMeta from "$lib/components/PageMeta.svelte";
  import { currentSnapshot, recentHighlights, site, timelineMonths, workTracks } from "$lib/content/site";
</script>

<PageMeta
  title={`Now | ${site.name}`}
  description="A recent public-safe map of Jason Lin's April-June 2026 research, systems, teaching, and writing work."
  path="/now/"
/>

<section class="now-page">
  <div class="content-shell">
    <header class="page-head">
      <p class="kicker">Now / Recent work</p>
      <h1>{currentSnapshot.period}</h1>
      <p class="lead">{currentSnapshot.summary}</p>
    </header>

    <section class="plain-section" aria-labelledby="focus-heading">
      <h2 id="focus-heading">Current focus</h2>
      <div class="track-list">
        {#each workTracks as track}
          <article>
            <h3><a href={track.href}>{track.title}</a></h3>
            <p>{track.summary}</p>
          </article>
        {/each}
      </div>
    </section>

    <section class="plain-section" aria-labelledby="highlights-heading">
      <h2 id="highlights-heading">Recent highlights</h2>
      <div class="highlight-list">
        {#each recentHighlights as item}
          <article class="highlight-row">
            <time datetime={item.date}>{item.period}</time>
            <div>
              <p class="kicker">{item.category}</p>
              <h3><a href={item.href}>{item.title}</a></h3>
              <p>{item.summary}</p>
              <span>{item.status}</span>
            </div>
          </article>
        {/each}
      </div>
    </section>

    <section class="plain-section" aria-labelledby="timeline-heading">
      <h2 id="timeline-heading">Month-by-month</h2>
      <div class="month-list">
        {#each timelineMonths as month}
          <article>
            <h3>{month.month}</h3>
            <p>{month.summary}</p>
            <ul>
              {#each month.items as item}
                <li>{item}</li>
              {/each}
            </ul>
          </article>
        {/each}
      </div>
    </section>

    <section class="plain-section boundary" aria-labelledby="boundary-heading">
      <h2 id="boundary-heading">Public boundary</h2>
      <p>{currentSnapshot.boundary}</p>
    </section>
  </div>
</section>

<style>
  .now-page {
    padding-block: clamp(3.5rem, 9vw, 6rem);
  }

  .page-head {
    margin-bottom: clamp(2.4rem, 7vw, 4rem);
  }

  h1 {
    margin: 1rem 0 1rem;
    color: var(--ink-strong);
    font-family: var(--font-serif);
    font-size: clamp(2.7rem, 8vw, 4.9rem);
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
    padding-block: clamp(2.1rem, 6vw, 3.4rem);
  }

  h2 {
    margin: 0 0 1.4rem;
    color: var(--ink-strong);
    font-family: var(--font-serif);
    font-size: clamp(1.6rem, 4vw, 2.2rem);
    font-weight: 500;
    line-height: 1.18;
  }

  .track-list,
  .highlight-list,
  .month-list {
    display: grid;
    gap: 1.35rem;
  }

  .track-list article,
  .highlight-row,
  .month-list article {
    border-top: 1px solid var(--line);
    padding-top: 1.1rem;
  }

  .track-list article:first-child,
  .highlight-row:first-child,
  .month-list article:first-child {
    border-top: 0;
    padding-top: 0;
  }

  .highlight-row {
    display: grid;
    grid-template-columns: 8.5rem minmax(0, 1fr);
    gap: 1.5rem;
  }

  h3 {
    margin: 0;
    color: var(--ink-strong);
    font-size: clamp(1.1rem, 2vw, 1.28rem);
    line-height: 1.35;
  }

  p,
  li {
    color: var(--muted);
    line-height: 1.72;
  }

  p {
    margin: 0.45rem 0 0;
  }

  ul {
    margin: 0.85rem 0 0;
    padding-left: 1.25rem;
  }

  time,
  .highlight-row span {
    color: var(--muted);
    font-family: var(--font-mono);
    font-size: 0.78rem;
  }

  .boundary p {
    margin: 0;
  }

  @media (max-width: 700px) {
    .highlight-row {
      grid-template-columns: 1fr;
      gap: 0.4rem;
    }
  }
</style>
