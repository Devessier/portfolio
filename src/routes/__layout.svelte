<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { freshNavigation, toasts } from '$lib/stores';
	import { IS_PRODUCTION } from '$lib/env';
	import Nav from '$lib/Nav/Nav.svelte';
	import ToastContainer from '$lib/Toasts/ToastContainer.svelte';

	$: segment = $page.path;

	$: $page,
		freshNavigation.update((value) => {
			if (value === undefined) return true;

			return false;
		});

	async function setupServiceWorker() {
		if ('serviceWorker' in navigator) {
			const { Workbox } = await import('workbox-window');

			const wb = new Workbox('/service-worker.js');

			wb.addEventListener('installed', (event) => {
				if (event.isUpdate) {
					toasts.trigger({
						title: 'Mise à jour',
						text:
							"Une nouvelle version est disponible. Rechargez la page pour qu'elle soit prise en compte.",
						buttons: [
							{
								text: 'Recharger',
								action: () => window.location.reload()
							}
						],
						timeout: 0
					});
				}
			});

			wb.register();
		}
	}

	function load() {
		if (IS_PRODUCTION) {
			setupServiceWorker();
		}
	}

	onMount(load);
</script>

<Nav {segment} />

<main class="relative flex flex-col flex-grow h-full">
	<slot />
</main>

<ToastContainer />
