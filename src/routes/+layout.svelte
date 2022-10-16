<script lang="ts">
	import '../app.postcss';
	import Nav from '$lib/Nav/Nav.svelte';
	import AppFooter from '$lib/AppFooter.svelte';
</script>

<Nav />

<main class="relative flex flex-col flex-grow h-full">
	<slot />
</main>

<AppFooter />
