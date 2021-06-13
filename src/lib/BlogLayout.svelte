<script>
	import Page from '$lib/Page/Page.svelte';
	import AppBadge from '$lib/AppBadge.svelte';
	import { formatDate } from '$lib/format-date';
	import slugify from 'slugify';
	import 'prism-themes/themes/prism-night-owl.css';

	export let title;
	export let description;
	export let datetime;
	export let tags;

	$: sluggifiedTitle = slugify(title, {
		lower: true
	});

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

	let formattedTags;
	$: formattedTags = tags.map((tag) => ({
		title: tag,
		slug: slugify(tag, {
			lower: true
		})
	}));

	$: formattedDate = formatDate(datetime);
</script>

<Page class="pb-16" {title} {description} {canonical} {schemas} {facebook} {twitter}>
	<div class="max-w-prose text-lg mx-auto">
		<div class="flex items-center justify-center flex-wrap mb-2">
			{#each formattedTags as { title, slug }}
				<AppBadge href="/tags/{slug}">
					{title}
				</AppBadge>
			{/each}
		</div>

		<time {datetime} class="block mb-4 text-red-700 text-center italic font-medium text-sm">
			{formattedDate}
		</time>

		<h1
			class="text-3xl text-center font-cursive leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
		>
			{title}
		</h1>

		<p class="mt-8 text-xl text-gray-500 leading-8">{description}</p>
	</div>

	<div class="mt-6 prose prose-red prose-lg text-gray-500 mx-auto">
		<slot />
	</div>
</Page>
