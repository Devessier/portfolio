<script lang="ts">
	import AppBadge from '$lib/AppBadge.svelte';
	import { formatDate } from '$lib/format-date';
	import type { WritingPreview, ArticlePreview } from '$lib/types';
	import { slugify } from '$lib/slugify';

	export let articles: WritingPreview[];

	let formattedArticles: ArticlePreview[];
	$: formattedArticles = articles.map((article) => ({
		...article,
		formattedDatetime: formatDate(article.datetime),
		tags: article.tags.map((tag) => ({
			title: tag,
			slug: slugify(tag)
		}))
	}));
</script>

<h1 class="text-5xl font-cursive">
	<slot name="title" />
</h1>

<div class="mt-12">
	{#if articles.length > 0}
		<ul class="grid grid-cols-1 gap-y-16">
			{#each formattedArticles as { title, description, slug, datetime, formattedDatetime, tags }}
				<li class="flex flex-col max-w-prose">
					<time {datetime} class="text-red-700 italic font-medium text-sm">
						{formattedDatetime}
					</time>

					<a href={`/writing/${slug}`} sveltekit:prefetch class="mt-2">
						<h2 class="text-2xl leading-8 font-semibold hover:underline">
							{title}
						</h2>
					</a>

					<p class="mt-4 text-gray-600 leading-7">
						{description}
					</p>

					<div class="mt-4">
						{#each tags as { title, slug }, index}
							<AppBadge href="/tags/{slug}" class={index === 0 ? 'ml-0' : 'ml-2'}>
								{title}
							</AppBadge>
						{/each}
					</div>
				</li>
			{/each}
		</ul>
	{:else}
		<div class="flex flex-col items-center mt-6">
			<p class="text-xl font-medium">
				<slot name="empty" />
			</p>
		</div>
	{/if}
</div>
