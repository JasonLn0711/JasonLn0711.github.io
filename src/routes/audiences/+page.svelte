<script lang="ts">
  import PageMeta from "#lib/components/PageMeta.svelte";
  import { audienceRoutes, site } from "#lib/content/site.ts";
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
    padding-block: var(--page-pad-block);
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
    text-decoration: none;
    transition:
      transform 180ms var(--ease),
      border-color 180ms var(--ease),
      background 180ms var(--ease);
  }

  .audience-card:hover {
    transform: translateY(-1px);
    border-color: var(--accent);
    background: var(--surface-strong);
  }

  h2 {
    margin: 0 0 0.45rem;
    color: var(--ink-strong);
    font-size: clamp(1.2rem, 1.08rem + 0.65vw, 1.55rem);
    line-height: 1.3;
  }

  p {
    margin: 0 0 0.65rem;
    color: var(--muted);
    line-height: 1.65;
  }

  small {
    color: var(--accent);
    font-size: 0.9rem;
    line-height: 1.5;
  }
</style>
