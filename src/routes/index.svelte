<script>
    import Page from '../components/Page.svelte'
    import { GithubIcon, MailIcon } from '../components/Icons'

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

    const categories = [
        [
            'Front-end',
            [
                'HTML, CSS',
                'JavaScript, ES6',
                'Vue.js, Nuxt.js',
                'Svelte, Sapper',
                'TailwindCSS',
                'Sass / SCSS / PostCSS',
                'Vuetify',
                'GraphQL',
            ],
        ],
        [
            'Back-end',
            [
                'Node.js',
                'TypeScript',
                'GraphQL',
                'Polka',
                'Golang',
                'PostgreSQL',
                'Redis',
                'RabbitMQ',
            ],
        ],
        ['Outils', ['Git', 'Docker', 'Bash / ZSH / Fish', 'macOS']],
    ]
</script>

<style lang="postcss">
    .skills {
        columns: 1;

        @screen md {
            columns: 2;
        }
    }
</style>

<svelte:head>
    <title>Baptiste Devessier | Accueil</title>
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
                        <span class="sr-only">{title}</span>

                        <svelte:component
                            this={icon}
                            class="w-8 h-8 stroke-current" />
                    </a>
                </li>
            {/each}
        </ul>
    </div>

    <div class="mt-16 mb-6">
        <!-- <h2 class="text-2xl font-bold uppercase mb-10">Mes compétences</h2> -->

        {#each categories as [title, skills]}
            <div
                class="grid grid-cols-1 md:grid-cols-3 pt-4 mb-4 border-t-2
                border-red-500">
                <h3 class="text-2xl mb-4">{title}</h3>

                <ul class="md:col-span-2 skills">
                    {#each skills as skill}
                        <li class="text-lg mb-2">— {skill}</li>
                    {/each}
                </ul>
            </div>
        {/each}
    </div>
</Page>
