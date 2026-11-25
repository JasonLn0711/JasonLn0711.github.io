<script lang="ts">
  import PageMeta from "#lib/components/PageMeta.svelte";
  import { projects, site } from "#lib/content/site.ts";
</script>

<PageMeta
  title={`Systems | ${site.name}`}
  description="Systems and prototypes for clinical workflow support, voice AI, speech evidence, fraud analysis, and cybersecurity."
  path="/projects/"
/>

<section class="index-page">
  <div class="content-shell">
    <header class="index-head">
      <p class="kicker">Projects</p>
      <h1>Projects and prototypes</h1>
      <p>Explore work on clinical workflows, real-time voice, speech evidence and cybersecurity.</p>
    </header>

    <div class="system-list">
      {#each projects as project}
        <article class="system-row">
          <div class="system-meta">
            <span>{project.category}</span>
            <span>{project.readiness}</span>
          </div>
          <div>
            <h2><a href={`/projects/${project.slug}/`}>{project.title}</a></h2>
            <p>{project.summary}</p>
          </div>
        </article>
      {/each}
    </div>
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

  .system-list {
    display: grid;
  }

  .system-row {
    display: grid;
    grid-template-columns: 9.5rem minmax(0, 1fr);
    gap: 1.75rem;
    border-top: 1px solid var(--line);
    padding-block: 1.75rem;
  }

  .system-meta {
    display: grid;
    gap: 0.35rem;
    align-content: start;
    color: var(--muted);
    font-size: 0.82rem;
    line-height: 1.55;
  }

  .system-meta span:first-child {
    color: var(--ink-strong);
    font-weight: var(--heading-weight);
  }

  h2 {
    margin: 0;
    color: var(--ink-strong);
    font-size: clamp(1.2rem, 1.08rem + 0.55vw, 1.48rem);
    line-height: 1.38;
  }

  h2 a {
    color: var(--ink-strong);
    text-decoration: none;
  }

  h2 a:hover {
    color: var(--accent);
    text-decoration: underline;
    text-underline-offset: 0.22em;
  }

  p {
    margin: 0.6rem 0 0;
    line-height: 1.82;
    text-wrap: pretty;
  }

  @media (max-width: 760px) {
    .system-row {
      grid-template-columns: 1fr;
      gap: 0.55rem;
    }
  }
</style>
