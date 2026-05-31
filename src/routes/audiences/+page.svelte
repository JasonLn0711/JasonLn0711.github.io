<script lang="ts">
  import PageMeta from "$lib/components/PageMeta.svelte";
  import { audienceRoutes, site } from "$lib/content/site";
</script>

<PageMeta
  title={`Audience Routes | ${site.name}`}
  description="Choose the route that matches your role, need, and decision."
  path="/audiences/"
/>

<section class="section audience-page">
  <div class="page-shell grid-two">
    <div data-reveal>
      <p class="kicker">Entry Points</p>
      <h1 class="headline">Choose the path that matches your decision.</h1>
      <p class="subhead">
        The site is organized around visitor intent. You can switch routes at
        any time, but each path starts from a different question.
      </p>
    </div>
    <div class="route-stack">
      {#each audienceRoutes as route, index}
        <a class="audience-card panel" href={route.href} data-reveal>
          <span class="maturity">{String(index + 1).padStart(2, "0")}</span>
          <div>
            <h2>{route.title}</h2>
            <p>{route.pain}</p>
            <small>{route.helps}</small>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>

<style>
  .audience-page {
    padding-top: 11rem;
  }

  .route-stack {
    display: grid;
    gap: 0.9rem;
  }

  .audience-card {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1rem;
    padding: 1.2rem;
    transition:
      transform 520ms var(--ease),
      border-color 520ms var(--ease);
  }

  .audience-card:hover {
    transform: translateX(6px);
    border-color: var(--accent);
  }

  h2 {
    margin: 0 0 0.5rem;
    font-size: clamp(1.25rem, 2.4vw, 2rem);
  }

  p {
    margin: 0 0 0.7rem;
    color: var(--muted);
    line-height: 1.65;
  }

  small {
    color: var(--accent);
    line-height: 1.5;
  }

  @media (max-width: 900px) {
    .audience-page {
      padding-top: 8rem;
    }
  }
</style>
