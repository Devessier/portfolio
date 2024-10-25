<script lang="ts">
	import Page from '$lib/Page.svelte';
	import BlogPostsList from '$lib/BlogPostsList.svelte';
	import type { PageData } from './$types';
	import Seo from '$lib/SEO.svelte';

	export let data: PageData;
	$: articles = data.articles;
</script>

<Seo
	title="Baptiste Devessier | Writing"
	description="My articles about Web Development."
	canonical="/writing/"
/>

<Page>
	<BlogPostsList {articles}>
		<svelte:fragment slot="title">Writing</svelte:fragment>

		<svelte:fragment slot="empty">I have not started writing yet.</svelte:fragment>
	</BlogPostsList>
</Page>
