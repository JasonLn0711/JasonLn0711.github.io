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

<section class="section project-detail">
  <div class="page-shell detail-grid">
    <aside class="panel detail-rail" data-reveal>
      <span class="kicker">Project Bench</span>
      <h1>{project.title}</h1>
      <p>{project.summary}</p>
      <span class="maturity">{project.readiness}</span>
    </aside>
    <article class="detail-body">
      <img src={project.cover} alt={`${project.title} visual summary`} data-reveal />
      <section class="panel block" data-reveal>
        <p class="kicker">Human pain</p>
        <p>{project.humanPain}</p>
      </section>
      <section class="panel block" data-reveal>
        <p class="kicker">System response</p>
        <p>{project.systemResponse}</p>
      </section>
      <section class="panel block" data-reveal>
        <p class="kicker">Evidence surface</p>
        <div class="rows">
          {#each project.evidence as item}
            <span>{item}</span>
          {/each}
        </div>
      </section>
      <section class="panel block" data-reveal>
        <p class="kicker">Toolkit</p>
        <div class="chips">
          {#each project.stack as item}
            <span>{item}</span>
          {/each}
        </div>
      </section>
      <section class="panel block" data-reveal>
        <p class="kicker">Next validation layer</p>
        <p>{project.next}</p>
      </section>
    </article>
  </div>
</section>

<style>
  .project-detail {
    padding-top: 10.5rem;
  }

  .detail-grid {
    display: grid;
    grid-template-columns: minmax(280px, 0.42fr) minmax(0, 1fr);
    gap: 1rem;
    align-items: start;
  }

  .detail-rail {
    position: sticky;
    top: 7.5rem;
    display: grid;
    gap: 1rem;
    padding: clamp(1.25rem, 3vw, 2rem);
  }

  h1 {
    margin: 0;
    font-size: clamp(2.1rem, 4.4vw, 4.8rem);
    line-height: 0.96;
  }

  p {
    color: var(--muted);
    line-height: 1.7;
  }

  .detail-body {
    display: grid;
    gap: 1rem;
  }

  img {
    width: 100%;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: var(--radius-lg);
    background: rgba(0, 0, 0, 0.2);
  }

  .block {
    padding: clamp(1.25rem, 3vw, 2rem);
  }

  .rows,
  .chips {
    display: flex;
    flex-wrap: wrap;
    gap: 0.7rem;
  }

  .rows span,
  .chips span {
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 0.75rem;
    padding: 0.75rem;
    color: var(--muted);
    background: rgba(255, 255, 255, 0.035);
  }

  @media (max-width: 960px) {
    .project-detail {
      padding-top: 8rem;
    }

    .detail-grid {
      grid-template-columns: 1fr;
    }

    .detail-rail {
      position: static;
    }
  }
</style>
