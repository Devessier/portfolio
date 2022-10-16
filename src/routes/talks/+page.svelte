<script lang="ts">
	import Page from '$lib/Page.svelte';
	import type { TalkPreview } from '$lib/types';
	import TalksPostsList from '$lib/TalksPostsList.svelte';

	const talks: TalkPreview[] = [
		{
			title: 'Temporal + XState',
			description:
				'How to use Temporal TypeScript SDK and XState to create declarative workflows with explicit behaviours.',
			datetime: '2021-11-23T17:00:00Z',
			tags: ['Temporal', 'XState'],
			link: 'https://www.youtube.com/watch?v=GpbOkDjpeYU&t=1615s'
		}
	];

	const title = 'Baptiste Devessier | Talks';
	const description = 'My talks about Web Development';
	const canonical = 'https://baptiste.devessier.fr/talks/';
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
	<TalksPostsList {talks}>
		<svelte:fragment slot="title">Talks</svelte:fragment>

		<svelte:fragment slot="empty">I have not started talking yet.</svelte:fragment>
	</TalksPostsList>
</Page>
