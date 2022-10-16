import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import { readFileSync } from 'fs';
import rehypeSlugPlugin from 'rehype-slug';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { lex, parse } from 'fenceparser';
import { createShikiHighlighter, runTwoSlash, renderCodeToHTML } from 'shiki-twoslash';
import { h } from 'hastscript';

const NightOwlTheme = JSON.parse(readFileSync('./themes/Night Owl-color-theme.json'));

const escape_svelty = (str) =>
	str
		.replace(/[{}`]/g, (c) => ({ '{': '&#123;', '}': '&#125;', '`': '&#96;' }[c]))
		.replace(/\\([trn])/g, '&#92;$1');

const highlighter = await createShikiHighlighter({ theme: NightOwlTheme });


const config = defineConfig({
	extensions: ['.svx'],
	
	rehypePlugins: [
		rehypeSlugPlugin,
		rehypeExternalLinks,
		[
			rehypeAutolinkHeadings,
			{
				behavior: 'prepend',
				properties: {
					class:
						'-ml-8 pr-4 absolute no-underline text-gray-300 hover:text-red-700 opacity-0 md:opacity-100'
				},
				content: [h('span.sr-only', 'permalink'), h('span', { ariaHidden: true }, '#')]
			}
		]
	],
	highlight: {
		highlighter(code, lang, meta) {
			// Copied from https://github.com/pngwn/MDsveX/issues/212#issuecomment-937574889

			// Adapted from the `remark-shiki-twoslash` repo
			// See: https://github.com/shikijs/twoslash/blob/fbf061261fcda90c46e946ce1e2e9357d465c145/packages/remark-shiki-twoslash/src/index.ts#L172-L215
			let fence = undefined;

			try {
				fence = parse(lex([lang, meta].filter(Boolean).join(' ')));
			} catch (error) {
				throw new Error(`Could not parse the codefence for this code sample \n${code}`);
			}

			let twoslash = undefined;
			if (fence?.twoslash === true) {
				twoslash = runTwoSlash(code, lang, {
					defaultCompilerOptions: {
						allowJs: true,
						checkJs: true,
						target: 'es2021'
					}
				});
				code = twoslash.code;
			}

			const html = renderCodeToHTML(code, lang, fence ?? {}, {}, highlighter, twoslash);

			return `{@html \`<div class="relative">${escape_svelty(html)}</div>\` }`;
		}
	}
});

export default config;
