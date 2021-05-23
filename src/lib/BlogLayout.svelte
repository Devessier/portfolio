<script>
	import Page from '$lib/Page/Page.svelte';
	import slugify from 'slugify';

	export let title;
	export let description;
	export let datetime;
	export let tags;

	$: console.log($$props);

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

	let formattedTags;
	$: formattedTags = tags.map((tag) => ({
		title: tag,
		slug: slugify(tag, {
			lower: true
		})
	}));
</script>

<Page class="pb-16" {title} {description} {canonical} {schemas} {facebook} {twitter}>
	<div class="max-w-prose text-lg mx-auto">
		<div class="flex items-center justify-center flex-wrap mb-2">
			{#each formattedTags as { title, slug }}
				<a
					href="/tags/{slug}"
					class="border-gray-300 mb-2 border text-gray-600 bg-white hover:bg-gray-50 transition-colors duration-100 ease-out font-normal text-xs px-3 py-1 rounded-2xl flex-shrink-0 mx-1"
				>
					{title}
				</a>
			{/each}
		</div>

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
