import type { RequestHandler } from '@sveltejs/kit';
import type { NotePreview } from '$lib/types';
import { getNotes } from './note/_api';

type GetResult = {
	notes: NotePreview[];
};

export const get: RequestHandler<never, GetResult> = () => {
	const notes = getNotes();

	return {
		body: {
			notes
		}
	};
};
