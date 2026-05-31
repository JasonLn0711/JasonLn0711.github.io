<script lang="ts">
  import { site } from "$lib/content/site";

  export let title: string = site.defaultTitle;
  export let description: string = site.description;
  export let path: string = "/";
  export let image: string = "/og/default.png";
  export let lang: "en" | "zh-tw" = "en";
  export let noindex: boolean = false;

  $: canonical = new URL(path, site.url).toString();
  $: absoluteImage = new URL(image, site.url).toString();
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  {#if noindex}
    <meta name="robots" content="noindex, follow" />
  {/if}
  <link rel="canonical" href={canonical} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={canonical} />
  <meta property="og:image" content={absoluteImage} />
  <meta property="og:site_name" content={site.name} />
  <meta property="og:locale" content={lang === "zh-tw" ? "zh_TW" : "en_US"} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={absoluteImage} />
</svelte:head>
