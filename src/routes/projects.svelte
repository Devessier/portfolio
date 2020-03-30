<script>
    import Page from '../components/Page.svelte'
    import Carousel from '../components/Carousel.svelte'
    import { GithubIcon, LinkIcon } from '../components/Icons'
    import Image from '../components/Image.svelte'

    const title = 'Baptiste Devessier | Projets'
    const description =
        'Mes projets 42, ma startup ArtisansFiables et mes projets personnels'
    const schemas = []
    const facebook = [
        {
            name: 'og:url',
            content: 'https://baptiste.devessier.fr/projects',
        },
        {
            name: 'og:title',
            content: title,
        },
        {
            name: 'og:description',
            content: description,
        },
    ]
    const twitter = []

    const projects = [
        {
            title: 'ArtisansFiables',
            pictures: [
                {
                    src: 'artisansfiables-dashboard',
                    alt: "Dashboard d'ArtisansFiables",
                    ratio: 58.3705,
                },
                {
                    src: 'artisansfiables-verify-artisan',
                    alt: "Vérification de la fiabilité d'un artisan",
                    ratio: 58.3705,
                },
                {
                    src: 'artisansfiables-quote-request',
                    alt: 'Demande de devis pour la réalisation de travaux',
                    ratio: 58.3705,
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
                    src: 'hypertube-home',
                    alt: 'Liste des films',
                    ratio: 58.3705,
                },
                {
                    src: 'hypertube-movie',
                    alt: "Fiche d'un film",
                    ratio: 58.3705,
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
            title: 'ft_select',
            pictures: [
                {
                    src: 'ft-select',
                    alt: 'Navigation à travers les fichiers du dossier srcs',
                    ratio: 62.5,
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
                    src: 'minishell',
                    alt: 'Aperçu des commandes supportées par le shell',
                    ratio: 62.5,
                },
            ],
            intro: 'Projet 42.',
            description:
                "Shell écrit en C, le plus proche de la norme POSIX possible. Toutes les commandes et une partie des fonctionnalités d'un shell lambda sont supportées. Projet passionnant permettant l'apprentissage des systèmes Unix et du C",
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
                    src: 'ft-ls',
                    alt:
                        'Aperçu des options gérées par mon implémentation de la commande ls',
                    ratio: 62.5,
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

<Page class="pb-8" {title} {description} {schemas} {facebook} {twitter}>
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
                        let:item={{ src, alt, ratio }}
                        let:index
                        let:zoom
                        let:container
                        class="mb-4">
                        <Image
                            {src}
                            {alt}
                            {ratio}
                            root={container}
                            class="cursor-pointer"
                            on:click={() => zoom(index)} />

                        <div slot="zoom" class="w-full">
                            <Image
                                let:item={{ src, alt }}
                                {src}
                                {alt}
                                {ratio}
                                root={container} />
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
