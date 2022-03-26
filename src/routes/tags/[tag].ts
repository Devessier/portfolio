import type { RequestHandler } from '@sveltejs/kit';
import type { WritingPreview } from '$lib/types';
import { slugify } from '$lib/slugify';
import { getBlogPosts } from '../writing/_api';

type GetResult = {
	prettyTagName?: string;
	articles: WritingPreview[];
};

export const get: RequestHandler<never, GetResult> = async ({ params: { tag } }) => {
	const blogPosts = getBlogPosts();

	const articles: WritingPreview[] = [];
	let prettyTagName: string | undefined;

	for (const blogPost of blogPosts) {
		for (const blogPostTag of blogPost.tags) {
			const sluggifiedTag = slugify(blogPostTag);

			if (sluggifiedTag === tag) {
				if (prettyTagName === undefined) {
					prettyTagName = blogPostTag;
				}

				articles.push(blogPost);
			}
		}
	}

	return {
		body: {
			tag,
			articles,
			prettyTagName
		}
	};
};
