<script lang="ts">
  import PageMeta from "$lib/components/PageMeta.svelte";
  import { projects, researchPillars, site, talkHighlights } from "$lib/content/site";
</script>

<PageMeta
  title={`Resume | ${site.name}`}
  description="Professional evidence route for Jason Chia-Sheng Lin: research focus, selected systems, talks, toolkit, and collaboration fit."
  path="/resume/"
/>

<section class="section resume-page">
  <div class="page-shell resume-grid">
    <aside class="resume-card panel" data-reveal>
      <p class="kicker">Resume</p>
      <h1>{site.name}</h1>
      <p>{site.title}</p>
      <span>{site.institution}</span>
      <a class="button primary" href={`mailto:${site.email}`}>Contact <span class="button-mark">→</span></a>
    </aside>
    <div class="resume-sections">
      <section class="panel block" data-reveal>
        <p class="kicker">Research focus</p>
        <div class="rows">
          {#each researchPillars as pillar}
            <a href={`/research/${pillar.slug}/`}>{pillar.title}</a>
          {/each}
        </div>
      </section>
      <section class="panel block" data-reveal>
        <p class="kicker">Selected systems</p>
        <div class="rows">
          {#each projects as project}
            <a href={`/projects/${project.slug}/`}>{project.title} · {project.readiness}</a>
          {/each}
        </div>
      </section>
      <section class="panel block" data-reveal>
        <p class="kicker">Public signals</p>
        <div class="rows">
          {#each talkHighlights as talk}
            <a href={talk.href}>{talk.event} · {talk.title}</a>
          {/each}
        </div>
      </section>
      <section class="panel block" data-reveal>
        <p class="kicker">Toolkit</p>
        <div class="chips">
          {#each ["AI Agents", "ASR", "RAG", "LLM Pipelines", "Cybersecurity", "Threat Modeling", "Evaluation", "Python"] as item}
            <span>{item}</span>
          {/each}
        </div>
      </section>
    </div>
  </div>
</section>

<style>
  .resume-page {
    padding-top: 10.5rem;
  }

  .resume-grid {
    display: grid;
    grid-template-columns: minmax(280px, 0.42fr) minmax(0, 1fr);
    gap: 1rem;
    align-items: start;
  }

  .resume-card {
    position: sticky;
    top: 7.5rem;
    display: grid;
    gap: 1rem;
    padding: clamp(1.3rem, 3vw, 2rem);
  }

  .resume-card h1 {
    margin: 0;
    font-size: clamp(2.1rem, 4.5vw, 4.8rem);
    line-height: 0.95;
  }

  .resume-card p,
  .resume-card span {
    color: var(--muted);
    line-height: 1.65;
  }

  .resume-sections {
    display: grid;
    gap: 1rem;
  }

  .block {
    padding: clamp(1.25rem, 3vw, 2rem);
  }

  .rows,
  .chips {
    display: grid;
    gap: 0.7rem;
  }

  .rows a,
  .chips span {
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 0.75rem;
    padding: 0.85rem;
    color: var(--muted);
    background: rgba(255, 255, 255, 0.035);
  }

  .rows a:hover {
    color: var(--accent);
    border-color: var(--line-strong);
  }

  .chips {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  @media (max-width: 960px) {
    .resume-page {
      padding-top: 8rem;
    }

    .resume-grid,
    .chips {
      grid-template-columns: 1fr;
    }

    .resume-card {
      position: static;
    }
  }
</style>
