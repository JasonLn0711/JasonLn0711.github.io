<script lang="ts">
  import PageMeta from "#lib/components/PageMeta.svelte";
  import { projects, site } from "#lib/content/site.ts";

  let { data } = $props<{ data: { project: (typeof projects)[number] } }>();
  let project = $derived(data.project);
</script>

<PageMeta
  title={`${project.title} | ${site.name}`}
  description={project.summary}
  path={`/projects/${project.slug}/`}
  image={project.cover}
/>

<section class="detail-page">
  <div class="content-shell">
    <nav class="back-nav" aria-label="Back navigation">
      <a href="/projects/"><span aria-hidden="true">←</span> Projects</a>
    </nav>
    <article>
      <header class="detail-head">
        <p class="kicker">{project.category} · {project.readiness}</p>
        <h1>{project.title}</h1>
        <p class="lead">{project.summary}</p>
      </header>

      <section class="plain-section">
        <h2>Problem</h2>
        <p>{project.humanPain}</p>
      </section>

      <section class="plain-section">
        <h2>How it works</h2>
        <p>{project.systemResponse}</p>
      </section>

      <section class="plain-section">
        <h2>What the project demonstrates</h2>
        <ul>
          {#each project.evidence as item}
            <li>{item}</li>
          {/each}
        </ul>
      </section>

      <section class="plain-section">
        <h2>Toolkit</h2>
        <div class="tag-list">
          {#each project.stack as item}
            <span>{item}</span>
          {/each}
        </div>
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
    overflow-wrap: anywhere;
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
    margin: 0 0 0.9rem;
    color: var(--ink-strong);
    font-size: var(--section-title-size);
    font-weight: var(--heading-weight);
    line-height: 1.22;
  }

  p,
  li {
    color: var(--muted);
    line-height: 1.74;
  }

  p {
    margin: 0;
  }

  ul {
    display: grid;
    gap: 0.65rem;
    margin: 0;
    padding-left: 1.25rem;
  }

  .tag-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tag-list span {
    border: 1px solid var(--line);
    border-radius: var(--radius-sm);
    padding: 0.25rem 0.55rem;
    color: var(--ink);
    background: var(--surface-strong);
    font-size: 0.82rem;
  }
</style>
