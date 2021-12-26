// @@@SNIPSTART blog-feed-xml
import type { RequestHandler } from '@sveltejs/kit';
import { Feed } from 'feed';
import type { Locals } from '$lib/types';
import { APP_URL } from '$lib/env';
import { getBlogPosts } from './writing/_api';
import { urlcat } from '$lib/url';

// This function will be called when SvelteKit server
// receives a GET request for `/feed.xml`.
export const get: RequestHandler<Locals, unknown, string> = () => {
	// We get the list of all the blog posts.
	// The list is ordered by publication date. The most recent post is at the top.
	const blogPosts = getBlogPosts();

	// We create the feed, with author's information.
	const feed = new Feed({
		title: 'Baptiste Devessier',
		description: "Baptiste Devessier's blog",
		id: APP_URL, // The id is used by RSS readers to identify the feed.
		link: APP_URL,
		language: 'en',
		feedLinks: {
			atom: urlcat(APP_URL, '/feed.xml')
		},
		copyright: '', // The copyright notice. If have none so I left it empty.
		author: {
			name: 'Baptiste Devessier',
			email: 'baptiste@devessier.fr'
		}
	});

	for (const blogPost of blogPosts) {
		const href = urlcat(APP_URL, `/writing/${blogPost.slug}/`);

		feed.addItem({
			id: href,
			title: blogPost.title,
			link: href,
			date: new Date(blogPost.datetime),
			description: blogPost.description
		});
	}

	return {
		headers: {
			// The Atom feed is XML.
			'Content-Type': 'application/atom+xml'
		},
		body: feed.atom1() // We create an Atom feed!
	};
};
// @@@SNIPEND