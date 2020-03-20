<script>
    import { draw } from 'svelte/transition';

    export let width = 24;
    export let height = 24;

    export let opened = true;
</script>

<svg
    width="{width}px"
    height="{height}px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    {#if !opened}
        <path
            transition:draw={{ duration: 500 }}
            d="M4 6H20M4 12H12M4 18H20"
            stroke="#4A5568"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round" />
    {:else}
        <path
            transition:draw={{ duration: 500 }}
            d="M4 6H10M4 12H20M13 18H20"
            stroke="#4A5568"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round" />
    {/if}
</svg>
