<script context="module" lang="ts">
	let inserted = false;
</script>

<script lang="ts">
	let shouldInsert = !inserted;
	inserted = true;

	export let videoId: string;
</script>

<svelte:head>
	{#if shouldInsert}
		<link rel="stylesheet" href="/lite-youtube-embed/styles.css" />

		<script src="/lite-youtube-embed/script.js"></script>
	{/if}
</svelte:head>

<div class="grid grid-cols-1 aspect-video w-full">
    <lite-youtube videoid={videoId} />
</div>
