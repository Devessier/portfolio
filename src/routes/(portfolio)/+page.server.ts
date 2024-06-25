import RssParser from 'rss-parser';
import type { WritingPreview, YoutubeVideo } from '$lib/types';
import type { PageServerLoad } from './$types';
import { getBlogPosts } from './writing/_api';

interface GetResult {
	latestArticles: WritingPreview[];
	lastVideo: YoutubeVideo;
}

const rssParser = new RssParser();

export const load: PageServerLoad<GetResult> = async () => {
	const blogPosts = await getBlogPosts();
	const latestArticles = blogPosts.slice(0, 3);

	const youtubeChannelRssFeed = await rssParser.parseURL(
		'https://www.youtube.com/feeds/videos.xml?channel_id=UCHkj5xmIUA357RS944tY5Tg'
	);

	const lastVideo = youtubeChannelRssFeed.items[0];
	const lastVideoUrl = new URL(lastVideo.link!);
	const lastVideoId = lastVideoUrl.searchParams.get('v');
	const lastVideoTitle = lastVideo.title;

	if (lastVideoId === null) {
		throw new Error('Expected to get the id of the video with the `v` query parameter.');
	}

	if (lastVideoTitle === undefined) {
		throw new Error('Expected the title of the video to be defined');
	}

	return {
		latestArticles,
		lastVideo: {
			id: lastVideoId,
			title: lastVideoTitle
		}
	};
};
