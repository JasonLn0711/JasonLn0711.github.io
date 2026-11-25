<script lang="ts">
  import PageMeta from "#lib/components/PageMeta.svelte";
  import { audienceRoutes, site } from "#lib/content/site.ts";
</script>

<PageMeta
  title={`Links | ${site.name}`}
  description="Compact routing page for Jason Chia-Sheng Lin's research, projects, writing, talks, and contact."
  path="/links/"
/>

<section class="section links-page">
  <div class="page-shell links-grid">
    <div data-reveal>
      <p class="kicker">Quick Links</p>
      <h1 class="headline">{site.name}</h1>
      <p class="subhead">Choose the route that matches your reason for visiting.</p>
    </div>
    <div class="links-list">
      {#each site.nav as item}
        <a class="panel-soft" href={item.href} data-reveal>{item.label}</a>
      {/each}
      {#each audienceRoutes.slice(0, 4) as route}
        <a class="panel-soft" href={route.href} data-reveal>{route.title}</a>
      {/each}
      <a class="panel-soft" href={site.github} rel="noreferrer" target="_blank">GitHub</a>
      <a class="panel-soft" href={site.linkedin} rel="noreferrer" target="_blank">LinkedIn</a>
    </div>
  </div>
</section>

<style>
  .links-page {
    padding-block: var(--page-pad-block);
  }

  .links-grid {
    display: grid;
    grid-template-columns: minmax(0, 0.78fr) minmax(0, 1fr);
    gap: clamp(1.5rem, 4vw, 3rem);
    align-items: start;
  }

  .links-grid > div:first-child {
    display: grid;
    gap: 0.9rem;
  }

  .links-list {
    display: grid;
    gap: 0.65rem;
  }

  .links-list a {
    display: flex;
    align-items: center;
    min-height: 44px;
    padding: 0.85rem 1rem;
    color: var(--ink-strong);
    font-weight: var(--heading-weight);
    text-decoration: none;
    transition:
      border-color 160ms var(--ease),
      background 160ms var(--ease),
      color 160ms var(--ease);
  }

  .links-list a:hover {
    color: var(--accent);
    border-color: var(--accent);
    background: var(--accent-soft);
  }

  @media (max-width: 900px) {
    .links-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
