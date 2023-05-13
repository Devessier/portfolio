import type { PageServerLoad } from './$types';
import type { NotePreview } from '$lib/types';
import { getNotes } from '../note/_api';

type GetResult = {
	notes: NotePreview[];
};

export const load: PageServerLoad<GetResult> = () => {
	const notes = getNotes();

	return {
		notes
	};
};
