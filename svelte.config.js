import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import rehypeSlugPlugin from 'rehype-slug';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svx'],

	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		}),

		mdsvex({
			layout: './src/lib/BlogLayout.svelte',
			rehypePlugins: [rehypeSlugPlugin]
		})
	],

	kit: {
		adapter: adapter(),
		target: '#svelte',
		prerender: {
			crawl: true,
			enabled: true,
			onError: 'continue',
			entries: ['*']
		}
	}
};

export default config;
