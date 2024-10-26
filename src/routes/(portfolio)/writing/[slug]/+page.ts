import { WritingPostMetadata } from '$lib/types';
import type { PageLoad } from './$types';
import type { ComponentType } from 'svelte';

type GetResult = {
	title: string;
	slug: string;
	description: string | undefined;
	datetime: string;
	last_updated_datetime?: string;
	tags: string[];
	content: ComponentType;
};

export const load: PageLoad<GetResult> = async ({ params: { slug } }) => {
	const allWritings = import.meta.glob('../*.svx');

	const { metadata: rawMetadata, default: content } = (await allWritings[`../${slug}.svx`]()) as {
		metadata: unknown;
		default: ComponentType;
	};

	const { title, description, datetime, last_updated_datetime, tags } =
		WritingPostMetadata.parse(rawMetadata);

	return {
		title,
		slug,
		description,
		datetime,
		last_updated_datetime,
		tags,
		content
	};
};
