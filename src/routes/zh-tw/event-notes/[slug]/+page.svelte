<script lang="ts">import EventNotes from "$lib/components/EventNotes.svelte"; let { data } = $props();</script>
<EventNotes zh={true} slug={data.slug} />
