export function formatDate(datetime: string): string {
	const date = new Date(datetime);

	return new Intl.DateTimeFormat('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
		timeZone: 'UTC'
	}).format(date);
}
