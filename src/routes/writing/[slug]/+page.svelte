<script lang="ts">
  import BlogDetail from "../../blog/[slug]/+page.svelte";

  let { data } = $props();
</script>

<BlogDetail {data} />
