<script>
	import SEO from './SEO.svelte';

	export let title;
	export let description;
	export let canonical;
	export let schemas = [];
	let className = '';
	export { className as class };
	export let facebook;
	export let twitter;
</script>

<SEO {title} {description} {canonical} {schemas} {facebook} {twitter} />

<div class="w-full mt-2 lg:mt-10 pb-24 {className}">
	<slot />
</div>
