<script>
	export let id;

	export let mode = 'viz';
	export let controls = true;
	export let pan = true;
	export let zoom = true;

	$: src = `https://stately.ai/viz/embed/${id}?mode=${mode}&controls=${controls ? 1 : 0}&pan=${
		pan ? 1 : 0
	}&zoom=${zoom ? 1 : 0}`;
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
