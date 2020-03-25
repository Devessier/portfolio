<script>
    import Page from '../components/Page.svelte'
    import Carousel from '../components/Carousel.svelte'
    import { GithubIcon, LinkIcon } from '../components/Icons'

    const projects = [
        {
            title: 'ArtisansFiables',
            pictures: [
                {
                    src: '/artisans-fiables-dashboard.png',
                    alt: "Dashboard d'ArtisansFiables",
                },
                {
                    src: '/artisansfiables-verify-artisan-list.png',
                    alt: "Recherche d'artisan",
                },
                {
                    src: '/artisansfiables-artisan-profile.png',
                    alt: "Vérification de la fiabilité d'un artisan",
                },
            ],
            intro: 'Startup.',
            description:
                "Service totalement automatique de collecte des attestations légales des artisans. Le site permet aussi aux particuliers de trouver un artisan fiable pour réaliser leurs travaux, mais également de vérifier la fiabilité d'un artisan qu'ils connaissent. Le site est construit avec Nuxt.js, GraphQL & Apollo, Node.js, Golang, RabbitMQ, PostgreSQL, etc…",
            date: "Février 2019 - aujourd'hui",
            links: [
                {
                    title: "Voir l'organisation Github",
                    href: 'https://github.com/ArtisansFiables',
                    icon: GithubIcon,
                },
                {
                    title: 'Aller sur le site',
                    href: 'https://artisansfiables.fr',
                    icon: LinkIcon,
                },
            ],
        },
        {
            title: 'ThunderTube',
            pictures: [
                {
                    src: '/hypertube-home.jpg',
                    alt: 'Liste des films',
                },
                {
                    src: '/hypertube-movie.jpg',
                    alt: "Fiche d'un film",
                },
            ],
            intro: 'Projet 42.',
            description:
                'Site de streaming moderne réalisé en groupe, construit avec Vue.js, TailwindCSS et Node.js. Nous nous sommes inspirés de Netflix et de Canal+ pour apporter une UX convenable. Organisation du repository avec un git workflow structuré',
            date: 'Février-Mars 2020',
            links: [
                {
                    title: 'Voir le projet sur Github',
                    href: 'https://github.com/ThunderTube/HyperTube',
                    icon: GithubIcon,
                },
                {
                    title: 'Aller sur le site',
                    href: 'https://hypertube-app.herokuapp.com',
                    icon: LinkIcon,
                },
            ],
        },
        {
            title: 'Vladivodico',
            pictures: [
                {
                    src: '/vladivodico-home.png',
                    alt: "Page d'accueil du dictionnaire",
                },
                {
                    src: '/vladivodico-word.png',
                    alt: "Fiche d'un mot",
                },
            ],
            intro: 'Projet perso.',
            description:
                "Proof of concept initiée d'application de prise de notes offline-first avec transitions native-like. Les termes et leurs définitions sont stockés dans IndexedDB et l'application est accessible et fonctionnelle hors-ligne. Le site a été codé avec Nuxt.js et TailwindCSS",
            date: 'Septembre 2019',
            links: [
                {
                    title: 'Voir le projet sur Github',
                    href: 'https://github.com/Devessier/vladivodico',
                    icon: GithubIcon,
                },
                {
                    title: 'Aller sur le site',
                    href: 'https://dico.vladivodico.app/',
                    icon: LinkIcon,
                },
            ],
        },
        {
            title: 'ft_select',
            pictures: [
                {
                    src: '/ft-select-list.png',
                    alt: 'Navigation à travers les fichiers du dossier courant',
                },
                {
                    src: '/ft-select-search.png',
                    alt: 'Recherche instantanée',
                },
                {
                    src: '/ft-select-result.png',
                    alt: 'Résultats de la commande',
                },
            ],
            intro: 'Projet 42.',
            description:
                'Interface graphique en ligne de commande permettant de sélectionner des éléments dans une liste. Ce programme peut être utilisé pour sélectionner les fichiers à supprimer grâce à une commande telle que <code>rm $(./ft_select *)</code> pour un shell POSIX, ou <code>rm (./ft_select *)</code> pour Fish. Projet écrit en C',
            date: 'Mars 2019',
            links: [
                {
                    title: 'Voir le projet sur Github',
                    href: 'https://github.com/Devessier/ft_select',
                    icon: GithubIcon,
                },
            ],
        },
        {
            title: 'minishell',
            pictures: [
                {
                    src: '/minishell.png',
                    alt: 'Aperçu des commandes supportées par le shell',
                },
            ],
            intro: 'Projet 42.',
            description:
                "Shell écrit en C, le plus proche de la norme POSIX possible. Toutes les commandes et une partie des fonctionnalités d'un shell lambda sont supportées. Projet passionnant qui m'a permis d'apprendre beaucoup de choses sur les systèmes Unix et sur le C",
            date: 'Janvier-Mars 2019',
            links: [
                {
                    title: 'Voir le projet sur Github',
                    href: 'https://github.com/Devessier/minishell_improved',
                    icon: GithubIcon,
                },
            ],
        },
        {
            title: 'ft_ls',
            pictures: [
                {
                    src: '/ft-ls.png',
                    alt:
                        'Aperçu des options gérées par mon implémentation de la commande ls',
                },
            ],
            intro: 'Projet 42.',
            description:
                'Réimplémentation de la commande <code>ls</code> en C. Découverte de nombreux syscalls et fonctions de la libc',
            date: 'Décembre 2018',
            links: [
                {
                    title: 'Voir le projet sur Github',
                    href: 'https://github.com/Devessier/ft_ls',
                    icon: GithubIcon,
                },
            ],
        },
    ]
</script>

<style lang="postcss">
    h2 {
        &::after {
            @apply absolute inset-x-0 h-1 bg-red-400 w-2/5;

            content: '';
            bottom: -2px;
        }
    }
</style>

<svelte:head>
    <title>Projets</title>
</svelte:head>

<Page class="mt-10">
    <h1 class="text-2xl font-bold uppercase mb-6">Projets</h1>

    <section class="grid grid-cols-1 md:grid-cols-2 ">
        {#each projects as { title, pictures, intro, description, date, links }, index}
            <div class="flex py-2 {index % 2 === 0 ? 'md:pr-2' : 'md:pl-2'}">
                <article
                    class="flex flex-col flex-grow p-4 border border-gray-300">
                    <header class="mb-6">
                        <h2 class="text-xl font-semibold inline-block relative">
                            {title}
                        </h2>
                    </header>

                    <Carousel
                        items={pictures}
                        let:item={{ src, alt }}
                        let:index
                        let:zoom
                        class="mb-4">
                        <img
                            {src}
                            {alt}
                            class="w-full object-cover object-center
                            cursor-pointer"
                            on:click={() => zoom(index)} />

                        <img
                            slot="zoom"
                            let:item={{ src, alt }}
                            class="w-full object-cover"
                            {src}
                            {alt} />
                    </Carousel>

                    <p class="mb-4">
                        <span class="text-red-500 uppercase font-semibold">
                            {intro}
                        </span>
                        {@html description}
                    </p>

                    <footer class="flex items-end flex-grow">
                        <ul class="flex items-center justify-start">
                            {#each links as { href, title, icon }, index}
                                <li
                                    {title}
                                    class={index !== links.length - 1 ? 'mr-2' : ''}>
                                    <a
                                        {href}
                                        class="flex items-center justify-center
                                        p-2 text-red-500">
                                        <span class="sr-only">{title}</span>

                                        <svelte:component
                                            this={icon}
                                            class="w-6 h-6 stroke-current" />
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
