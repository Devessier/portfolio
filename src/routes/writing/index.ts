import type { RequestHandler } from '@sveltejs/kit';
import type { WritingPreview } from '$lib/types';
import { getBlogPosts } from './_api';

type GetResult = {
	articles: WritingPreview[];
};

export const get: RequestHandler<GetResult> = async () => {
	const blogPosts = getBlogPosts();

	return {
		body: {
			articles: blogPosts
		}
	};
};
