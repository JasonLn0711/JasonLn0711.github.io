<script lang="ts">
  import PageMeta from "#lib/components/PageMeta.svelte";
  import { projects, recentHighlights, researchPillars, site, teachingHighlights } from "#lib/content/site.ts";
</script>

<PageMeta
  title={`CV / Resume | ${site.name}`}
  description="A concise evidence route for Jason Chia-Sheng Lin's research, systems, teaching, and public work."
  path="/resume/"
/>

<section class="resume-page">
  <div class="content-shell">
    <header class="resume-head">
      <p class="kicker">CV / Resume</p>
      <h1>{site.name}</h1>
      <p class="lead">{site.title}</p>
      <p>{site.institution}</p>
      <div class="contact-line">
        <a href={`mailto:${site.email}`}>{site.email}</a>
        <a href={site.github} rel="noreferrer" target="_blank">GitHub</a>
        <a href={site.linkedin} rel="noreferrer" target="_blank">LinkedIn</a>
      </div>
    </header>

    <section class="plain-section">
      <h2>Current positioning</h2>
      <p>
        Doctoral researcher and AI systems builder focused on evidence-aware
        AI for speech decision stability, clinical workflow support, agent
        governance, cybersecurity, and enterprise AI systems education.
      </p>
    </section>

    <section class="plain-section">
      <h2>Recent public proof</h2>
      <div class="row-list">
        {#each recentHighlights.slice(0, 6) as item}
          <article class="resume-row">
            <time datetime={item.date}>{item.period}</time>
            <div>
              <h3><a href={item.href}>{item.title}</a></h3>
              <p>{item.status}</p>
            </div>
          </article>
        {/each}
      </div>
    </section>

    <section class="plain-section">
      <h2>Research programs</h2>
      <div class="link-list">
        {#each researchPillars as pillar}
          <a href={`/research/${pillar.slug}/`}>{pillar.title} · {pillar.maturity}</a>
        {/each}
      </div>
    </section>

    <section class="plain-section">
      <h2>Selected systems</h2>
      <div class="link-list">
        {#each projects.slice(0, 4) as project}
          <a href={`/projects/${project.slug}/`}>{project.title} · {project.readiness}</a>
        {/each}
      </div>
    </section>

    <section class="plain-section">
      <h2>Teaching and public work</h2>
      <div class="link-list">
        {#each teachingHighlights as item}
          <a href={item.href}>{item.title} · {item.status}</a>
        {/each}
      </div>
    </section>

    <section class="plain-section">
      <h2>Toolkit</h2>
      <div class="tag-list">
        {#each ["AI systems engineering", "ASR", "RAG", "LLM pipelines", "Voice AI", "Agent governance", "Cybersecurity", "Threat modeling", "Evaluation", "Python", "TypeScript"] as item}
          <span>{item}</span>
        {/each}
      </div>
    </section>
  </div>
</section>

<style>
  .resume-page {
    padding-block: var(--page-pad-block);
  }

  .resume-head {
    margin-bottom: clamp(2rem, 5vw, 3rem);
  }

  h1 {
    margin: 0.7rem 0 0.85rem;
    color: var(--ink-strong);
    font-size: var(--page-title-size);
    font-weight: var(--heading-weight);
    letter-spacing: -0.025em;
    line-height: 1.1;
    text-wrap: balance;
  }

  .lead {
    margin: 0;
    color: var(--ink-strong);
    font-size: clamp(1.06rem, 0.98rem + 0.45vw, 1.22rem);
    line-height: 1.65;
  }

  .resume-head p:not(.kicker):not(.lead),
  p {
    color: var(--muted);
    line-height: 1.72;
  }

  .resume-head p:not(.kicker):not(.lead) {
    margin: 0.45rem 0 0;
  }

  .contact-line {
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem 1.25rem;
    margin-top: 1.15rem;
  }

  .contact-line a {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    font-weight: var(--heading-weight);
  }

  .tag-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.5rem;
  }

  .plain-section {
    border-top: 1px solid var(--line);
    padding-block: clamp(1.65rem, 4vw, 2.5rem);
  }

  h2 {
    margin: 0 0 1.1rem;
    color: var(--ink-strong);
    font-size: var(--section-title-size);
    font-weight: var(--heading-weight);
    line-height: 1.2;
  }

  .row-list {
    display: grid;
    gap: 1.1rem;
  }

  .link-list {
    display: grid;
    gap: 0.15rem;
  }

  .resume-row {
    display: grid;
    grid-template-columns: 8.5rem minmax(0, 1fr);
    gap: 1.4rem;
  }

  h3 {
    margin: 0;
    color: var(--ink-strong);
    font-size: 1.05rem;
    line-height: 1.38;
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

  .resume-row p {
    margin: 0.3rem 0 0;
  }

  time {
    color: var(--muted);
    font-size: 0.8rem;
  }

  .link-list a {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    padding: 0.35rem 0;
    color: var(--ink-strong);
    text-decoration-color: var(--control-line);
    text-underline-offset: 0.19em;
    line-height: 1.45;
  }

  .link-list a:hover {
    color: var(--accent);
    text-decoration-color: currentColor;
  }

  .tag-list span {
    border: 1px solid var(--line);
    border-radius: var(--radius-sm);
    padding: 0.25rem 0.55rem;
    color: var(--ink);
    background: var(--surface-strong);
    font-size: 0.82rem;
    line-height: 1.5;
  }

  @media (max-width: 700px) {
    .resume-row {
      grid-template-columns: 1fr;
      gap: 0.3rem;
    }
  }
</style>
