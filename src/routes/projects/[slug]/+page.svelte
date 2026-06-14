<script lang="ts">
  import PageMeta from "$lib/components/PageMeta.svelte";
  import { projects, site } from "$lib/content/site";

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
      <a href="/projects/">Systems</a>
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
        <h2>System response</h2>
        <p>{project.systemResponse}</p>
      </section>

      <section class="plain-section">
        <h2>Evidence surface</h2>
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

      <section class="plain-section">
        <h2>Next validation layer</h2>
        <p>{project.next}</p>
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
    gap: 0.55rem;
  }

  .tag-list span {
    border: 1px solid var(--line);
    border-radius: var(--radius-sm);
    padding: 0.24rem 0.46rem;
    color: var(--muted);
    background: var(--surface-strong);
    font-family: var(--font-mono);
    font-size: 0.78rem;
  }
</style>
