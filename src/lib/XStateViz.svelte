<script>
	export let id;

	$: src = `https://stately.ai/viz/${id}`;
</script>

<div class="aspect-w-16 aspect-h-9">
	<iframe {src} title="XState Vizualiser" class="w-full h-full" />
</div>
