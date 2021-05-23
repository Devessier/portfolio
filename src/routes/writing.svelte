<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	interface Tag {
		title: string;
		slug: string;
	}

	interface ArticlePreview {
		title: string;
		description: string;
		date: string;
		formattedDate: string;
		slug: string;
		tags: Tag[];
	}

	export const load: Load = async function load({ page: { params } }) {
		const articles: ArticlePreview[] = [
			{
				title: 'Generate and put in context or compute from context externally XState',
				description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. In delectus, aliquid beatae
							officia placeat iusto sint cumque corporis deserunt magnam ad voluptatibus, culpa
							obcaecati accusamus, quidem recusandae. Qui, nulla error!`,
				slug: slugify('Generate and put in context or compute from context externally XState', {
					lower: true
				}),
				date: '2021-05-22T15:29:15.789Z',
				formattedDate: new Intl.DateTimeFormat('en-US', {
					day: '2-digit',
					month: 'long',
					year: 'numeric'
				}).format(new Date('2021-05-22T15:29:15.789Z')),
				tags: [
					{
						title: 'Front-end',
						slug: 'front-end'
					},
					{
						title: 'Temporal',
						slug: 'temporal'
					},
					{
						title: 'Testing',
						slug: 'testing'
					}
				]
			},
			{
				title: 'Generate and put in context or compute from context externally XState',
				description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. In delectus, aliquid beatae
							officia placeat iusto sint cumque corporis deserunt magnam ad voluptatibus, culpa
							obcaecati accusamus, quidem recusandae. Qui, nulla error!`,
				slug: slugify('Generate and put in context or compute from context externally XState', {
					lower: true
				}),
				date: '2021-05-22T15:29:15.789Z',
				formattedDate: new Intl.DateTimeFormat('en-US', {
					day: '2-digit',
					month: 'long',
					year: 'numeric'
				}).format(new Date('2021-05-22T15:29:15.789Z')),
				tags: [
					{
						title: 'Front-end',
						slug: 'front-end'
					},
					{
						title: 'Temporal',
						slug: 'temporal'
					},
					{
						title: 'Testing',
						slug: 'testing'
					}
				]
			},
			{
				title: 'Generate and put in context or compute from context externally XState',
				description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. In delectus, aliquid beatae
							officia placeat iusto sint cumque corporis deserunt magnam ad voluptatibus, culpa
							obcaecati accusamus, quidem recusandae. Qui, nulla error!`,
				slug: slugify('Generate and put in context or compute from context externally XState', {
					lower: true
				}),
				date: '2021-05-22T15:29:15.789Z',
				formattedDate: new Intl.DateTimeFormat('en-US', {
					day: '2-digit',
					month: 'long',
					year: 'numeric'
				}).format(new Date('2021-05-22T15:29:15.789Z')),
				tags: [
					{
						title: 'Front-end',
						slug: 'front-end'
					},
					{
						title: 'Temporal',
						slug: 'temporal'
					},
					{
						title: 'Testing',
						slug: 'testing'
					}
				]
			}
		];

		return {
			props: {
				articles
			}
		};
	};
</script>

<script lang="ts">
	import Page from '$lib/Page/Page.svelte';
	import { page } from '$app/stores';
	import slugify from 'slugify';

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
</script>

<Page class="pb-16" {title} {description} {canonical} {schemas} {facebook} {twitter}>
	<h1 class="text-5xl font-cursive">Writing</h1>

	<div class="mt-12">
		{#if articles.length > 0}
			<ul class="grid grid-cols-1 gap-y-16">
				{#each articles as { title, description, slug, date, formattedDate, tags }}
					<li class="flex flex-col max-w-[70ch]">
						<time datetime={date} class="text-red-700 italic font-medium text-sm">
							{formattedDate}
						</time>

						<a href={`/${slug}`} class="mt-2">
							<h2 class="text-2xl leading-8 font-semibold hover:underline">
								{title}
							</h2>
						</a>

						<p class="mt-6 text-gray-600 leading-7">
							{description}
						</p>

						<div class="mt-2">
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
