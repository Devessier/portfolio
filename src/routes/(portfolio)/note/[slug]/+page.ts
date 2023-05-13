import type { PageLoad } from './$types';
import type { ComponentType } from 'svelte';

type GetResult = {
	title: string;
	datetime: string;
	content: ComponentType;
};

export const load: PageLoad<GetResult> = async ({ params: { slug } }) => {
	const {
		metadata: { title, datetime },
		default: content
	}: {
		metadata: { title: string; datetime: string };
		default: ComponentType;
	} = await import(`../${slug}.svx`);

	return {
		title,
		datetime,
		content
	};
};
