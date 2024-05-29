<script lang="ts">
	import Page from '$lib/Page.svelte';
	import { GithubIcon, MailIcon, TildIcon, TwitterIcon, VideoCameraIcon } from '$lib/Icons';
	import BlogPostsListBase from '$lib/BlogPostsListBase.svelte';
	import LinkWithAnimatedArrow from '$lib/LinkWithAnimatedArrow.svelte';
	import type { PageData } from './$types';
	import YouTubePlayer from '$lib/YouTubePlayer.svelte';

	export let data: PageData;
	$: latestArticles = data.latestArticles;

	const descriptionText =
		"I'm Baptiste Devessier, a full stack web and XState freelance consultant. When I'm not consulting on freelance projects, you will find me recording video tutorials, writing articles, and working on my own side projects.";

	const title = 'Baptiste Devessier | Full stack web and XState freelance consultant';
	const description = descriptionText;
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

	const youtubeChannelUrl = 'https://youtube.com/@baptistedevessier';
	const communicationMeans = [
		{
			href: 'https://github.com/Devessier',
			external: true,
			title: 'My GitHub profile',
			icon: GithubIcon
		},
		{
			href: 'https://twitter.com/BDevessier',
			external: true,
			title: 'My Twitter account',
			icon: TwitterIcon
		},
		{
			href: youtubeChannelUrl,
			external: true,
			title: 'My YouTube channel',
			icon: VideoCameraIcon
		},
		{
			href: '/contact/',
			external: false,
			title: 'Contact me',
			icon: MailIcon
		}
	];
</script>

<Page {title} {description} {canonical} {schemas} {facebook} {twitter}>
	<div>
		<h1 class="text-5xl font-bold lowercase flex items-center flex-wrap font-cursive">
			Baptiste
			<TildIcon
				class="w-5 h-4 relative"
				preserveAspectRatio="none"
				style="top: 2px"
				aria-hidden="true"
			/>
			Devessier
		</h1>

		<div class="mt-6 prose">
			<p>{descriptionText}</p>
		</div>

		<ul class="flex items-center mt-8 gap-6">
			{#each communicationMeans as { href, external, title, icon }}
				<li>
					<a
						{href}
						{title}
						rel={external === true ? 'external' : undefined}
						class="inline-block -m-1 p-1 text-zinc-500 hover:text-zinc-600 transition-colors"
					>
						<span class="sr-only">{title}</span>

						<svelte:component this={icon} class="w-6 h-6 stroke-current" />
					</a>
				</li>
			{/each}
		</ul>
	</div>

	<div class="mt-24 max-w-xl">
		<p class="text-3xl font-cursive">Last video</p>

		<p class="mr-4 text-gray-600 mt-2">
			I'm currently focusing on making videos on YouTube. Check out my latest video and my channel.
		</p>

		<div class="mt-10">
			<YouTubePlayer videoId={data.lastVideo.id} thumbnailQuality="high" />
		</div>

		<div class="mt-10">
			<LinkWithAnimatedArrow rel="external" target="_blank" href={youtubeChannelUrl}>
				See all videos
			</LinkWithAnimatedArrow>
		</div>
	</div>

	<div class="mt-24 md:mt-32">
		<p class="text-3xl font-cursive">Latest articles</p>

		<div class="mt-10">
			<BlogPostsListBase articles={latestArticles} />
		</div>

		<div class="mt-10">
			<LinkWithAnimatedArrow href="/writing/">See all articles</LinkWithAnimatedArrow>
		</div>
	</div>
</Page>
