<script>
	import { draw } from 'svelte/transition';
	import { quintIn } from 'svelte/easing';

	export let transition = false;
	export let duration = 600;
	let className = '';
	export { className as class };
	export let ariaLabel = undefined;
</script>

<svg
	viewBox="0 0 24 24"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	class={className}
	aria-label={ariaLabel}
>
	<path
		in:draw={{ delay: 200, duration: transition ? duration : 0, easing: quintIn }}
		d="M5 13L9 17L19 7"
		stroke-width="2"
		stroke-linejoin="round"
	/>
</svg>
