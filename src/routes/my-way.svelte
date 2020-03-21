<script>
    import Page from '../components/Page.svelte';
    import Timeline from '../components/Timeline.svelte';

    const events = [
        {
            title: 'Développeur dans votre entreprise ?',
            description: 'Je veux porter mes compétences toujours plus haut',
            date: 'dès maintenant',
        },
        {
            title: 'École 42',
            description: 'Formation C/Unix, Web',
            date: "2018 - aujourd'hui",
        },
        {
            title: 'Bac Général Spécialité Scientifique - Mention Bien',
            description: 'Lycée Maurice Rondeau, Bussy Saint Georges',
            date: '2018',
        },
        {
            title: 'Découverte du Web',
            description: 'Je réalise ma première page Web',
            date: 'Septembre 2015',
        },
        {
            title: 'Brevet des Collèges - Mention Très bien',
            description: 'Collège Sainte-Thérèse, Couilly-Pont-aux-Dames',
            date: '2015',
        },
    ];
</script>

<svelte:head>
    <title>Parcours</title>
</svelte:head>

<Page class="mt-10">
    <h1 class="text-2xl font-bold uppercase">Parcours</h1>

    <Timeline {events} class="md:max-w-3xl mx-auto mt-10">
        <div slot="event" let:title let:description>
            <h2 class="font-medium">{title}</h2>

            {#if description}
                <p class="text-sm text-gray-800 mt-1">{description}</p>
            {/if}
        </div>
    </Timeline>
</Page>
