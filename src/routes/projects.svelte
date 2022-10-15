<script lang="ts">
	import Page from '$lib/Page/Page.svelte';
	import LinkWithAnimatedArrow from '$lib/LinkWithAnimatedArrow.svelte';

	const title = 'Baptiste Devessier | Projects';
	const description = 'My code projects about web development and XState.';
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

	type LinkType = 'GitHub' | 'Website' | 'Article series';

	interface Project {
		title: string;
		description: string[];
		imageSrc: string;
		imageRatio: number;
		links: { type: LinkType; href: string }[];
	}

	const projects: Project[] = [
		{
			title: 'Turing',
			imageSrc: '/img/turing.gif',
			imageRatio: 64,
			description: [
				'A Turing machine visualizer built with XState, Vue 3 and TailwindCSS. All the logic code of the visualizer lives in a XState machine.',
				'The configuration of the machine and its input can be edited, and once submitted, they are sent to an Erlang server that computes the execution.',
				'The visualizer displays the steps of the execution with smooth animations.'
			],
			links: [
				{
					type: 'GitHub',
					href: 'https://github.com/AdonisEnProvence/Turing'
				},
				{
					type: 'Website',
					href: 'https://turing.adonisenprovence.com'
				},
				{
					type: 'Article series',
					href: '/tags/turing-visualizer/'
				}
			]
		},
		{
			title: 'MusicRoom',
			imageSrc: 'https://github.com/AdonisEnProvence/MusicRoom/raw/master/docs/mtv-demo.gif',
			imageRatio: 66.125,
			description: [
				'An iOS, Android and Web application to listen to music collaboratively in real-time.',
				'Client-side the application is built with React Native (Expo) and XState. The backend is built with AdonisJS.',
				'The logic of the music player and the collaborative part are managed by XState.'
			],
			links: [
				{
					type: 'GitHub',
					href: 'https://github.com/AdonisEnProvence/MusicRoom'
				},
				{
					type: 'Website',
					href: 'https://musicroom.adonisenprovence.com'
				}
			]
		},
		{
			title: 'RedTetris',
			imageSrc: '/img/red-tetris-multiplayer.jpeg',
			imageRatio: 69.15142991092358,
			description: [
				'A Tetris multiplayer game built with XState, Vue 3, TailwindCSS and Node.js.',
				'Each client is connected to the backend through a WebSocket (Socket.io) to enable real-time. Client-side the WebSocket connection is orchestrated by XState.',
				'All the front-end logic of the game is managed by XState, from username selection form to keypresses during a game.'
			],
			links: [
				{
					type: 'GitHub',
					href: 'https://github.com/Claude-42/red-tetris'
				},
				{
					type: 'Website',
					href: 'https://claude-red-tetris.netlify.app'
				}
			]
		}
	];

	function formatLinkType(linkType: LinkType): string {
		const texts: Record<LinkType, string> = {
			GitHub: 'See the project on Github',
			Website: 'Go to the website',
			'Article series': 'Read the article series'
		};

		return texts[linkType];
	}

	$: formattedProjects = projects.map(({ links, ...props }) => ({
		...props,
		links: links.map(({ type, href }) => ({ href, text: formatLinkType(type) }))
	}));
</script>

<Page {title} {description} {canonical} {schemas} {facebook} {twitter}>
	<h1 class="text-5xl font-cursive">Projects</h1>

	<section class="grid grid-cols-1 gap-16 lg:gap-24 mt-10">
		{#each formattedProjects as { title, imageSrc, imageRatio, description, links }}
			<article class="grid grid-cols-1 lg:grid-cols-6 gap-16">
				<div class="col-span-1 lg:col-span-2 space-y-8">
					<header>
						<h2
							class="text-2xl font-semibold inline-block relative after:absolute after:inset-x-0 after:h-2 after:bg-red-400 after:w-2/5 after:bottom-[-6px]"
						>
							{title}
						</h2>
					</header>

					<div class="prose">
						{#each description as paragraph}
							<p>{paragraph}</p>
						{/each}
					</div>

					<footer>
						<ul class="space-y-2">
							{#each links as { href, text }}
								<li>
									<LinkWithAnimatedArrow {href}>{text}</LinkWithAnimatedArrow>
								</li>
							{/each}
						</ul>
					</footer>
				</div>

				<div class="col-span-1 lg:col-span-4 relative">
					<div class="w-full overflow-hidden bg-gray-100">
						<div class="relative w-full" style="padding-bottom: {imageRatio}%" />

						<img
							src={imageSrc}
							alt=""
							loading="lazy"
							class="object-center object-cover absolute inset-0 w-full h-full"
						/>
					</div>
				</div>
			</article>
		{/each}
	</section>
</Page>
