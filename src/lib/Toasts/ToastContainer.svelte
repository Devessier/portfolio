<script>
	import { toasts } from '$lib/stores';
	import Notification from './Toast.svelte';

	function dismiss(id) {
		console.log('dismiss');

		toasts.dismiss(id);
	}
</script>

<div class="fixed inset-x-0 md:left-auto md:right-0 bottom-0">
	{#each $toasts as { id, title, text, buttons } (id)}
		<Notification {title} {text} {buttons} on:dismiss={() => dismiss(id)} />
	{/each}
</div>
