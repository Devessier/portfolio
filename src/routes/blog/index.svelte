<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	interface ArticlePreview {
		title: string;
		date: string;
		formattedDate: string;
		slug: string;
	}

	export const load: Load = async function load({ page: { params } }) {
		console.log(params);

		const availableTopics: string[] = ['Front-end', 'Back-end', 'XState', 'Temporal'];

		const articles: ArticlePreview[] = [
			{
				title: 'Generate and put in context or compute from context externally XState',
				slug: slugify('Generate and put in context or compute from context externally XState', {
					lower: true
				}),
				date: '2021-05-22T15:29:15.789Z',
				formattedDate: new Intl.DateTimeFormat('en-US', {
					day: '2-digit',
					month: 'long',
					year: 'numeric'
				}).format(new Date('2021-05-22T15:29:15.789Z'))
			}
		];

		return {
			props: {
				availableTopics,
				articles
			}
		};
	};
</script>

<script lang="ts">
	import Page from '$lib/Page/Page.svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import slugify from 'slugify';
	import urlcat from 'urlcat';

	export let availableTopics: string[];
	export let articles: ArticlePreview[];

	const title = 'Baptiste Devessier - Writing';
	const description = 'Développeur Web Full Stack sur Paris';
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

	interface Topic {
		title: string;
		slug: string;
		isActive: boolean;
	}

	$: currentUrl = $page.path;
	$: currentFilters = $page.query.get('q')?.split(',') ?? [];

	let topics: Topic[];
	$: topics = availableTopics.map((topic) => {
		const sluggifiedTopic = slugify(topic, {
			lower: true
		});

		return {
			title: topic,
			slug: sluggifiedTopic,
			isActive: currentFilters.includes(sluggifiedTopic)
		};
	});

	async function handleFilterClick(slug: string) {
		const isFilterActive = currentFilters.includes(slug);
		const newQueryParams = isFilterActive
			? currentFilters.filter((activeFilter) => activeFilter !== slug)
			: [...currentFilters, slug];

		if (newQueryParams.length === 0) {
			await goto(currentUrl, {
				replaceState: true
			});

			return;
		}

		await goto(
			urlcat(currentUrl, {
				q: newQueryParams
			}),
			{
				replaceState: true
			}
		);
	}
</script>

<Page class="pb-6" {title} {description} {canonical} {schemas} {facebook} {twitter}>
	<h1 class="text-5xl font-cursive">Writing</h1>

	<div class="pb-4 pt-1 mt-8 lg:mt-12 flex items-center overflow-x-auto snap snap-x snap-mandatory">
		{#each topics as { title, slug, isActive }, index}
			<button
				class="{isActive
					? 'bg-red-50 hover:bg-red-100 text-red-700 border border-red-500'
					: 'border-gray-300 border text-gray-800 bg-gray-50 hover:bg-gray-100'} transition-colors duration-100 ease-out font-medium text-sm px-3 py-1 rounded-2xl flex-shrink-0 {index ===
				0
					? 'ml-0'
					: 'ml-2 lg:ml-3'} snap-start"
				on:click={() => handleFilterClick(slug)}
			>
				{title}
			</button>
		{/each}
	</div>

	<div class="mt-8">
		{#if articles.length > 0}
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
				{#each articles as { title, slug, date, formattedDate }}
					<a href={`/blog/${slug}`}>
						<article class="">
							<time datetime={date}>{formattedDate}</time>

							{title}
						</article>
					</a>
				{/each}
			</div>
		{:else}
			<div class="flex flex-col items-center mt-6">
				<p class="text-xl font-medium">I have not written about this topic yet.</p>

				<a href="/blog" class="mt-4">Go to writing principal page</a>
			</div>
		{/if}
	</div>
</Page>
