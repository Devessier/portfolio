<script lang="ts">
	export let href: string;

	let className: string | undefined;
	export { className as class };
</script>

<a
	{href}
	class="border-gray-300 mb-2 border text-gray-600 bg-white hover:bg-gray-50 transition-colors duration-100 ease-out font-normal text-xs px-3 py-1 rounded-2xl flex-shrink-0 mx-1 {className}"
>
	<slot />
</a>
