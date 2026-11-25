<script lang="ts">
  import PageMeta from "#lib/components/PageMeta.svelte";
  import { site, teachingAccelerators, teachingHighlights } from "#lib/content/site.ts";
</script>

<PageMeta
  title={`Teaching | ${site.name}`}
  description="Courses and handouts on AI systems engineering, AI Gateway architecture, agent governance, cybersecurity, and deployment."
  path="/teaching/"
/>

<section class="index-page">
  <div class="content-shell">
    <header class="index-head">
      <p class="kicker">Teaching</p>
      <h1>Learn AI systems engineering</h1>
      <p>
        Use worked examples and exercises to design, secure and evaluate AI systems.
      </p>
    </header>

    <section class="plain-section" aria-labelledby="learning-heading">
      <h2 id="learning-heading">CS Kairos Learning</h2>
      <p>Study a concept, work through an example, and check your reasoning. The learning site brings together technical lessons, original questions, and guided practice.</p>
      <p lang="zh-Hant">從概念、例子到理解檢核與安全練習，依自己的節奏學習。</p>
      <p><a href={site.learningUrl}>Explore courses / 前往課程 →</a></p>
    </section>

    <section class="plain-section" aria-labelledby="accelerators-heading">
      <h2 id="accelerators-heading">Courses and handouts</h2>

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
      <h2 id="surfaces-heading">Related teaching material</h2>
      <div class="surface-list">
        {#each teachingHighlights as item}
          <article>
            <div class="meta-line">
              <span>{item.date}</span>
              <span>{item.audience}</span>
            </div>
            <h3><a href={item.href}>{item.title}</a></h3>
            <p>{item.summary}</p>
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
    margin-bottom: clamp(2rem, 5vw, 3rem);
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
    margin: 0 0 1.1rem;
    color: var(--ink-strong);
    font-size: var(--section-title-size);
    font-weight: var(--heading-weight);
    line-height: 1.2;
  }

  h3 {
    margin: 0;
    color: var(--ink-strong);
    font-size: clamp(1.15rem, 1.05rem + 0.5vw, 1.42rem);
    line-height: 1.32;
  }

  h3 a {
    color: var(--ink-strong);
    text-decoration: none;
  }

  h3 a:hover {
    color: var(--accent);
    text-decoration: underline;
    text-underline-offset: 0.22em;
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
    font-size: 0.78rem;
  }

  .thesis {
    color: var(--ink);
  }

  .day-list {
    display: grid;
    gap: 0.15rem;
    margin-top: 1.1rem;
  }

  .day-row {
    display: grid;
    grid-template-columns: 4.2rem minmax(0, 1fr) auto;
    gap: 0.7rem;
    align-items: center;
    min-height: 44px;
    border-top: 1px solid var(--line);
    padding: 0.55rem 0.5rem;
    margin-inline: -0.5rem;
    border-radius: var(--radius-sm);
    color: var(--ink);
    text-decoration: none;
    transition: background 160ms var(--ease);
  }

  a.day-row:hover {
    background: var(--bg-soft);
  }

  .day-row:hover strong {
    color: var(--accent);
  }

  .day-row span,
  .day-row em,
  .surface-list span {
    color: var(--muted);
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

  }
</style>
