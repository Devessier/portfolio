<script lang="ts">
	import Page from '$lib/Page.svelte';
	import BlogPostsList from '$lib/BlogPostsList.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	$: articles = data.articles;

	const title = 'Baptiste Devessier | Writing';
	const description = 'My articles about Web Development';
	const canonical = 'https://baptiste.devessier.fr/writing/';
	const schemas = [];
	const facebook = [
		{
			name: 'og:url',
			content: canonical
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

<Page {title} {description} {canonical} {schemas} {facebook} {twitter}>
	<BlogPostsList {articles}>
		<svelte:fragment slot="title">Writing</svelte:fragment>

		<svelte:fragment slot="empty">I have not started writing yet.</svelte:fragment>
	</BlogPostsList>
</Page>
