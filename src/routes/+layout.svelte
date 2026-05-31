<script lang="ts">
  import "../app.css";
  import Footer from "$lib/components/Footer.svelte";
  import MotionLayer from "$lib/components/MotionLayer.svelte";
  import Nav from "$lib/components/Nav.svelte";

  let { children } = $props();
</script>

<Nav />
<MotionLayer />
<main id="main" class="main-root">
  {@render children()}
</main>
<Footer />

<style>
  .main-root {
    min-height: 100dvh;
    padding-top: 0.1px;
  }
</style>
