<script lang="ts">
	import Page from '$lib/Page.svelte';
	import type { TalkPreview } from '$lib/types';
	import TalksPostsList from '$lib/TalksPostsList.svelte';
	import Seo from '$lib/SEO.svelte';

	const talks: TalkPreview[] = [
		{
			title: 'Go beyond fully static websites with Astro',
			description:
				'Astro is no longer restricted to building fully static websites in the newest versions. You can use SSR, View Transitions, Cookies, and many more. I showcase that in my talk by taking the example of an e-commerce website.',
			datetime: '2023-09-26T17:00:00Z',
			tags: ['Astro', 'XState'],
			link: 'https://youtu.be/YG8bsKwf9ZU'
		},
		{
			title: 'What is XState?',
			description:
				'What XState is and how we can use it to improve the code of front-end applications. I refactored a to-do list application from plain React to XState, simplifying the code and making it easier to understand.',
			datetime: '2023-01-25T17:00:00Z',
			tags: ['XState', 'React'],
			link: 'https://youtu.be/uX-3RnsOzSc'
		},
		{
			title: 'Temporal + XState',
			description:
				'How to use Temporal TypeScript SDK and XState to create declarative workflows with explicit behaviours. I implement the workflow for an electronic signature with these tools.',
			datetime: '2021-11-23T17:00:00Z',
			tags: ['Temporal', 'XState'],
			link: 'https://www.youtube.com/watch?v=GpbOkDjpeYU&t=1615s'
		}
	];
</script>

<Seo
	title="Baptiste Devessier | Talks"
	description="The talks I gave in meetups."
	canonical="/talks/"
/>

<Page>
	<TalksPostsList {talks}>
		<svelte:fragment slot="title">Talks</svelte:fragment>

		<svelte:fragment slot="empty">I have not started talking yet.</svelte:fragment>
	</TalksPostsList>
</Page>
