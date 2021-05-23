import type { RequestHandler } from '@sveltejs/kit';
import type { Locals, WritingPreview } from '$lib/types';
import { getBlogPosts } from './_api';

interface GetResult {
	articles: WritingPreview[];
}

export const get: RequestHandler<Locals, GetResult> = async () => {
	const blogPosts = getBlogPosts();

	return {
		body: {
			articles: blogPosts
		}
	};
};
