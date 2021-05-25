<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import type { WritingPreview } from '$lib/types';

	export const load: Load = async ({
		page: {
			params: { tag }
		},
		fetch
	}) => {
		const response = await fetch(`/writing/${tag}.json`);

		if (response.ok === false) {
			return {
				error: new Error('error occured while getting writings list'),
				status: 500
			};
		}

		const { prettyTagName, articles } = await response.json();

		return {
			props: {
				tag,
				prettyTagName,
				articles: articles as WritingPreview[]
			}
		};
	};
</script>

<script lang="ts">
	import BlogPostsList from '$lib/BlogPostsList.svelte';
	import Page from '$lib/Page/Page.svelte';

	export let tag: string;
	export let prettyTagName: string;
	export let articles: WritingPreview[];

	$: title = `Baptiste Devessier - Writing about ${prettyTagName}`;
	const description = 'Développeur Web Full Stack sur Paris';
	$: canonical = `https://baptiste.devessier.fr/tags/${tag}/`;
	const schemas = [];
	$: facebook = [
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

<Page class="pb-16" {title} {description} {canonical} {schemas} {facebook} {twitter}>
	<BlogPostsList {articles}>
		<svelte:fragment slot="title">
			Writing about {prettyTagName ?? tag}
		</svelte:fragment>

		<svelte:fragment slot="empty">I have not started writing about this topic yet.</svelte:fragment>
	</BlogPostsList>
</Page>
