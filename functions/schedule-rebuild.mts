export default async (_req: Request) => {
	const res = await fetch(Netlify.env.get('REBUILD_APP_URL'), {
		method: 'POST'
	});

	console.log('Build hook response', await res.json());

	return new Response('Triggered redeploy');
};
