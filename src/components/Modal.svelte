<script context="module">
    let counter = 0
    let overlay
</script>

<script>
    import { onMount, onDestroy, createEventDispatcher } from 'svelte'
    import { fade } from 'svelte/transition'

    import { XIcon } from './Icons'

    const dispatch = createEventDispatcher()

    let overlayRef
    let ref
    let modal

    onMount(() => {
        const zIndex = generateZIndex(counter)

        if (counter === 0) {
            console.log('create')

            overlay = document.createElement('div')
            overlay.className = 'fixed z-30 inset-0'

            document.body.appendChild(overlay)

            overlay.appendChild(overlayRef)
        }

        modal = document.createElement('div')
        modal.className = `fixed top-0 left-0 h-full w-full ${zIndex}`
        document.body.appendChild(modal)
        modal.appendChild(ref)

        // Prevent scrolling
        document.body.classList.add('overflow-y-hidden')

        counter++
    })

    onDestroy(() => {
        document.body.removeChild(modal)

        if (counter === 1) {
            document.body.removeChild(overlay)

            // Enable scrolling
            document.body.classList.remove('overflow-y-hidden')
        }

        counter--
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
</script>

<svelte:window on:keydown={handleKeyDown} />

<div class="hidden">
    <div
        bind:this={overlayRef}
        transition:fade={{ duration: 100 }}
        class="absolute inset-0"
        style="opacity: 0.7; background-color: rgb(33, 33, 33)" />

    <div
        bind:this={ref}
        class="flex justify-center items-center h-full w-full relative md:px-20"
        aria-modal="true"
        transition:fade={{ duration: 200 }}
        on:click={event => dispatch('overlay:click', event)}>
        <button
            class="absolute top-0 left-0 flex justify-center items-center m-4
            p-2 rounded-full"
            on:click={() => dispatch('close')}>
            <span class="sr-only">Fermer</span>

            <XIcon class="w-6 h-6 text-white stroke-current" />
        </button>

        <slot />
    </div>
</div>
