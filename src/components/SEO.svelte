<script>
    export let title
    export let description
    export let canonical
    export let schemas = []
    export let facebook
    export let twitter

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

    <meta name="description" content={description} />
    <link rel="canonical" href={canonical} />

    {#each facebook as { name, content }}
        <meta property={name} {content} />
    {/each}
    {#each twitter as { name, content }}
        <meta {name} {content} />
    {/each}

    {#each scripts as script}
        {@html script}
    {/each}
</svelte:head>
