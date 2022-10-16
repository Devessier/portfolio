import type { PageLoad } from './$types';
import type { ComponentType } from 'svelte';

type GetResult = {
	title: string;
	description: string;
	datetime: string;
	tags: string[];
	content: ComponentType;
};

export const load: PageLoad<GetResult> = async ({ params: { slug } }) => {
	const {
		metadata: { title, description, datetime, tags },
		default: content
	}: {
		metadata: { title: string; description: string; datetime: string; tags: string[] };
		default: ComponentType;
	} = await import(`../${slug}.svx`);

	return {
		title,
		description,
		datetime,
		tags,
		content
	};
};
