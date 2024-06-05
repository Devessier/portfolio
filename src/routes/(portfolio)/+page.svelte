<script lang="ts">
	import Page from '$lib/Page.svelte';
	import { TildIcon } from '$lib/Icons';
	import BlogPostsListBase from '$lib/BlogPostsListBase.svelte';
	import LinkWithAnimatedArrow from '$lib/LinkWithAnimatedArrow.svelte';
	import type { PageData } from './$types';
	import YouTubePlayer from '$lib/YouTubePlayer.svelte';

	export let data: PageData;
	$: latestArticles = data.latestArticles;

	const title = 'Baptiste Devessier | Full stack web and XState freelance consultant';
	const description =
		'Baptiste Devessier is a full stack web and XState freelance consultant. He also publishes screencasts on YouTube and writes articles.';
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

		<div class="mt-6 prose prose-red">
			<p>
				I'm Baptiste Devessier, a full stack web and XState freelance consultant. When I'm not
				consulting on freelance projects, you will find me recording screencasts for YouTube,
				writing articles, and working on my side projects.
			</p>

			<p>You can find me on many platforms:</p>

			<ul>
				<li>
					I post my thoughts and the progress of my projects on <a
						href="https://twitter.com/BDevessier"
						rel="external"
						target="_blank">Twitter</a
					>
				</li>
				<li>
					The code of my projects is open-source on <a
						href="https://github.com/Devessier"
						rel="external"
						target="_blank">GitHub</a
					>
				</li>
				<li>
					My screencasts live on <a href={youtubeChannelUrl} rel="external" target="_blank"
						>YouTube</a
					>
				</li>
				<li>
					I co-host <a href="https://parlons-dev.com/" target="_blank" rel="external">Parlons Dev</a
					>, a French podcast about web development
				</li>
				<li>
					And I try to be more active on <a
						href="https://www.linkedin.com/in/baptiste-devessier/"
						target="_blank"
						rel="external">LinkedIn</a
					>
				</li>
			</ul>

			<p>
				Are you looking for a web developer who loves building complex UIs? <a href="/contact/"
					>Contact me.</a
				>
			</p>
		</div>
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
