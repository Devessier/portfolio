import { createShikiHighlighter, renderCodeToHTML } from 'shiki-twoslash';
import outdent from 'outdent';
import type { PageServerLoad } from './$types';
import NightOwlTheme from '$lib/themes/Night Owl-color-theme.json' assert { type: 'json' };

const highlighter = await createShikiHighlighter({ theme: NightOwlTheme as any });

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
