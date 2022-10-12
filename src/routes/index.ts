import type { RequestHandler } from '@sveltejs/kit';
import type { WritingPreview } from '$lib/types';
import { getBlogPosts } from './writing/_api';

type GetResult = {
	latestArticles: WritingPreview[];
};

export const get: RequestHandler<never, GetResult> = () => {
	const blogPosts = getBlogPosts();
	const latestArticles = blogPosts.slice(0, 3);

	return {
		body: {
			latestArticles
		}
	};
};
