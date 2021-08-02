import type { WritingPreview } from '$lib/types';
import { basename } from 'path';

export function getBlogPosts(): WritingPreview[] {
	const svxFiles = import.meta.globEager('./*.svx');

	const importedFiles: WritingPreview[] = Object.entries(svxFiles)
		.map(([path, { metadata }]) => {
			const { title, description, datetime, tags } = metadata as Omit<WritingPreview, 'slug'>;

			return {
				title,
				description,
				datetime,
				tags,
				slug: basename(path, '.svx')
			};
		})
		.sort(
			({ datetime: firstDatetime }, { datetime: secondDatetime }) =>
				-firstDatetime.localeCompare(secondDatetime)
		);

	return importedFiles;
}
