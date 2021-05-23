import type { RequestHandler } from '@sveltejs/kit';
import type { Locals, WritingPreview } from '$lib/types';
import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

interface GetResult {
	articles: WritingPreview[];
}

export const get: RequestHandler<Locals, GetResult> = async () => {
	const currentDirectoryEntries = readdirSync(join(import.meta.url, '..'));
	const svxFiles = currentDirectoryEntries.filter((entry) => entry.endsWith('.svx'));

	const importedFiles: WritingPreview[] = svxFiles.map((path) => {
		const fileContent = readFileSync(join(import.meta.url, '..', path));
		const parsingResult = matter(fileContent);
		const { title, description, datetime, tags } = parsingResult.data as Omit<
			WritingPreview,
			'slug'
		>;

		return {
			title,
			description,
			datetime,
			tags,
			slug: path.replace('.svx', '')
		};
	});

	return {
		body: {
			articles: importedFiles
		}
	};
};
