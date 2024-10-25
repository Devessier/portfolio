<script lang="ts">
	import BlogPostsList from '$lib/BlogPostsList.svelte';
	import Page from '$lib/Page.svelte';
	import Seo from '$lib/SEO.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	$: tag = data.tag;
	$: prettyTagName = data.prettyTagName;
	$: articles = data.articles;

	$: formattedTag = prettyTagName ?? tag;
	$: title = `Baptiste Devessier | Writing about ${formattedTag}`;
	$: description = `My articles about ${formattedTag}`;
	$: canonical = `/tags/${tag}/`;
</script>

<Seo {title} {description} {canonical} />

<Page>
	<BlogPostsList {articles}>
		<svelte:fragment slot="title">
			Writing about {formattedTag}
		</svelte:fragment>

		<svelte:fragment slot="empty">I have not started writing about this topic yet.</svelte:fragment>
	</BlogPostsList>
</Page>
