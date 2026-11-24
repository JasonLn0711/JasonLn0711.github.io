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
    padding-block: clamp(3.5rem, 9vw, 6rem);
  }

  .index-head {
    margin-bottom: clamp(2.4rem, 7vw, 4rem);
  }

  h1 {
    margin: 1rem 0 0.85rem;
    color: var(--ink-strong);
    font-size: clamp(2.6rem, 8vw, 4.8rem);
    font-weight: var(--heading-weight);
    line-height: 1.06;
    text-wrap: balance;
  }

  .index-head p:last-child,
  p {
    color: var(--muted);
    line-height: 1.72;
  }

  .system-list {
    display: grid;
    gap: 1.7rem;
  }

  .system-row {
    display: grid;
    grid-template-columns: 9.5rem minmax(0, 1fr);
    gap: 1.6rem;
    border-top: 1px solid var(--line);
    padding-top: 1.5rem;
  }

  .system-meta {
    display: grid;
    gap: 0.35rem;
    align-content: start;
    color: var(--muted);
    font-size: 0.78rem;
  }

  h2 {
    margin: 0;
    color: var(--ink-strong);
    font-size: clamp(1.25rem, 3vw, 1.65rem);
    line-height: 1.3;
  }

  p {
    margin: 0.5rem 0 0;
  }

  @media (max-width: 760px) {
    .system-row {
      grid-template-columns: 1fr;
      gap: 0.7rem;
    }
  }
</style>
