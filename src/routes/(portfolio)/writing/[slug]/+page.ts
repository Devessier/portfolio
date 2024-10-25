import type { PageLoad } from './$types';
import type { ComponentType } from 'svelte';
import { z } from 'zod';

type GetResult = {
	title: string;
	slug: string;
	description: string | undefined;
	datetime: string;
	last_updated_datetime?: string;
	tags: string[];
	content: ComponentType;
};

const WritingPostMetadata = z.object({
	title: z.string(),
	description: z.string(),
	datetime: z.string(),
	last_updated_datetime: z.string(),
	tags: z.string().array()
});

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
