import type { WritingPreview } from '$lib/types';
import type { PageServerLoad } from './$types';
import { getBlogPosts } from './writing/_api';

interface GetResult {
	latestArticles: WritingPreview[];
}

export const load: PageServerLoad<GetResult> = () => {
	const blogPosts = getBlogPosts();
	const latestArticles = blogPosts.slice(0, 3);

	return {
		latestArticles
	};
};
