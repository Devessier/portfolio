import type { NotePreview } from '$lib/types';
import { basename } from 'path';

export function getNotes(): NotePreview[] {
	const svxFiles = import.meta.glob('./*.svx', { eager: true });

	const importedFiles: NotePreview[] = Object.entries(svxFiles)
		.filter(([path]) => {
			const fileIsHidden = basename(path).startsWith('_');
			const shouldKeepFile = fileIsHidden === false;

			return shouldKeepFile === true;
		})
		.map(([path, data]) => {
			const { metadata } = data as { metadata: Omit<NotePreview, 'slug'> };
			const { title, datetime } = metadata;

			return {
				title,
				datetime,
				slug: basename(path, '.svx')
			};
		})
		.sort(
			({ datetime: firstDatetime }, { datetime: secondDatetime }) =>
				-firstDatetime.localeCompare(secondDatetime)
		);

	return importedFiles;
}
