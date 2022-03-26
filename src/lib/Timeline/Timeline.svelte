<script lang="ts">
	import { onMount } from 'svelte';

	export let skipWaiting = false;
	export let events = [];

	let className;

	export { className as class };

	const FADE_INTERVAL = 50;
	let loaded = false;

	$: initialDelay = skipWaiting ? 0 : 400;

	onMount(() => {
		loaded = true;
	});

	function handleAnimationEnd({
		currentTarget: { classList }
	}: AnimationEvent & { currentTarget: EventTarget & HTMLParagraphElement }) {
		classList.remove('fadeIn');
	}
</script>

<div class="timeline {className}">
	{#each events as { title, description, date }, index}
		<p
			class="text-red-700 font-semibold text-left md:text-right {loaded ? 'fadeIn' : 'opacity-0'}"
			style="animation-delay: {FADE_INTERVAL * index + initialDelay}ms"
			on:animationend={handleAnimationEnd}
		>
			{date}
		</p>

		<div
			class="ml-0 md:ml-4 mb-6 {loaded ? 'fadeIn' : 'opacity-0'}"
			style="animation-delay: {FADE_INTERVAL * index + initialDelay}ms"
			on:animationend={handleAnimationEnd}
		>
			<slot name="event" {title} {description} />
		</div>
	{/each}
</div>

<style>
	.timeline {
		@apply grid;

		grid-template-columns: 1fr;

		@screen md {
			grid-template-columns: max-content 1fr;
		}
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(-5px);
		}

		to {
			opacity: 1;
		}
	}

	.fadeIn {
		opacity: 0;

		animation-name: fadeIn;
		animation-duration: 300ms;
		animation-fill-mode: forwards;
	}
</style>
