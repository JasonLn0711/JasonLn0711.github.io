<script lang="ts">
  import PageMeta from "$lib/components/PageMeta.svelte";
  import { audienceRoutes, site } from "$lib/content/site";
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
    min-height: 100dvh;
    display: grid;
    align-items: center;
    padding-top: 8rem;
  }

  .links-grid {
    display: grid;
    grid-template-columns: 0.75fr 1fr;
    gap: 2rem;
    align-items: start;
  }

  .links-list {
    display: grid;
    gap: 0.75rem;
  }

  .links-list a {
    padding: 1rem;
    color: var(--ink);
  }

  .links-list a:hover {
    color: var(--accent);
    border-color: var(--line-strong);
  }

  @media (max-width: 900px) {
    .links-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
