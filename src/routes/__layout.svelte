<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import { freshNavigation } from '$lib/stores';
	import Nav from '$lib/Nav/Nav.svelte';
	import ToastContainer from '$lib/Toasts/ToastContainer.svelte';

	$: segment = $page.path;

	$: $page,
		freshNavigation.update((value) => {
			if (value === undefined) return true;

			return false;
		});
</script>

<Nav {segment} />

<main class="relative flex flex-col flex-grow h-full">
	<slot />
</main>

<ToastContainer />
