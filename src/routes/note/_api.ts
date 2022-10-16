import type { NotePreview } from '$lib/types';
import { basename } from 'path';

export function getNotes(): NotePreview[] {
	const svxFiles = import.meta.globEager('./*.svx');

	const importedFiles: NotePreview[] = Object.entries(svxFiles)
		.filter(([path]) => {
			const fileIsHidden = basename(path).startsWith('_');
			const shouldKeepFile = fileIsHidden === false;

			return shouldKeepFile === true;
		})
		.map(([path, { metadata }]) => {
			const { title, datetime } = metadata as Omit<NotePreview, 'slug'>;

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
