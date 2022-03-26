<script lang="ts">
	export let href: string | undefined = undefined;

	let className: string | undefined = undefined;
	export { className as class };

	$: rootClasses = `border-gray-300 mb-2 border text-gray-600 bg-white hover:bg-gray-50 transition-colors duration-100 ease-out font-normal text-xs px-3 py-1 rounded-2xl flex-shrink-0 mx-1 ${className}`;
</script>

{#if href !== undefined}
	<a {href} sveltekit:prefetch class={rootClasses}>
		<slot />
	</a>
{:else}
	<span class={rootClasses}>
		<slot />
	</span>
{/if}
