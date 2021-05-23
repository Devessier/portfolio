import type { RequestHandler } from '@sveltejs/kit';
import type { Locals, WritingPreview } from '$lib/types';
import { basename } from 'path';

interface GetResult {
	articles: WritingPreview[];
}

export const get: RequestHandler<Locals, GetResult> = async () => {
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

	return {
		body: {
			articles: importedFiles
		}
	};
};
