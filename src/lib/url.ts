import _urlcat from 'urlcat';

// Suggested by https://github.com/balazsbotond/urlcat/issues/171#issuecomment-915181065
export const urlcat = (_urlcat as unknown as { default: typeof _urlcat }).default;
