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
	import { formatDate } from '$lib/format-date';
	import type { Tag } from '$lib/types';
	import slugify from 'slugify';

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

	let formattedArticles: ArticlePreview[];
	$: formattedArticles = articles.map((article) => ({
		...article,
		formattedDatetime: formatDate(article.datetime),
		tags: article.tags.map((tag) => ({
			title: tag,
			slug: slugify(tag, {
				lower: true
			})
		}))
	}));
</script>

<Page class="pb-16" {title} {description} {canonical} {schemas} {facebook} {twitter}>
	<h1 class="text-5xl font-cursive">Writing</h1>

	<div class="mt-12">
		{#if articles.length > 0}
			<ul class="grid grid-cols-1 gap-y-16">
				{#each formattedArticles as { title, description, slug, datetime, formattedDatetime, tags }}
					<li class="flex flex-col max-w-prose">
						<time {datetime} class="text-red-700 italic font-medium text-sm">
							{formattedDatetime}
						</time>

						<a href={`/writing/${slug}`} class="mt-2">
							<h2 class="text-2xl leading-8 font-semibold hover:underline">
								{title}
							</h2>
						</a>

						<p class="mt-4 text-gray-600 leading-7">
							{description}
						</p>

						<div class="mt-4">
							{#each tags as { title, slug }, index}
								<a
									href="/tags/{slug}"
									class="border-gray-300 border text-gray-600 bg-white hover:bg-gray-50 transition-colors duration-100 ease-out font-normal text-xs px-3 py-1 rounded-2xl flex-shrink-0 {index ===
									0
										? 'ml-0'
										: 'ml-2'}"
								>
									{title}
								</a>
							{/each}
						</div>
					</li>
				{/each}
			</ul>
		{:else}
			<div class="flex flex-col items-center mt-6">
				<p class="text-xl font-medium">I have not begun writing yet.</p>
			</div>
		{/if}
	</div>
</Page>
