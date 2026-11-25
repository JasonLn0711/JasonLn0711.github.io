<script lang="ts">
  import PageMeta from "#lib/components/PageMeta.svelte";
  import { currentSnapshot, recentHighlights, site, timelineMonths, workTracks } from "#lib/content/site.ts";
</script>

<PageMeta
  title={`Work archive | ${site.name}`}
  description="Jason Lin's April–June 2026 research, projects, teaching and writing."
  path="/now/"
/>

<section class="now-page">
  <div class="content-shell">
    <header class="page-head">
      <p class="kicker">Work archive</p>
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

  </div>
</section>

<style>
  .now-page {
    padding-block: var(--page-pad-block);
  }

  .page-head {
    margin-bottom: clamp(2rem, 5vw, 3rem);
  }

  h1 {
    margin: 0.7rem 0 0.9rem;
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
    padding-block: clamp(1.8rem, 4.5vw, 2.8rem);
  }

  h2 {
    margin: 0 0 1.25rem;
    color: var(--ink-strong);
    font-size: var(--section-title-size);
    font-weight: var(--heading-weight);
    line-height: 1.2;
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
    font-size: clamp(1.1rem, 1.02rem + 0.4vw, 1.28rem);
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
    font-size: 0.78rem;
  }

  @media (max-width: 700px) {
    .highlight-row {
      grid-template-columns: 1fr;
      gap: 0.4rem;
    }
  }
</style>
