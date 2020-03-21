<script>
    import Page from '../components/Page.svelte';
    import {
        HtmlIcon,
        CssIcon,
        GithubIcon,
        MailIcon,
        TailwindIcon,
        VueIcon,
        NuxtIcon,
        SvelteIcon,
        SapperIcon,
        VuetifyIcon,
        NodeIcon,
        GraphQLIcon,
        PolkaIcon,
        TypeScriptIcon,
        JavaScriptIcon,
        GolangIcon,
    } from '../components/Icons';

    const communicationMeans = [
        {
            href: 'https://github.com/Devessier',
            title: 'Mon profil Github',
            icon: GithubIcon,
        },
        {
            href: 'contact',
            title: 'Me contacter',
            icon: MailIcon,
        },
    ];

    const loves = [
        {
            title: 'HTML',
            link: 'https://html.spec.whatwg.org/multipage/',
            icon: HtmlIcon,
        },
        {
            title: 'CSS',
            link: 'https://www.w3.org/Style/CSS/#specs',
            icon: CssIcon,
        },

        {
            title: 'JavaScript',
            link: 'https://tc39.es/ecma262/',
            icon: JavaScriptIcon,
        },
        {
            title: 'TypeScript',
            link: 'https://www.typescriptlang.org/',
            icon: TypeScriptIcon,
        },

        {
            title: 'Vue.js',
            link: 'https://vuejs.org',
            icon: VueIcon,
        },
        {
            title: 'Vuetify',
            link: 'https://vuetifyjs.com',
            icon: VuetifyIcon,
        },
        {
            title: 'Nuxt',
            link: 'https://nuxtjs.org',
            icon: NuxtIcon,
        },

        {
            title: 'Svelte',
            link: 'https://svelte.dev',
            icon: SvelteIcon,
        },
        {
            title: 'Sapper',
            link: 'https://sapper.svelte.dev',
            icon: SapperIcon,
        },

        {
            title: 'TailwindCSS',
            link: 'https://tailwindcss.com',
            icon: TailwindIcon,
        },

        {
            title: 'Node.js',
            link: 'https://nodejs.org',
            icon: NodeIcon,
        },
        {
            title: 'GraphQL',
            link: 'https://graphql.org/',
            icon: GraphQLIcon,
        },
        {
            title: 'Polka',
            link: 'https://github.com/lukeed/polka',
            icon: PolkaIcon,
        },

        {
            title: 'Golang',
            link: 'https://go.dev/',
            icon: GolangIcon,
        },
    ];
</script>

<svelte:head>
    <title>Accueil</title>
</svelte:head>

<Page class="mt-10">
    <div>
        <h1 class="text-2xl font-bold uppercase">Baptiste Devessier</h1>

        <p class="mt-4 text-lg font-medium">
            Développeur Web Full Stack, Paris
        </p>

        <ul class="flex items-center mt-3">
            {#each communicationMeans as { href, title, icon }, index}
                <li>
                    <a
                        rel="prefetch"
                        {href}
                        class="block p-2 text-red-500 border border-gray-200
                        rounded-full {index < communicationMeans.length - 1 ? 'mr-2' : ''}"
                        {title}>
                        <svelte:component
                            this={icon}
                            class="w-6 h-6 stroke-current" />
                    </a>
                </li>
            {/each}
        </ul>
    </div>

    <div class="mt-16 mb-6">
        <p class="text-lg italic">J'aime coder avec …</p>

        <ul class="flex flex-wrap items-center justify-center mt-6">
            {#each loves as { title, link, icon }}
                <li>
                    <a
                        href={link}
                        {title}
                        class="block m-3 transition-transform duration-300
                        ease-in-out origin-bottom transform hover:-translate-y-2
                        hover:scale-110">
                        <svelte:component this={icon} class="w-10 h-10" />
                    </a>
                </li>
            {/each}
        </ul>
    </div>
</Page>
