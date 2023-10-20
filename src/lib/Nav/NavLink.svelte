<script lang="ts">
	export let href: string;
	export let external = false;
	export let active = false;
</script>

<a
	{href}
	rel={external === true ? 'external' : undefined}
	target={external === true ? '_blank' : undefined}
	on:click
	class="relative py-1 overflow-x-hidden block tracking-widest font-medium
	after:absolute after:w-full after:h-1 after:inset-x-0 after:bottom-0 after:transition
	after:duration-300 after:transform after:ease-in-out
	{active === true
		? 'after:bg-red-500 translate-x-0'
		: 'hover:after:bg-red-400 after:-translate-x-full hover:after:translate-x-0'}"
>
	<slot />
</a>
