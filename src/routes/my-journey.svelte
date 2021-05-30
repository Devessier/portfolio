<script>
	import Page from '$lib/Page/Page.svelte';
	import Timeline from '$lib/Timeline/Timeline.svelte';

	import { freshNavigation } from '$lib/stores';

	const title = 'Baptiste Devessier | My journey';
	const description =
		'My journey to become a Full Stack Web Developer specialized in JavaScript, TypeScript, Vue.js, Nuxt.js, TailwindCSS, Svelte, SvelteKit and Node.js';
	const canonical = 'https://baptiste.devessier.fr/my-way/';
	const schemas = [];
	const facebook = [
		{
			name: 'og:url',
			content: 'https://baptiste.devessier.fr/my-journey/'
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

	const events = [
		{
			title: 'Freelance Web Developer available to work on your projects',
			date: 'and at the same time…'
		},
		{
			title: '42 Paris School',
			description: 'Assiduous and passionate student',
			date: 'November 2018 - today'
		},
		{
			title: 'Migrating my portfolio from Sapper to SvelteKit',
			description: '',
			date: 'May 2021'
		},
		{
			title: 'Discovery of Vue 3, the Composition API and XState',
			description: `
				I learn about Vue 3, its Composition API and XState while working on a 42 project.
				Using the Composition API in a Vue project really helps modularize the logic.
				Thanks to XState I explicitly describe the states my applications can reach so that I can prevent
				race conditions by proactively handling them.
            `,
			date: 'November 2020'
		},
		{
			title: 'Internship as a Full Stack Web Developer at Cleed',
			description: `
				As part of my studies at 42 School I did an intership of 6 months at the startup Cleed.
				I entirely redeveloped two websites using Vue.js, Nuxt.js and Vuetify, while taking care of SEO contraints.
            `,
			date: 'April 2020 - October 2020'
		},
		{
			title: 'Svelte and Sapper',
			description: `
				I learn Svelte, a UX framework that becomes more and more famous, by realizing this portfolio
				using it in conjunction with Sapper, a Svelte meta-framework that eases development.
			`,
			date: 'March 2020'
		},
		{
			title: 'FrontendMasters',
			description: `
				I subscribe to FrontendMasters to have access to top quality courses and workshops
				in order to continuously improve my skills on today's technologies and learn those of tomorrow.
			`,
			date: 'February 2020'
		},
		{
			title: 'Nuxt.js',
			description: `
				I learn Nuxt.js to benefit from better SEO and UX on my Vue.js websites.
			`,
			date: 'September 2019'
		},
		{
			title: 'TailwindCSS',
			description: `
				To improve the quality of my code and my productivity, I adopt TailwindCSS.
			`,
			date: 'April 2019'
		},
		{
			title: 'Founding of ArtisansFiables startup',
			description: `
				I solely develop this SaaS that will be released soon, in which I am a partner.
			`,
			date: 'February 2019 - today'
		},
		{
			title: 'Joining 42 Paris School',
			description: `
				I succeeded August 2018 Piscine.
			`,
			date: 'November 2018'
		},
		{
			title: 'Bac Général Scientifique Spécialité Mathématiques - Mention Bien',
			description: 'Lycée Maurice Rondeau, Bussy Saint Georges',
			date: '2018'
		},
		{
			title: 'GraphQL, RabbitMQ, microservices and Golang',
			description: `
				I use GraphQL to query data from my front-end to my back-end and to subscribe to their updates.
				I learn microservices architecture and I use RabbitMQ to make them communicate.
			`,
			date: 'February 2018'
		},
		{
			title: 'Vue.js UX Framework and Node.js',
			description: `
				I improve my knowledges about JavaScript, which becomes my favorite programming language.
				I discover REST APIs and the Client Side Rendering.
				I participate in NodeSchool events in Paris.
			`,
			date: 'April 2017'
		},
		{
			title: 'Framework PHP Laravel',
			description: `
				To gain in productivity I learn Laravel.
			`,
			date: 'End of 2016'
		},
		{
			title: 'JavaScript and PHP',
			description: `
				I learn JavaScript and PHP programming languages using online content.
			`,
			date: 'December 2015'
		},
		{
			title: 'Discovery of Web Development',
			description: `
				I code my first Web page using plain HTML and CSS.
			`,
			date: 'September 2015'
		},
		{
			title: 'Discovery of programming',
			description: `
				My parents give me a MacBook Air and books to learn iOS applications development with Objective-C.
			`,
			date: 'April 2013'
		}
	];
</script>

<Page class="pb-6" {title} {description} {canonical} {schemas} {facebook} {twitter}>
	<h1 class="text-2xl font-bold uppercase">Parcours</h1>

	<Timeline {events} skipWaiting={$freshNavigation} class="md:max-w-3xl mx-auto mt-10">
		<div slot="event" let:title let:description>
			<h2 class="font-medium">{title}</h2>

			{#if description}
				<p class="text-sm text-gray-800 mt-1">{description}</p>
			{/if}
		</div>
	</Timeline>
</Page>
