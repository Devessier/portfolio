<script lang="ts">
	export let href: string;
	export let rel: string | undefined = undefined;
	export let target: string | undefined = undefined;
</script>

<a
	{href}
	{rel}
	{target}
	class="group text-red-700 hover:text-red-600 transition-colors duration-300 font-medium"
>
	<slot />

	<span class="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
</a>
