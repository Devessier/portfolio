<script>
    import Page from '../components/Page.svelte';
    import {
        HtmlIcon,
        CssIcon,
        GithubIcon,
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

        <p class="mt-4 font-medium text-lg">Développeur Web, Paris</p>

        <ul class="flex items-center mt-3">
            <li>
                <a
                    href="https://github.com/Devessier"
                    class="text-red-500 p-2 border border-gray-200 block
                    rounded-full"
                    title="Github">
                    <GithubIcon class="w-6 h-6" />
                </a>
            </li>
        </ul>
    </div>

    <!-- <hr class="w-3/4 mx-auto my-4" /> -->

    <div class="mt-16">
        <p class="text-lg italic">J'aime coder avec …</p>

        <ul class="flex items-center justify-center flex-wrap mt-6">
            {#each loves as { title, link, icon }}
                <a
                    href={link}
                    {title}
                    class="block m-3 transition-transform duration-300
                    ease-in-out transform hover:-translate-y-2">
                    <svelte:component this={icon} class="w-10 h-10" />
                </a>
            {/each}
        </ul>
    </div>

</Page>
