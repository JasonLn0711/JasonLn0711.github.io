<script lang="ts">
  import PageMeta from "$lib/components/PageMeta.svelte";
  import { projects, site } from "$lib/content/site";
</script>

<PageMeta
  title={`Project Evidence Lab | ${site.name}`}
  description="Inspectable project benches for speech evidence, grounded fraud analysis, and federated-learning leakage risk."
  path="/projects/"
/>

<section class="section projects-page">
  <div class="page-shell">
    <div class="grid-two project-head">
      <div data-reveal>
        <p class="kicker">Project Evidence Lab</p>
        <h1 class="headline">Systems you can inspect.</h1>
      </div>
      <p class="subhead" data-reveal>
        Each project is framed by human pain, system response, evidence surface,
        readiness, and the next useful validation step.
      </p>
    </div>

    <div class="bench-grid">
      {#each projects as project, index}
        <a class:featured={index === 0} class="bench panel" href={`/projects/${project.slug}/`} data-reveal>
          <div class="bench-copy">
            <span class="maturity">{project.readiness}</span>
            <h2>{project.title}</h2>
            <p>{project.summary}</p>
          </div>
          <img src={project.cover} alt="" loading={index === 0 ? "eager" : "lazy"} />
          <div class="evidence-list">
            {#each project.evidence as item}
              <span>{item}</span>
            {/each}
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>

<style>
  .projects-page {
    padding-top: 10.5rem;
  }

  .project-head {
    margin-bottom: 2rem;
  }

  .bench-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }

  .bench {
    display: grid;
    gap: 1.2rem;
    padding: 1.2rem;
  }

  .bench.featured {
    grid-row: span 2;
  }

  .bench-copy {
    display: grid;
    gap: 0.7rem;
  }

  h2 {
    margin: 0;
    font-size: clamp(1.7rem, 3vw, 3.5rem);
    line-height: 0.98;
  }

  p {
    color: var(--muted);
    line-height: 1.65;
  }

  img {
    width: 100%;
    border-radius: 0.9rem;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(0, 0, 0, 0.2);
  }

  .evidence-list {
    display: grid;
    gap: 0.65rem;
  }

  .evidence-list span {
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 0.75rem;
    padding: 0.75rem;
    color: var(--muted);
    background: rgba(255, 255, 255, 0.035);
  }

  @media (max-width: 900px) {
    .projects-page {
      padding-top: 8rem;
    }

    .bench-grid {
      grid-template-columns: 1fr;
    }

    .bench.featured {
      grid-row: auto;
    }
  }
</style>
