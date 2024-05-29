import type { PageServerLoad } from './$types';
import type { WritingPreview } from '$lib/types';
import { getBlogPosts } from './_api';

type GetResult = {
	articles: WritingPreview[];
};

export const load: PageServerLoad<GetResult> = async () => {
	const blogPosts = await getBlogPosts();

	return {
		articles: blogPosts
	};
};
