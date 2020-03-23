<script>
    import Page from '../components/Page.svelte'
    import Timeline from '../components/Timeline.svelte'

    import { freshNavigation } from '../store'

    const events = [
        {
            title: 'Développeur disponible pour vos projets',
            description: 'Je veux porter mes compétences au plus haut',
            date: 'dès maintenant',
        },
        {
            title: 'Découverte de Svelte et Sapper',
            description:
                "Après avoir entendu à maintes reprises parler de Svelte, l'étoile montante des frameworks UX, je décide de me former dessus en réalisant ce portfolio avec et en y joignant Sapper, le Nuxt.js de Svelte",
            date: 'Mars 2020',
        },
        {
            title: 'Abonnement à FrontendMasters',
            description:
                "Je décide de m'abonner à FrontendMasters afin d'avoir accès à des cours et des workshops de qualité et en ligne, pour me former continûment aux technologies modernes qui m'intéressent",
            date: 'Février 2020',
        },
        {
            title: 'Découverte de Nuxt.js',
            description:
                "Je me forme à Nuxt.js par soucis de référencement naturel et d'expérience utilisateur",
            date: 'Septembre 2019',
        },
        {
            title: 'Découverte de TailwindCSS',
            description:
                "Je me mets à aimer le CSS mais ne souhaite plus tout écrire à la main. J'adopte immédiatement TailwindCSS",
            date: 'Avril 2019',
        },
        {
            title: 'Développement de la startup ArtisansFiables',
            description:
                "Je développe l'intégralité du produit de cette legaltech qui sortira très prochainement, et dans laquelle je suis associé",
            date: "Février 2019 - aujourd'hui",
        },
        {
            title: 'École 42',
            description: 'Cursus C/Unix & Web par projets concrets',
            date: "Novembre 2018 - aujourd'hui",
        },
        {
            title: 'Bac Général Spécialité Scientifique - Mention Bien',
            description: 'Lycée Maurice Rondeau, Bussy Saint Georges',
            date: '2018',
        },
        {
            title:
                'Découverte de GraphQL, de RabbitMQ, des microservices et de Golang',
            description:
                "Je fais communiquer mon front et mon back avec GraphQL. Je découvre l'architecture en microservices et fais interagir ceux-ci grâce à RabbitMQ. J'en code certains en Go",
            date: 'Février 2018',
        },
        {
            title: 'Découverte du framework UX Vue.js et de Node.js',
            description:
                'Je pousse mon usage du JavaScript et aime de plus en plus le langage. Je découvre les API REST et le Client Side Rendering',
            date: 'Avril 2017',
        },
        {
            title: 'Découverte du framework PHP Laravel',
            description:
                'Pour gagner en rapidité et en efficacité je décide de me former à Laravel',
            date: 'Fin 2016',
        },
        {
            title: 'Découverte du JavaScript et du PHP',
            description:
                'Je découvre le JavaScript et le PHP en me formant sur Internet',
            date: 'Décembre 2015',
        },
        {
            title: 'Découverte du Web',
            description: 'Je réalise ma première page Web en HTML/CSS',
            date: 'Septembre 2015',
        },
        {
            title: 'Découverte de la programmation',
            description:
                "Mes parents m'offrent un MacBook Air et des manuels d'apprentissage en noir et blanc pour développer des applications iOS en Objective-C",
            date: 'Avril 2013',
        },
    ]
</script>

<svelte:head>
    <title>Parcours</title>
</svelte:head>

<Page class="mt-10">
    <h1 class="text-2xl font-bold uppercase">Parcours</h1>

    <Timeline
        {events}
        skipWaiting={$freshNavigation}
        class="md:max-w-3xl mx-auto mt-10">
        <div slot="event" let:title let:description>
            <h2 class="font-medium">{title}</h2>

            {#if description}
                <p class="text-sm text-gray-800 mt-1">{description}</p>
            {/if}
        </div>
    </Timeline>
</Page>
