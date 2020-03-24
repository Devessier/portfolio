<script>
    import { fade } from 'svelte/transition'

    export let direction
</script>

<div
    transition:fade={{ duration: 200 }}
    class="absolute inset-y-0 {direction === 'left' ? 'left-0' : 'right-0'} flex
    items-center justify-center z-10">
    <button
        on:click
        class="flex items-center justify-center p-1 bg-red-400 rounded-full mx-3">
        <span class="sr-only">
            {direction === 'left' ? 'Image précédente' : 'Image suivante'}
        </span>

        {#if direction === 'left'}
            <svg
                class="h-4 w-4 stroke-current text-white"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M15 19L8 12L15 5"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>
        {:else}
            <svg
                class="h-4 w-4 stroke-current text-white"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M9 5L16 12L9 19"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>
        {/if}
    </button>
</div>
