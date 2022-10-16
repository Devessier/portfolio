<script lang="ts">
	import Page from '$lib/Page.svelte';
	import '../../shiki.css';
	import { formatDate } from '$lib/format-date';
	import LinkWithAnimatedArrow from '$lib/LinkWithAnimatedArrow.svelte';
	import slugify from 'slugify';
	import type { PageData } from './$types';

	export let data: PageData;
	$: title = data.title;
	$: datetime = data.datetime;
	$: Content = data.content;

	$: sluggifiedTitle = slugify(title, {
		lower: true,
		strict: true
	});
	$: formattedDatetime = formatDate(datetime);

	$: pageTitle = title;
	const description = '';
	$: canonical = `https://baptiste.devessier.fr/note/${sluggifiedTitle}/`;
	const schemas = [];
	$: facebook = [
		{
			name: 'og:url',
			content: canonical
		},
		{
			name: 'og:title',
			content: pageTitle
		},
		{
			name: 'og:description',
			content: description
		}
	];
	const twitter = [];
</script>

<Page title={pageTitle} {description} {canonical} {schemas} {facebook} {twitter}>
	<div class="max-w-prose text-lg mx-auto w-full">
		<time {datetime} class="block mb-4 text-red-700 text-center italic font-medium text-sm">
			{formattedDatetime}
		</time>

		<h1
			class="text-3xl text-center font-cursive leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
		>
			{title}
		</h1>
	</div>

	<div class="mt-6 prose prose-red prose-lg text-gray-500 mx-auto break-words">
		<svelte:component this={Content} />
	</div>

	<div class="max-w-prose text-lg mx-auto mt-12 w-full">
		<div class="text-base">
			<LinkWithAnimatedArrow href="/notes/">Go back to all notes</LinkWithAnimatedArrow>
		</div>
	</div>
</Page>
