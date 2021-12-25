import _urlcat from 'urlcat';

// Suggested by https://github.com/balazsbotond/urlcat/issues/171#issuecomment-915181065
// In development build, _urlcat is directly a function, not in production build.
export const urlcat =
	typeof _urlcat === 'function'
		? _urlcat
		: (_urlcat as unknown as { default: typeof _urlcat }).default;
