<script lang="ts">
	import Page from '$lib/Page.svelte';
	import AppBadge from '$lib/AppBadge.svelte';
	import { formatDate } from '$lib/format-date';
	import { slugify } from '$lib/slugify';
	import type { PageData } from './$types';
	import '../../shiki.css';

	export let data: PageData;
	$: title = data.title;
	$: description = data.description;
	$: datetime = data.datetime;
	$: last_updated_datetime = data.last_updated_datetime;
	$: tags = data.tags;
	$: Content = data.content;

	$: sluggifiedTitle = slugify(title);

	$: canonical = `https://baptiste.devessier.fr/writing/${sluggifiedTitle}/`;
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

	$: formattedTags = tags.map((tag) => ({
		title: tag,
		slug: slugify(tag)
	}));

	$: formattedDate = formatDate(datetime);
	$: formattedLastUpdatedDatetime =
		last_updated_datetime === undefined ? undefined : formatDate(last_updated_datetime);
</script>

<Page {title} {description} {canonical} {schemas} {facebook} {twitter}>
	<div class="max-w-prose text-lg mx-auto">
		<div class="flex items-center justify-center flex-wrap mb-2">
			{#each formattedTags as { title, slug }}
				<AppBadge href="/tags/{slug}/">
					{title}
				</AppBadge>
			{/each}
		</div>

		<div class="mb-4 text-center italic text-sm flex flex-col">
			<time {datetime} class="text-red-700 font-medium mb-1">
				{formattedDate}
			</time>

			{#if last_updated_datetime !== undefined}
				<p class="text-gray-500">
					Last modified on <time datetime={last_updated_datetime}>
						{formattedLastUpdatedDatetime}
					</time>
				</p>
			{/if}
		</div>

		<h1
			class="text-3xl text-center font-cursive leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
		>
			{title}
		</h1>

		<p class="mt-8 text-xl text-gray-500 leading-8">{description}</p>
	</div>

	<div class="mt-6 prose prose-red prose-lg text-gray-500 mx-auto break-words">
		<svelte:component this={Content} />
	</div>
</Page>
