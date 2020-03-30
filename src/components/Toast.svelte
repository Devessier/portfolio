<script>
    import { createEventDispatcher } from 'svelte'
    import { fade } from 'svelte/transition'

    export let title = ''
    export let text = ''
    export let buttons = []

    const dispatch = createEventDispatcher()

    $: btns = [
        ...buttons,
        {
            text: 'Fermer',
            action: () => dispatch('dismiss'),
        },
    ]
</script>

<div
    transition:fade={{ duration: 200 }}
    class="flex items-stretch bg-white m-6 shadow-xl rounded border
    border-gray-300 text-sm md:max-w-md">
    <div class="flex-grow p-3">
        <div class="font-medium mb-1">{title}</div>

        <div class="text-gray-700">{text}</div>
    </div>

    <div class="flex flex-col">
        {#each btns as { text, action }}
            <button
                on:click={action}
                class="flex-grow p-2 border-l border-b last:border-b-0
                border-gray-300 first:rounded-tr last:rounded-br
                first:text-red-700">
                {text}
            </button>
        {/each}
    </div>
</div>
