<script lang="ts">import MovedPage from "$lib/components/MovedPage.svelte"; let { data } = $props();</script>
<MovedPage path={data.canonicalPath} />
