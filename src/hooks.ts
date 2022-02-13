import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	// We activated `trailingSlash: 'always'` and we need to remove the trailing
	// slash from the request path because SvelteKit would not find the endpoint otherwise.
	// See https://kit.svelte.dev/docs#configuration-trailingslash.
	if (event.url.pathname === '/feed.xml/') {
		event.url.pathname = '/feed.xml';
	}

	const response = await resolve(event);

	return response;
};
