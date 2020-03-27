<script>
    export let schema

    $: stringified = JSON.stringify(schema)
    $: tag = `
        <script type="application/json-ld">
            ${stringified + '<'}/script>
    `
</script>

<svelte:head>
    {@html tag}
</svelte:head>
