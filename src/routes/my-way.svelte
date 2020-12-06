<script>
    import Page from '../components/Page.svelte'
    import Timeline from '../components/Timeline.svelte'

    import { freshNavigation } from '../store'

    const title = 'Baptiste Devessier | Parcours'
    const description =
        'Mon parcours pour devenir développeur Web Full Stack en JavaScript, TypeScript, Vue.js, Nuxt.js, TailwindCSS, Svelte, Sapper, Node.js'
    const canonical = 'https://baptiste.devessier.fr/my-way/'
    const schemas = []
    const facebook = [
        {
            name: 'og:url',
            content: 'https://baptiste.devessier.fr/my-way/',
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

    const events = [
        {
            title: 'Développeur disponible pour vos projets',
            description: 'Développeur Web Full Stack en disponibilité',
            date: 'et en même temps …',
        },
        {
            title: 'École 42',
            description: 'Élève assidu et passionné',
            date: "Novembre 2018 - aujourd'hui",
        },
        {
            title: 'Découverte de Vue 3, de la Composition API et de XState',
            description: `
                Je découvre Vue 3, la Composition API et XState au cours d'un projet 42.
                L'introduction de la Composition API dans le développement d'applications Vue.js
                facilite grandement la modularisation de la logique.
                Grâce à XState je sais clairement dans quel état mon code se trouve et je me prémunis des race conditions.
            `,
            date: 'Novembre 2020',
        },
        {
            title: 'Stage de Développement Web Full Stack chez Cleed',
            description: `
                Dans le cadre de mes études à 42 j'effectue un stage de 6 mois au sein de la startup Cleed.
                J'ai l'occasion de redévelopper entièrement deux sites avec Nuxt.js et Vuetify,
                en prenant en compte les contraintes de référencement naturel.
            `,
            date: 'Avril 2020 - Octobre 2020',
        },
        {
            title: 'Svelte et Sapper',
            description:
                'Je me forme sur Svelte, le framework UX qui grimpe, par la réalisation de ce portfolio et en y joignant Sapper, le Nuxt.js de Svelte',
            date: 'Mars 2020',
        },
        {
            title: 'FrontendMasters',
            description:
                "Je m'abonne à FrontendMasters afin d'avoir accès à des cours et des workshops de qualité et en ligne, pour me former continûment aux technologies de demain",
            date: 'Février 2020',
        },
        {
            title: 'Nuxt.js',
            description:
                "Je me forme à Nuxt.js par soucis de référencement naturel et d'expérience utilisateur",
            date: 'Septembre 2019',
        },
        {
            title: 'TailwindCSS',
            description:
                "Pour améliorer la qualité de mon code et ma rapidité d'exécution, j'adopte TailwindCSS",
            date: 'Avril 2019',
        },
        {
            title: 'Développement de la startup ArtisansFiables',
            description:
                "Je développe l'intégralité du produit de cette legaltech qui sortira très prochainement, et dans laquelle je suis associé",
            date: "Février 2019 - aujourd'hui",
        },
        {
            title: 'Intégration École 42',
            description: "Réussite de la piscine d'août 2018",
            date: 'Novembre 2018',
        },
        {
            title:
                'Bac Général Scientifique Spécialité Mathématiques - Mention Bien',
            description: 'Lycée Maurice Rondeau, Bussy Saint Georges',
            date: '2018',
        },
        {
            title: 'GraphQL, RabbitMQ, microservices et Golang',
            description:
                "Je fais communiquer mon front et mon back avec GraphQL. Je me forme sur l'architecture en microservices et fais interagir ceux-ci grâce à RabbitMQ. J'en code certains en Go",
            date: 'Février 2018',
        },
        {
            title: 'Framework UX Vue.js et Node.js',
            description:
                "J'améliore mes connaissances en JavaScript, qui devient mon langage favori. Je découvre les API REST et le Client Side Rendering. Je participe à des évènements NodeSchool sur Paris",
            date: 'Avril 2017',
        },
        {
            title: 'Framework PHP Laravel',
            description:
                'Pour gagner en rapidité et en efficacité je me forme en ligne à Laravel',
            date: 'Fin 2016',
        },
        {
            title: 'JavaScript et PHP',
            description:
                'Je me forme en ligne pour maîtriser le JavaScript et le PHP',
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
                "Mes parents m'offrent un MacBook Air et des manuels d'apprentissage pour développer des applications iOS en Objective-C",
            date: 'Avril 2013',
        },
    ]
</script>

<Page
    class="pb-6"
    {title}
    {description}
    {canonical}
    {schemas}
    {facebook}
    {twitter}>
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
