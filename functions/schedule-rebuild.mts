export default async (_req: Request) => {
	await fetch(Netlify.env.get('REBUILD_APP_URL'), {
		method: 'POST'
	});

	return new Response('Triggered redeploy');
};
