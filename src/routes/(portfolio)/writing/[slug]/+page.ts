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
	const allWritings = import.meta.glob('../*.svx');
	const {
		metadata: { title, description, datetime, last_updated_datetime, tags },
		default: content
	} = (await allWritings[`../${slug}.svx`]()) as {
		metadata: {
			title: string;
			description: string;
			datetime: string;
			last_updated_datetime?: string;
			tags: string[];
		};
		default: ComponentType;
	};

	return {
		title,
		description,
		datetime,
		last_updated_datetime,
		tags,
		content
	};
};
