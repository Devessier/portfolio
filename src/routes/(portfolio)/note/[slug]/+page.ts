import { z } from 'zod';
import type { PageLoad } from './$types';
import type { ComponentType } from 'svelte';

type GetResult = {
	title: string;
	datetime: string;
	slug: string;
	content: ComponentType;
};

const NotePostMetadata = z.object({
	title: z.string(),
	datetime: z.string()
});

export const load: PageLoad<GetResult> = async ({ params: { slug } }) => {
	const allNotes = import.meta.glob('../*.svx');
	const { metadata: rawMetadata, default: content } = (await allNotes[`../${slug}.svx`]()) as {
		metadata: unknown;
		default: ComponentType;
	};

	const { title, datetime } = NotePostMetadata.parse(rawMetadata);

	return {
		title,
		slug,
		datetime,
		content
	};
};
