<script lang="ts">
  import PageMeta from "#lib/components/PageMeta.svelte";
  import { projects, site } from "#lib/content/site.ts";

  type ProjectItem = (typeof projects)[number] & {
    repoUrl?: string;
    repoLabel?: string;
    summaryZh?: string;
    boundary?: string;
    latestDesign?: readonly { title: string; detail: string; detailZh?: string }[];
    designRationale?: readonly { title: string; why: string; whyZh?: string }[];
  };

  let { data } = $props<{ data: { project: ProjectItem } }>();
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
        {#if project.summaryZh}
          <p class="lead-zh" lang="zh-Hant">{project.summaryZh}</p>
        {/if}
        {#if project.repoUrl}
          <p class="repo-row">
            <a class="repo-link" href={project.repoUrl} rel="noreferrer" target="_blank">
              {project.repoLabel ?? "Public repository"} <span aria-hidden="true">↗</span>
            </a>
          </p>
        {/if}
      </header>

      <section class="plain-section">
        <h2>Problem</h2>
        <p>{project.humanPain}</p>
      </section>

      <section class="plain-section">
        <h2>How it works</h2>
        <p>{project.systemResponse}</p>
      </section>

      {#if project.latestDesign?.length}
        <section class="plain-section" id="latest-design">
          <h2>Latest architecture · <span class="h2-zh" lang="zh-Hant">最新系統架構設計</span></h2>
          <div class="rationale-list">
            {#each project.latestDesign as item}
              <article class="rationale-item">
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
                {#if item.detailZh}
                  <p class="zh-note" lang="zh-Hant">{item.detailZh}</p>
                {/if}
              </article>
            {/each}
          </div>
        </section>
      {/if}

      {#if project.designRationale?.length}
        <section class="plain-section" id="design-rationale">
          <h2>Design rationale · <span class="h2-zh" lang="zh-Hant">為什麼這樣設計的巧思</span></h2>
          <div class="rationale-list">
            {#each project.designRationale as item}
              <article class="rationale-item">
                <h3>{item.title}</h3>
                <p>{item.why}</p>
                {#if item.whyZh}
                  <p class="zh-note" lang="zh-Hant">{item.whyZh}</p>
                {/if}
              </article>
            {/each}
          </div>
        </section>
      {/if}

      <section class="plain-section">
        <h2>What the project demonstrates</h2>
        <ul>
          {#each project.evidence as item}
            <li>{item}</li>
          {/each}
        </ul>
        {#if project.boundary}
          <p class="evidence-scope">{project.boundary}</p>
        {/if}
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
    line-height: 1.72;
  }

  .lead-zh {
    margin: 0.75rem 0 0;
    color: var(--ink);
    font-size: clamp(0.98rem, 0.94rem + 0.25vw, 1.08rem);
    line-height: 1.85;
  }

  .repo-row {
    margin: 0.75rem 0 0;
  }

  .repo-link {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    min-height: 44px;
    font-size: 0.94rem;
    font-weight: var(--heading-weight);
    text-decoration: none;
  }

  .repo-link:hover {
    text-decoration: underline;
    text-underline-offset: 0.22em;
  }

  .plain-section {
    border-top: 1px solid var(--line);
    padding-block: clamp(1.75rem, 4vw, 2.65rem);
  }

  h2 {
    margin: 0 0 1.1rem;
    color: var(--ink-strong);
    font-size: var(--section-title-size);
    font-weight: var(--heading-weight);
    line-height: 1.28;
    text-wrap: balance;
  }

  .h2-zh {
    display: inline-block;
  }

  .rationale-list {
    display: grid;
    gap: 1.75rem;
  }

  .rationale-item h3 {
    margin: 0 0 0.5rem;
    color: var(--ink-strong);
    font-size: clamp(1.02rem, 0.97rem + 0.28vw, 1.14rem);
    font-weight: var(--heading-weight);
    line-height: 1.48;
    text-wrap: pretty;
  }

  .rationale-item p + .zh-note {
    margin-top: 0.55rem;
    color: var(--ink);
    line-height: 1.86;
  }

  p,
  li {
    color: var(--muted);
    line-height: 1.82;
  }

  p {
    margin: 0;
  }

  ul {
    display: grid;
    gap: 0.75rem;
    margin: 0;
    padding-left: 1.25rem;
  }

  .evidence-scope {
    margin-top: 1.25rem;
    padding: 0.85rem 1.05rem;
    border-left: 2px solid var(--amber);
    border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
    background: var(--surface-strong);
    color: var(--ink);
    font-size: 0.95rem;
    line-height: 1.78;
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
