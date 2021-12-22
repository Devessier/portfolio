import type { RequestHandler } from '@sveltejs/kit';
import { Feed } from 'feed';
import type { Locals } from '$lib/types';
import { APP_URL } from '$lib/env';
import { getBlogPosts } from './writing/_api';
import { urlcat } from '$lib/url';

export const get: RequestHandler<Locals, unknown, string> = () => {
	const blogPosts = getBlogPosts();

	const feed = new Feed({
		title: 'Baptiste Devessier',
		description: "Baptiste Devessier's blog",
		id: APP_URL,
		link: APP_URL,
		language: 'en',
		feedLinks: {
			atom: urlcat(APP_URL, '/feed.xml')
		},
		copyright: '',
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
			'Content-Type': 'application/xml'
		},
		body: feed.atom1()
	};
};
