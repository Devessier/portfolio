import type { WritingPreview } from '$lib/types';
import { basename } from 'path';
import RssParser from 'rss-parser';
import * as cheerio from 'cheerio';

export function getSvxBlogPosts(): WritingPreview[] {
	const svxFiles = import.meta.glob('./*.svx', { eager: true });

	const importedFiles: WritingPreview[] = Object.entries(svxFiles)
		.filter(([path]) => {
			const fileIsHidden = basename(path).startsWith('_');
			const shouldKeepFile = fileIsHidden === false;

			return shouldKeepFile === true;
		})
		.map(([path, data]) => {
			const { metadata } = data as { metadata: Omit<WritingPreview, 'slug'> };

			const { title, description, datetime, tags } = metadata;

			return {
				title,
				description,
				datetime,
				tags,
				slug: basename(path, '.svx')
			};
		})
		.sort(
			({ datetime: firstDatetime }, { datetime: secondDatetime }) =>
				-firstDatetime.localeCompare(secondDatetime)
		);

	return importedFiles;
}

const rssParser = new RssParser();

async function getNewsletterBlogPosts(): Promise<WritingPreview[]> {
	const newsletterRssFeed = await rssParser.parseURL(
		'https://newsletter.baptiste.devessier.fr/rss.xml'
	);

	return Promise.all(
		newsletterRssFeed.items.map(async (item) => {
			const pageRes = await fetch(item.link!);

			const $ = cheerio.load(await pageRes.text());

			const description = $('h2.description').text();

			return {
				external: true,
				title: item.title!,
				description,
				datetime: item.isoDate!,
				tags: [],
				url: item.link!
			};
		})
	);
}

export async function getBlogPosts(): Promise<WritingPreview[]> {
	const blogPosts = [...getSvxBlogPosts(), ...(await getNewsletterBlogPosts())];

	blogPosts.sort(
		({ datetime: firstDatetime }, { datetime: secondDatetime }) =>
			-firstDatetime.localeCompare(secondDatetime)
	);

	return blogPosts;
}
