<script lang="ts">
	import Page from '$lib/Page/Page.svelte';
	import { LogoIcon } from '$lib/Icons';

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
		link: string;
		isActive: boolean;
	}

	const topics: Topic[] = [
		{
			title: 'Everything',
			link: '/blog',
			isActive: true
		},
		{
			title: 'Front-end',
			link: '/blog/topic/front-end',
			isActive: false
		},
		{
			title: 'Back-end',
			link: '/blog/topic/back-end',
			isActive: false
		},
		{
			title: 'XState',
			link: '/blog/topic/xstate',
			isActive: false
		},
		{
			title: 'Temporal',
			link: '/blog/topic/temporal',
			isActive: false
		}
	];

	const articles = [];
</script>

<Page class="pb-6" {title} {description} {canonical} {schemas} {facebook} {twitter}>
	<h1 class="text-5xl font-cursive">Writing</h1>

	<div class="pb-4 mt-8 lg:mt-12 flex items-center overflow-x-auto snap snap-x snap-mandatory">
		{#each topics as { title, link, isActive }, index}
			<a
				href={link}
				class="{isActive
					? 'bg-red-50 hover:bg-red-100 text-red-700 border border-red-500'
					: 'border-gray-300 border text-gray-800 bg-gray-50 hover:bg-gray-100'} transition-colors duration-100 ease-out font-medium text-sm px-3 py-1 rounded-2xl flex-shrink-0 {index ===
				0
					? 'ml-0'
					: 'ml-2 lg:ml-3'} snap-start"
			>
				{title}
			</a>
		{/each}
	</div>

	<div>
		{#each articles as article}
			<article>
				{article}
			</article>
		{:else}
			<div class="flex flex-col items-center mt-6">
				<p class="text-xl font-medium">I have not written about this topic yet.</p>

				<a href="/blog" class="mt-4">Go to writing principal page</a>
			</div>
		{/each}
	</div>
</Page>
