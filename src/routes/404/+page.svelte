<script lang="ts">
  import PageMeta from "$lib/components/PageMeta.svelte";
  import { site } from "$lib/content/site";
</script>

<PageMeta
  title={`Page not found | ${site.name}`}
  description="This page could not be found. Use the research atlas routes to continue."
  path="/404/"
  noindex
/>

<section class="section not-found">
  <div class="page-shell panel">
    <p class="kicker">404</p>
    <h1 class="headline">This route is not in the atlas yet.</h1>
    <p class="subhead">Use a public route below to continue without losing context.</p>
    <div class="btn-row">
      <a class="button primary" href="/">Home <span class="button-mark">→</span></a>
      <a class="button" href="/research/">Research <span class="button-mark">→</span></a>
      <a class="button" href="/contact/">Contact <span class="button-mark">→</span></a>
    </div>
  </div>
</section>

<style>
  .not-found {
    min-height: 100dvh;
    display: grid;
    align-items: center;
    padding-top: 8rem;
  }

  .panel {
    padding: clamp(1.5rem, 5vw, 4rem);
  }
</style>
