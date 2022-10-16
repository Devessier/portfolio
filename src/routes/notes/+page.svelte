<script lang="ts">
	import { formatDate } from '$lib/format-date';
	import Page from '$lib/Page.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	$: notes = data.notes;

	$: formattedNotes = notes.map(({ datetime, ...props }) => ({
		...props,
		datetime,
		formattedDatetime: formatDate(datetime)
	}));

	const title = 'Baptiste Devessier | Notes';
	const description = 'The things I discover daily about web development.';
	const canonical = 'https://baptiste.devessier.fr/notes/';
	const schemas = [];
	const facebook = [
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
</script>

<Page {title} {description} {canonical} {schemas} {facebook} {twitter}>
	<h1 class="text-5xl font-cursive">Notes</h1>

	<h2 class="mt-3 text-xl text-gray-500 sm:mt-4">{description}</h2>

	<ul class="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
		{#each formattedNotes as { title, slug, datetime, formattedDatetime }}
			<li>
				<a
					href="/note/{slug}/"
					class="inline-block w-full transition duration-300 ease-in-out hover:bg-zinc-50 p-6 rounded-2xl"
				>
					<h3>{title}</h3>

					<div class="text-red-700 mt-2">
						<time {datetime}>{formattedDatetime}</time>
					</div>
				</a>
			</li>
		{/each}
	</ul>
</Page>
