<script lang="ts">
  import WritingDetail from "../../writing/[slug]/+page.svelte";
  import type { writings } from "$lib/content/site";

  let { data } = $props<{ data: { writing: (typeof writings)[number] } }>();
</script>

<WritingDetail {data} />
