<script>
	import LinkWithAnimatedArrow from '$lib/LinkWithAnimatedArrow.svelte';
	import Page from '$lib/Page.svelte';

	const title = 'Baptiste Devessier | About';
	// Using description pattern of https://kentcdodds.com/about
	const description = 'Get to know Baptiste Devessier.';
	const canonical = 'https://baptiste.devessier.fr/about/';
	const schemas = [];
	const facebook = [
		{
			name: 'og:url',
			content: 'https://baptiste.devessier.fr/about/'
		},
		{
			name: 'og:title',
			content: title
		},
		{
			name: 'og:description',
			content: description
		}
	];
	const twitter = [];
</script>

<Page {title} {description} {canonical} {schemas} {facebook} {twitter}>
	<h1 class="text-5xl font-cursive">About</h1>

	<div class="prose mt-10">
		<p>
			Hi, I'm Baptiste Devessier! I'm a full stack web and XState freelance consultant from France.
			I discovered web development when I was 15 years old and since then it's my thing.
		</p>

		<p>
			I studied at <a href="https://42.fr/en/homepage/">42 Paris school</a>, a general programming
			school, where I discovered other branches of development, and where I could also work on web
			projects.
		</p>

		<p>
			I build applications and websites as a freelancer and specialized in my favorite tool: XState.
			Feel free to <a href="/contact/">contact me</a> if you want us to work together.
		</p>
	</div>

	<div class="mt-10 flex flex-col items-start gap-y-4">
		<LinkWithAnimatedArrow href="/cv-en.pdf" rel="external" target="_blank">
			See my English resume
		</LinkWithAnimatedArrow>

		<LinkWithAnimatedArrow href="/cv-fr.pdf" rel="external" target="_blank">
			See my French resume
		</LinkWithAnimatedArrow>
	</div>
</Page>
