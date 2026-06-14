<script lang="ts">
  import PageMeta from "$lib/components/PageMeta.svelte";
  import { projects, site } from "$lib/content/site";
</script>

<PageMeta
  title={`Systems | ${site.name}`}
  description="Public-safe systems and prototypes for clinical workflow support, voice AI, speech evidence, fraud analysis, and cybersecurity."
  path="/projects/"
/>

<section class="index-page">
  <div class="content-shell">
    <header class="index-head">
      <p class="kicker">Systems</p>
      <h1>Small honest demos, explicit evidence, clear scope.</h1>
      <p>
        These projects are framed by the problem they address, the capability
        they demonstrate, the evidence surface behind them, and the next
        validation layer. Clinical and regulated systems stay synthetic,
        staff-review oriented, and deliberately bounded unless a separate
        governance path exists.
      </p>
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
            <div class="evidence-list">
              {#each project.evidence.slice(0, 2) as item}
                <span>{item}</span>
              {/each}
            </div>
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
    font-family: var(--font-mono);
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

  .evidence-list {
    display: grid;
    gap: 0.55rem;
    margin-top: 1rem;
  }

  .evidence-list span {
    border-left: 2px solid var(--line-strong);
    padding-left: 0.8rem;
    color: var(--muted);
    line-height: 1.62;
  }

  @media (max-width: 760px) {
    .system-row {
      grid-template-columns: 1fr;
      gap: 0.7rem;
    }
  }
</style>
