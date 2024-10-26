import type { WritingPreview } from '$lib/types';
import { basename } from 'path';
import * as cheerio from 'cheerio';
import { z } from 'zod';

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

/**
 * I can hard-code that list because I'm not going to publish articles there anymore.
 */
const newsletterBlogPostsUrl: Array<string> = [
	'https://newsletter.baptiste.devessier.fr/archive/my-first-impressions-of-panda-css/',
	'https://newsletter.baptiste.devessier.fr/archive/create-videos-as-react-apps-with-remotion/',
	'https://newsletter.baptiste.devessier.fr/archive/expressive-code-my-go-to-code-syntax-highlighter/',
	'https://newsletter.baptiste.devessier.fr/archive/astro-goes-full-on-view-transitions/'
];

const NewsletterPostJsonLd = z.object({
	url: z.string().url(),
	headline: z.string(),
	description: z.string(),
	datePublished: z.string().datetime({ offset: true })
});

async function getNewsletterBlogPosts(): Promise<WritingPreview[]> {
	return Promise.all(
		newsletterBlogPostsUrl.map(async (url) => {
			const pageRes = await fetch(url);

			const $ = cheerio.load(await pageRes.text());

			const rawJsonLd = $('script[type=application/ld+json]').text();

			const jsonLd = NewsletterPostJsonLd.parse(JSON.parse(rawJsonLd));

			return {
				external: true,
				title: jsonLd.headline,
				description: jsonLd.description,
				datetime: jsonLd.datePublished,
				tags: [],
				url
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
