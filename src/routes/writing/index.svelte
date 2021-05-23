<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import type { WritingPreview } from '$lib/types';

	export const load: Load = async ({ fetch }) => {
		const response = await fetch('/writing.json');

		if (response.ok === false) {
			return {
				error: new Error('error occured while getting writings list'),
				status: 500
			};
		}

		const { articles } = await response.json();

		return {
			props: {
				articles: articles as WritingPreview[]
			}
		};
	};
</script>

<script lang="ts">
	import Page from '$lib/Page/Page.svelte';
	import BlogPostsList from '$lib/BlogPostsList.svelte';
	import type { Tag } from '$lib/types';

	interface ArticlePreview {
		title: string;
		description: string;
		datetime: string;
		formattedDatetime: string;
		slug: string;
		tags: Tag[];
	}

	export let articles: WritingPreview[];

	const title = 'Baptiste Devessier - Writing';
	// TODO: to be defined
	const description = 'Développeur Web Full Stack sur Paris';
	// TODO: to be defined
	const canonical = 'https://baptiste.devessier.fr/';
	const schemas = [];
	const facebook = [
		{
			name: 'og:url',
			content: 'https://baptiste.devessier.fr/'
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
		<svelte:fragment slot="title">Writing</svelte:fragment>

		<svelte:fragment slot="empty">I have not begun writing yet.</svelte:fragment>
	</BlogPostsList>
</Page>
