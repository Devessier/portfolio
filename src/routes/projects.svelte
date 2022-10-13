<script>
	import Page from '$lib/Page/Page.svelte';
	import Carousel from '$lib/Carousel/Carousel.svelte';
	import { GithubIcon, LinkIcon } from '$lib/Icons';
	import Image from '$lib/Image/Image.svelte';

	const title = 'Baptiste Devessier | Projects';
	const description = 'My projects for 42 School, my startup ArtisansFiables and my side projects';
	const canonical = 'https://baptiste.devessier.fr/projects/';
	const schemas = [];
	const facebook = [
		{
			name: 'og:url',
			content: 'https://baptiste.devessier.fr/projects/'
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

	const projects = [
		{
			title: 'ArtisansFiables',
			pictures: [
				{
					src: 'artisansfiables-quote-requests',
					alt: 'Quote requests received by an artisan through ArtisansFiables platform',
					ratio: 58.3705
				},
				{
					src: 'artisansfiables-cloud',
					alt: 'Cloud for artisans users of ArtisansFiables',
					ratio: 58.3705
				},
				{
					src: 'artisansfiables-reliable-artisan',
					alt: 'A quote request to carry out building work',
					ratio: 58.3705
				}
			],
			intro: 'Startup.',
			description: `
				A service that automatically collects all the legal attestations of artisans.
				Individuals can also find a reliable artisan to carry out their building work
				or verify the reliability of an artisan they know.
				The website is built with Nuxt.js, GraphQL, Apollo, Node.js, Golang, RabbitMQ, PostgreSQL, etc.
			`,
			date: 'February 2019 - today',
			links: [
				{
					title: 'See the organization on Github',
					href: 'https://github.com/ArtisansFiables',
					icon: GithubIcon
				},
				{
					title: 'Go to the website',
					href: 'https://artisansfiables.fr',
					icon: LinkIcon
				}
			]
		},
		{
			title: 'RedTetris',
			pictures: [
				{
					src: 'red-tetris-home',
					alt: 'RedTetris',
					ratio: 52.3958
				},
				{
					src: 'red-tetris-games',
					alt: 'RedTetris',
					ratio: 52.3958
				},
				{
					src: 'red-tetris-waiting-room',
					alt: 'RedTetris',
					ratio: 52.3958
				},
				{
					src: 'red-tetris-solo',
					alt: 'RedTetris',
					ratio: 52.3958
				},
				{
					src: 'red-tetris-game-over',
					alt: 'RedTetris',
					ratio: 52.3958
				},
				{
					src: 'red-tetris-multiplayer',
					alt: 'RedTetris',
					ratio: 52.3958
				}
			],
			intro: 'Projet 42.',
			description: `
				A Tetris multiplayer game built with Vue 3, the Composition API, TailwindCSS, XState, Node.js and Socket.io.
				All the front-end logic is represented by a XState State Machine.
				Thanks to that we can know instantly in which logical state the application is.
				During this project I discovered Vue 3 and the Composition API and I will not be able to help myself from using them.
            `,
			date: 'February-March 2021',
			links: [
				{
					title: 'See the project on Github',
					href: 'https://github.com/Claude-42/red-tetris',
					icon: GithubIcon
				},
				{
					title: 'Go to the website',
					href: 'https://claude-red-tetris.netlify.app',
					icon: LinkIcon
				}
			]
		},
		{
			title: 'ThunderTube',
			pictures: [
				{
					src: 'hypertube-home',
					alt: 'List of movies on ThunderTube',
					ratio: 58.3705
				},
				{
					src: 'hypertube-movie',
					alt: 'Description of a movie on ThunderTube',
					ratio: 58.3705
				}
			],
			intro: 'Projet 42.',
			description: `
				A modern streaming website built with Vue.js, TailwindCSS and Node.js.
				We got inspiration from Netflix and Canal+ to bring a good UX.
			`,
			date: 'February-March 2020',
			links: [
				{
					title: 'See the project on Github',
					href: 'https://github.com/ThunderTube/HyperTube',
					icon: GithubIcon
				},
				{
					title: 'Go to the website',
					href: 'https://hypertube-app.herokuapp.com',
					icon: LinkIcon
				}
			]
		}
	];
</script>

<Page class="pb-8" {title} {description} {canonical} {schemas} {facebook} {twitter}>
	<h1 class="text-5xl font-cursive">Projects</h1>

	<section class="grid grid-cols-1 md:grid-cols-2 gap-4 pb-0 md:pb-12 mt-10">
		{#each projects as { title, pictures, intro, description, links }}
			<div class="flex transform md:even:translate-y-12">
				<article class="flex flex-col flex-grow p-4 border border-gray-300">
					<header class="mb-6">
						<h2 class="text-xl font-semibold inline-block relative">
							{title}
						</h2>
					</header>

					<Carousel
						items={pictures}
						let:item={{ src, alt, ratio }}
						let:index
						let:zoom
						let:container
						class="mb-4"
					>
						<Image
							{src}
							{alt}
							{ratio}
							sizes="(max-width: 768px) 100vw, 50vw"
							root={container}
							class="cursor-pointer"
							on:click={() => zoom(index)}
						/>

						<div slot="zoom" class="w-full">
							<Image let:item={{ src, alt }} {src} {alt} {ratio} root={container} />
						</div>
					</Carousel>

					<p class="mb-4">
						<span class="text-red-700 uppercase font-semibold">
							{intro}
						</span>
						{@html description}
					</p>

					<footer class="flex items-end flex-grow">
						<ul class="flex items-center justify-start">
							{#each links as { href, title, icon }}
								<li {title} class="mr-2 last:mr-0">
									<a {href} class="flex items-center justify-center p-2 text-red-500">
										<span class="sr-only">{title}</span>

										<svelte:component this={icon} class="w-6 h-6 stroke-current" />
									</a>
								</li>
							{/each}
						</ul>
					</footer>
				</article>
			</div>
		{/each}
	</section>
</Page>

<style lang="postcss">
	h2::after {
		@apply absolute inset-x-0 h-1 bg-red-400 w-2/5;

		content: '';
		bottom: -2px;
	}
</style>
