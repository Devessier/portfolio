<script lang="ts">
	import '../../app.postcss';
	import Nav from '$lib/Nav/Nav.svelte';
	import AppFooter from '$lib/AppFooter.svelte';
	import { onMount } from 'svelte';
	import TheNewsletter from '$lib/TheNewsletter.svelte';

	/**
	 * Previously we were using a Service Worker.
	 * Today we don't want to focus on this part so we need to unregister it,
	 * otherwise, service worker will keep working.
	 */
	onMount(() => {
		// From: https://stackoverflow.com/a/33705250
		if ('serviceWorker' in navigator) {
			navigator.serviceWorker.getRegistrations().then((registrations) => {
				for (const registration of registrations) {
					registration.unregister();
				}
			});
		}
	});
</script>

<div class="flex flex-col min-h-screen px-6 lg:px-16 max-w-7xl mx-auto">
	<Nav />

	<main class="relative flex flex-col flex-grow h-full">
		<slot />
	</main>

	<TheNewsletter />

	<AppFooter />
</div>
