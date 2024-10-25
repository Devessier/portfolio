<script lang="ts">
	import Page from '$lib/Page.svelte';
	import AppBadge from '$lib/AppBadge.svelte';
	import { formatDate } from '$lib/format-date';
	import { slugify } from '$lib/slugify';
	import type { PageData } from './$types';
	import '../../../shiki.css';
	import Seo from '$lib/SEO.svelte';

	export let data: PageData;
	$: writing = data;
	$: Content = writing.content;

	$: canonical = `/writing/${writing.slug}/`;

	$: formattedTags = writing.tags.map((tag) => ({
		title: tag,
		slug: slugify(tag)
	}));

	$: formattedDate = formatDate(writing.datetime);
	$: formattedLastUpdatedDatetime =
		writing.last_updated_datetime === undefined
			? undefined
			: formatDate(writing.last_updated_datetime);
</script>

<Seo title={writing.title} description={writing.description} {canonical} />

<Page class="space-y-12">
	<div class="max-w-5xl text-lg mx-auto">
		<div class="flex items-center justify-center flex-wrap mb-4 gap-2">
			{#each formattedTags as { title, slug }}
				<AppBadge href="/tags/{slug}/">
					{title}
				</AppBadge>
			{/each}
		</div>

		<h1
			class="text-4xl text-center text-balance font-extrabold tracking-tight text-gray-900 md:text-5xl md:leading-tight mb-4"
		>
			{writing.title}
		</h1>

		<div class="text-center italic text-sm flex flex-col gap-y-1">
			<p class="text-red-700 font-medium">
				Published on

				<time datetime={writing.datetime}>
					{formattedDate}
				</time>
			</p>

			{#if writing.last_updated_datetime !== undefined}
				<p class="text-gray-500">
					Last modified on <time datetime={writing.last_updated_datetime}>
						{formattedLastUpdatedDatetime}
					</time>
				</p>
			{/if}
		</div>

		{#if writing.description}
			<p class="text-pretty text-gray-600 text-xl leading-relaxed mt-6">
				{writing.description}
			</p>
		{/if}
	</div>

	<hr class="max-w-md w-full mx-auto" />

	<div class="prose prose-red prose-lg break-words mx-auto">
		<svelte:component this={Content} />
	</div>
</Page>
