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

{#if articles.length > 0}
	<ul class="grid grid-cols-1 gap-y-16">
		{#each formattedArticles as { title, description, external, slug, url, datetime, formattedDatetime, tags }}
			<li class="flex flex-col items-start max-w-prose">
				<time {datetime} class="text-red-700 italic font-medium text-sm">
					{formattedDatetime}
				</time>

				<h2 class="text-2xl leading-8 font-semibold hover:underline mt-2">
					<a
						href={external === true ? url : `/writing/${slug}/`}
						rel={external === true ? 'external' : undefined}
						target={external === true ? '_blank' : undefined}
						class="mt-2"
					>
						{title}
					</a>
				</h2>

				{#if typeof description === 'string'}
					<p class="mt-4 text-gray-600 leading-7">
						{description}
					</p>
				{/if}

				<div class="flex mt-4 gap-2 flex-wrap">
					{#each tags as { title, slug }}
						<AppBadge href="/tags/{slug}/">
							{title}
						</AppBadge>
					{/each}
				</div>
			</li>
		{/each}
	</ul>
{:else}
	<slot name="empty" />
{/if}
