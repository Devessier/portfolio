<script>
	import Page from '$lib/Page/Page.svelte';

	const title = 'Baptiste Devessier | About';
	// Using description pattern of https://kentcdodds.com/about
	const description = 'Get to know Baptiste Devessier';
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

<Page class="pb-6" {title} {description} {canonical} {schemas} {facebook} {twitter}>
	<h1 class="text-5xl font-cursive">About</h1>

	<div class="prose mt-10">
		<p>
			Hi, I'm Baptiste Devessier! I am a fullstack web and XState developer from France. I
			discovered web development when I was 15 years old and since then it's my thing.
		</p>

		<p>
			I am a student of <a href="https://42.fr/en/homepage/">42 Paris school</a>, a general
			programming school, where I can discover other branches of development, and where I can also
			work on web projects.
		</p>

		<p>
			I build applications and websites as a freelancer and specialize in my favorite tool: XState.
			Feel free to <a href="/contact/">contact me</a> if you want us to work together.
		</p>
	</div>

	<div class="mt-10">
		<a
			href="/cv.pdf"
			rel="external"
			target="_blank"
			class="text-red-600 hover:text-red-700 transition-colors font-medium"
		>
			See my CV →
		</a>
	</div>
</Page>
