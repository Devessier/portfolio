// @@@SNIPSTART blog-feed-xml
import type { RequestHandler } from './$types';
import { Feed } from 'feed';
import { APP_URL } from '$lib/env';
import { getBlogPosts } from '../writing/_api';

// To also prerender this *page*, as SvelteKit treats it as a page regarding prerendering.
export const prerender = true;

// This function will be called when SvelteKit server
// receives a GET request for `/feed.xml`.
export const GET: RequestHandler = async ({ setHeaders }) => {
	// We get the list of all the blog posts.
	// The list is ordered by publication date. The most recent post is at the top.
	const blogPosts = await getBlogPosts();

	// We create the feed, with author's information.
	const feed = new Feed({
		title: 'Baptiste Devessier',
		description: "Baptiste Devessier's blog",
		id: APP_URL, // The id is used by RSS readers to identify the feed.
		link: APP_URL,
		language: 'en',
		feedLinks: {
			atom: new URL('/feed.xml', APP_URL).toString()
		},
		copyright: '', // The copyright notice. If have none so I left it empty.
		author: {
			name: 'Baptiste Devessier',
			email: 'baptiste@devessier.fr'
		}
	});

	for (const blogPost of blogPosts) {
		const href = blogPost.url ?? new URL(`/writing/${blogPost.slug}/`, APP_URL).toString();

		feed.addItem({
			id: href,
			title: blogPost.title,
			link: href,
			date: new Date(blogPost.datetime),
			description: blogPost.description
		});
	}

	setHeaders({
		// The Atom feed is XML.
		'Content-Type': 'application/atom+xml'
	});

	return new Response(feed.atom1());
};
// @@@SNIPEND
