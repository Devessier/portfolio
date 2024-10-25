<script>
	import LinkWithAnimatedArrow from '$lib/LinkWithAnimatedArrow.svelte';
	import Page from '$lib/Page.svelte';
	import Seo from '$lib/SEO.svelte';

	/**
	 * The HTML description of the page comes from https://kentcdodds.com/about.
	 */
</script>

<Seo
	title="Baptiste Devessier | About"
	description="Get to know Baptiste Devessier."
	canonical="/about/"
/>

<Page>
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
