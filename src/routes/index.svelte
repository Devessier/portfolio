<script lang="ts">
	import { APP_URL } from '$lib/env';
	import Page from '$lib/Page/Page.svelte';
	import { GithubIcon, MailIcon, TildIcon, BriefcaseIcon } from '$lib/Icons';

	const title = 'Baptiste Devessier | Home';
	const description = 'Full Stack Web Developer in Paris';
	const canonical = 'https://baptiste.devessier.fr/';
	const schemas = [];
	const facebook = [
		{
			name: 'og:url',
			content: 'https://baptiste.devessier.fr/'
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

	const communicationMeans = [
		{
			href: `${APP_URL}/cv.pdf`,
			title: 'CV',
			icon: BriefcaseIcon
		},
		{
			href: 'https://github.com/Devessier',
			title: 'My Github profile',
			icon: GithubIcon
		},
		{
			href: 'contact',
			title: 'Contact me',
			icon: MailIcon
		}
	];

	const categories = [
		[
			'Front-end',
			[
				'HTML, CSS',
				'JavaScript, TypeScript',
				'Vue.js, Nuxt.js, Composition API',
				'Svelte, SvelteKit',
				'XState',
				'TailwindCSS, Vuetify',
				'GraphQL',
				'Jamstack'
			]
		],
		[
			'Back-end',
			[
				'Node.js, TypeScript',
				'AdonisJS',
				'GraphQL',
				'Golang',
				'PostgreSQL',
				'RabbitMQ',
				'Scraping, Puppeteer, Cheerio'
			]
		],
		['Tools', ['Prettier, ESLint', 'Git', 'Docker', 'Fish', 'macOS', 'Visual Studio Code']]
	];
</script>

<Page class="pb-6" {title} {description} {canonical} {schemas} {facebook} {twitter}>
	<div>
		<h1 class="text-4xl font-bold lowercase flex items-center flex-wrap">
			Baptiste
			<TildIcon
				class="w-5 h-4 relative"
				preserveAspectRatio="none"
				style="top: 2px"
				aria-hidden="true"
			/>
			Devessier
		</h1>

		<p class="mt-5 text-2xl font-medium">Full Stack Web Developer, Paris</p>

		<ul class="flex items-center mt-8">
			{#each communicationMeans as { href, title, icon }, index}
				<li>
					<a
						sveltekit:prefetch
						{href}
						class="block p-2 text-red-500 border border-gray-200
                        rounded-full {index < communicationMeans.length - 1 ? 'mr-2' : ''}"
						{title}
					>
						<span class="sr-only">{title}</span>

						<svelte:component this={icon} class="w-8 h-8 stroke-current" />
					</a>
				</li>
			{/each}
		</ul>
	</div>

	<div class="mt-16">
		{#each categories as [title, skills]}
			<div
				class="grid grid-cols-1 md:grid-cols-3 pt-4 mb-4 border-t-2
                border-red-500"
			>
				<h2 class="text-2xl mb-4">{title}</h2>

				<ul class="md:col-span-2 skills">
					{#each skills as skill}
						<li class="text-lg mb-2">— {skill}</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</Page>

<style lang="postcss">
	h1 {
		font-family: 'Comfortaa', cursive;
	}

	.skills {
		columns: 1;

		@screen sm {
			columns: 2;
		}
	}
</style>
