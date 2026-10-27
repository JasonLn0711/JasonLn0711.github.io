<script lang="ts">
  import { onMount } from "svelte";
  import PageMeta from "./PageMeta.svelte";
  let { path }: { path: string } = $props();
  onMount(() => { window.location.replace(path + window.location.search + window.location.hash); });
</script>
<PageMeta title="Page moved · 頁面已移動" description="This page has a new address." {path} />
<svelte:head><meta http-equiv="refresh" content={`0;url=${path}`} /><meta name="robots" content="noindex,follow" /></svelte:head>
<section class="content-shell" style="padding-block:4rem"><h1>Page moved · 頁面已移動</h1><p><a href={path}>Continue to the article · 前往新位置 →</a></p></section>
