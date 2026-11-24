<script lang="ts">
  import "@fontsource-variable/inter/wght.css";
  import "@fontsource-variable/inter/wght-italic.css";
  import "@fontsource-variable/noto-sans-tc/wght.css";
  import "#lib/styles/fonts.css";
  import "../app.css";
  import "katex/dist/katex.min.css";
  import { page } from "$app/state";
  import { siteLanguage } from "#lib/content/localization.ts";
  import Footer from "#lib/components/Footer.svelte";
  import Nav from "#lib/components/Nav.svelte";

  let { children } = $props();

  $effect(() => {
    document.documentElement.lang = siteLanguage(page.url.pathname);
  });
</script>

<Nav />
<main id="main" class="main-root" tabindex="-1">
  {@render children()}
</main>
<Footer />

<style>
  .main-root {
    min-height: 100dvh;
    padding-top: 0.1px;
    scroll-margin-top: 5.5rem;
  }
</style>
