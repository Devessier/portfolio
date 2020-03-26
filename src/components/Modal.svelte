<script context="module">
    let counter = 0
    let overlay
</script>

<script>
    import { onMount, onDestroy, createEventDispatcher } from 'svelte'
    import { fade } from 'svelte/transition'

    import { nodeContainsTarget } from '../utils.js'
    import { XIcon } from './Icons'

    const dispatch = createEventDispatcher()
    const id = counter

    let modal
    let slotContainer

    onMount(() => {
        // Only one overlay is necessary
        if (id === 0) {
            document.body.appendChild(overlay)
        }

        document.body.appendChild(modal)

        // Prevent scrolling
        document.body.classList.add('overflow-y-hidden')

        counter++

        return () => {
            if (id === 0) {
                document.body.removeChild(overlay)
            }

            document.body.removeChild(modal)

            // Reactivate scrolling
            document.body.classList.remove('overflow-y-hidden')

            counter--
        }
    })

    function generateZIndex(count) {
        return (
            [
                'z-31',
                'z-32',
                'z-33',
                'z-34',
                'z-35',
                'z-36',
                'z-37',
                'z-38',
                'z-39',
            ][count] || 'z-40'
        )
    }

    function handleKeyDown(event) {
        switch (event.code) {
            case 'Escape':
                dispatch('close')
                break
        }
    }

    function handleOverlayClick(event) {
        if (!nodeContainsTarget(slotContainer, event.target)) {
            dispatch('close')
        }
    }
</script>

<svelte:window on:keydown={handleKeyDown} />

<div class="hidden">
    {#if id === 0}
        <div class="fixed z-30 inset-0" bind:this={overlay}>
            <div
                transition:fade={{ duration: 100 }}
                class="absolute inset-0"
                style="opacity: 0.7; background-color: rgb(33, 33, 33)" />
        </div>
    {/if}

    <div
        class="fixed top-0 left-0 h-full w-full {generateZIndex(id)}"
        bind:this={modal}>
        <div
            class="flex justify-center items-center h-full w-full relative px-0
            sm:px-20 overflow-auto"
            aria-modal="true"
            transition:fade={{ duration: 200 }}
            on:click={handleOverlayClick}>
            <button
                class="fixed top-0 left-0 flex justify-center items-center m-4
                p-1 rounded-full bg-gray-300"
                on:click={() => dispatch('close')}>
                <span class="sr-only">Fermer</span>

                <XIcon class="w-6 h-6 text-gray-900 stroke-current" />
            </button>

            <div bind:this={slotContainer}>
                <slot />
            </div>
        </div>
    </div>
</div>
