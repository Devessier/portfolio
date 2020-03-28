<script>
    export let title = ''
    export let description = ''
    export let schemas = []

    $: scripts = schemas.map(
        schema => `
            <script type="application/ld+json">
                ${JSON.stringify(schema) + '<'}
            /script>
        `
    )
</script>

<svelte:head>
    <title>{title}</title>

    <description>{description}</description>

    {#each scripts as script}
        {@html script}
    {/each}
</svelte:head>
