import type { PageServerLoad } from './$types';
import type { WritingPreview } from '$lib/types';
import { slugify } from '$lib/slugify';
import { getBlogPosts } from '../../writing/_api';

type GetResult = {
	tag: string;
	prettyTagName?: string;
	articles: WritingPreview[];
};

export const load: PageServerLoad<GetResult> = async ({ params: { tag } }) => {
	const blogPosts = await getBlogPosts();

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
		tag,
		articles,
		prettyTagName
	};
};
