<script>
	export let href;
	export let active = false;

	let className;

	export { className as class };
</script>

<a {href} rel="prefetch" class:active-link={active} class={className} on:click>
	<slot />
</a>

<style lang="postcss">
	a {
		@apply relative py-2 overflow-x-hidden block tracking-widest font-medium;
	}

	a::after {
		@apply absolute w-2/5 h-2 inset-x-0 bottom-0 transition duration-300 transform ease-in-out -translate-x-full bg-white;

		content: '';
	}

	a:hover::after {
		@apply bg-red-400;
	}

	a.active-link::after {
		@apply bg-red-500;
	}

	a:hover::after,
	a.active-link::after {
		@apply translate-x-0;
	}
</style>
