import type { WritingPreview } from '$lib/types';
import { basename } from 'path';

export function getBlogPosts(): WritingPreview[] {
	const svxFiles = import.meta.globEager('./*.svx');

	const importedFiles: WritingPreview[] = Object.entries(svxFiles)
		.filter(([path]) => {
			const fileIsHidden = basename(path).startsWith('_');
			const shouldKeepFile = fileIsHidden === false;

			return shouldKeepFile === true;
		})
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
