import type { PageLoad } from './$types';
import type { ComponentType } from 'svelte';

type GetResult = {
	title: string;
	description: string;
	datetime: string;
	last_updated_datetime?: string;
	tags: string[];
	content: ComponentType;
};

export const load: PageLoad<GetResult> = async ({ params: { slug } }) => {
	const {
		metadata: { title, description, datetime, last_updated_datetime, tags },
		default: content
	}: {
		metadata: {
			title: string;
			description: string;
			datetime: string;
			last_updated_datetime?: string;
			tags: string[];
		};
		default: ComponentType;
	} = await import(`../${slug}.svx`);

	return {
		title,
		description,
		datetime,
		last_updated_datetime,
		tags,
		content
	};
};
