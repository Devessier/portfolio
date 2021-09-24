<script>
	export let id;

	$: src = `https://stately.ai/viz/embed/${id}?mode=viz&controls=1&pan=0&zoom=0`;
</script>

<div class="aspect-w-16 aspect-h-9">
	<iframe
		{src}
		title="XState Vizualiser"
		allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
		sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
		class="w-full h-full"
	/>
</div>
