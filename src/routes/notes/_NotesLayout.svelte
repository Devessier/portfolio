<script lang="ts">
	import Page from '$lib/Page/Page.svelte';
	import '../../shiki.css';

	const title = 'Baptiste Devessier | Notes';
	const description = 'Notes about what I discover daily';
	const canonical = 'https://baptiste.devessier.fr/notes/';
	const schemas = [];
	const facebook = [
		{
			name: 'og:url',
			content: 'https://baptiste.devessier.fr/notes/'
		},
		{
			name: 'og:title',
			content: title
		},
		{
			name: 'og:description',
			content: description
		}
	];
	const twitter = [];
</script>

<Page class="pb-16" {title} {description} {canonical} {schemas} {facebook} {twitter}>
	<div class="max-w-prose text-lg mx-auto">
		<h1 class="text-5xl font-cursive">Notes</h1>

		<p class="mt-3 text-xl text-gray-500 sm:mt-4">Things I discover daily and that amaze me</p>
	</div>

	<div class="mt-10 prose prose-red prose-h2:mt-2 prose-lg text-gray-500 mx-auto break-words">
		<slot />
	</div>
</Page>
