<script>
    import Page from '../components/Page.svelte'
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
    } from '../components/Icons'

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
    ]

    const skills = [
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
            title: 'Nuxt.js',
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
    ]

    function generatePaddingClasses(number) {
        const classes = [
            'p-4 md:p-4',
            'p-3 md:p-4',
            'p-4 md:p-4',
            'p-3 md:p-4',
            'p-4 md:p-4',
        ]

        return classes[number % classes.length]
    }

    function generateSizeClasses(number) {
        const classes = [
            'w-12 md:w-16 h-12 md:h-16',
            'w-6 md:w-10 h-6 md:h-10',
            'w-12 md:w-16 h-12 md:h-16',
            'w-10 md:w-12 h-10 md:h-12',
            'w-12 md:w-16 h-12 md:h-16',
        ]

        return classes[number % classes.length]
    }
</script>

<svelte:head>
    <title>Accueil</title>
</svelte:head>

<Page class="mt-10">
    <div>
        <h1 class="text-4xl font-bold uppercase">Baptiste Devessier</h1>

        <p class="mt-5 text-2xl font-medium">
            Développeur
            <span class="bg-red-300 ">Web Full Stack</span>
            <span class="-ml-1">, Paris</span>
        </p>

        <ul class="flex items-center mt-8">
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
                            class="w-8 h-8 stroke-current" />
                    </a>
                </li>
            {/each}
        </ul>
    </div>

    <div class="mt-12 mb-6">
        <p class="text-2xl font-bold uppercase mb-10 text-center">
            Mes compétences
        </p>

        <ul
            class="flex justify-center items-center flex-wrap mb-6 w-full
            md:w-5/6 lg:w-4/5 xl:w-8/12 mx-auto">
            {#each skills as { title, link, icon }, index}
                <li class="mb-2 md:mb-4 mx-2 sm:mx-4 md:mx-8">
                    <a
                        href={link}
                        {title}
                        class="block transition-transform duration-300 ease-out
                        origin-center transform shadow-xl rounded-full flex
                        items-center justify-center hover:scale-110 {generatePaddingClasses(index)}">
                        <svelte:component
                            this={icon}
                            class={generateSizeClasses(index)} />
                    </a>
                </li>
            {/each}
        </ul>
    </div>
</Page>
