<script lang="ts">
  import ArticleDetail from "$lib/components/ArticleDetail.svelte";
  let { data } = $props();
</script>
<ArticleDetail {data} />
