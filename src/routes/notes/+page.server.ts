import type { PageLoad } from '../../../.svelte-kit/types/src/routes/notes/$types';
import type { NotePreview } from '$lib/types';
import { getNotes } from '../note/_api';

type GetResult = {
	notes: NotePreview[];
};

export const load: PageLoad<GetResult> = () => {
	const notes = getNotes();

	return {
		notes
	};
};
