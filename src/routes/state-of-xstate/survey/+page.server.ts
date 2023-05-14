import { createShikiHighlighter, renderCodeToHTML } from 'shiki-twoslash';
import { readFileSync } from 'fs';
import outdent from 'outdent';
import type { PageServerLoad } from './$types';

const NightOwlTheme = JSON.parse(
	readFileSync(new URL('../../../../themes/Night Owl-color-theme.json', import.meta.url), 'utf-8')
);

const highlighter = await createShikiHighlighter({ theme: NightOwlTheme });

export const load: PageServerLoad<{ code: string }> = async () => {
	const code = outdent`
  import { createMachine } from 'xstate';

  export const appMachine = createMachine({
    id: 'App',

    initial: 'Checking authentication',

    states: {
      'Checking authentication': {
        invoke: {
          src: 'Load authentication state',
          onDone: {
            target: 'Authenticated',
          },
          onError: {
            target: 'Unauthenticated',
          },
        },
      },
      'Authenticated': { /** */ },
      'Unauthenticated': { /** */ },
    },
  });
    `;

	const html = renderCodeToHTML(code, 'ts', {}, {}, highlighter);

	return {
		code: html
	};
};
