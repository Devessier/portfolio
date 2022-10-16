import type { PageServerLoad } from './$types';
import type { WritingPreview } from '$lib/types';
import { getBlogPosts } from './_api';

type GetResult = {
	articles: WritingPreview[];
};

export const load: PageServerLoad<GetResult> = () => {
	const blogPosts = getBlogPosts();

	return {
        articles: blogPosts
	};
};
