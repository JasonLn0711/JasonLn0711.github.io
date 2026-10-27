<script lang="ts">
  import MovedPage from "$lib/components/MovedPage.svelte";
  import ArticleDetail from "$lib/components/ArticleDetail.svelte";
  let { data } = $props();
</script>
{#if data.post.section === "professional"}<MovedPage path={data.canonicalPath} />{:else}<ArticleDetail {data} />{/if}
