import type { PageLoad } from './$types';
import type { ComponentType } from 'svelte';

type GetResult = {
	title: string;
	datetime: string;
	content: ComponentType;
};

export const load: PageLoad<GetResult> = async ({ params: { slug } }) => {
	const allNotes = import.meta.glob('../*.svx');
	const {
		metadata: { title, datetime },
		default: content
	} = (await allNotes[`../${slug}.svx`]()) as {
		metadata: { title: string; datetime: string };
		default: ComponentType;
	};

	return {
		title,
		datetime,
		content
	};
};
