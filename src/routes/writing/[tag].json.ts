import type { RequestHandler } from '@sveltejs/kit';
import type { Locals, WritingPreview } from '$lib/types';
import { basename } from 'path';
import slugify from 'slugify';

interface GetResult {
	prettyTagName?: string;
	articles: WritingPreview[];
}

export const get: RequestHandler<Locals, GetResult> = async ({ params: { tag } }) => {
	const svxFiles = import.meta.globEager('./*.svx');

	const importedFiles: WritingPreview[] = Object.entries(svxFiles).map(([path, { metadata }]) => {
		const { title, description, datetime, tags } = metadata as Omit<WritingPreview, 'slug'>;

		return {
			title,
			description,
			datetime,
			tags,
			slug: basename(path, '.svx')
		};
	});

	const articles: WritingPreview[] = [];
	let prettyTagName: string | undefined;

	for (const blogPost of importedFiles) {
		for (const blogPostTag of blogPost.tags) {
			const sluggifiedTag = slugify(blogPostTag, {
				lower: true
			});

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
			articles,
			prettyTagName
		}
	};
};
