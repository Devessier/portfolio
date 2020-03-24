<script>
    import CarouselArrow from './CarouselArrow.svelte'
    import Modal from './Modal.svelte'
    import { nodeContainsTarget } from '../utils.js'

    let className = ''
    export { className as class }

    export let items = []

    let zoomedImageRef
    let index = 0
    let zoomImageIndex = -1

    $: showArrows = items.length > 1
    $: showLeftArrow = showArrows && index > 0
    $: showRightArrow = showArrows && index < items.length - 1

    function dec() {
        if (index <= 0) return

        index--
    }

    function inc() {
        if (index >= items.length - 1) return

        index++
    }

    function zoom(index) {
        zoomImageIndex = index
    }

    function close() {
        zoomImageIndex = -1
    }

    function handleOverlayClick({ detail: event }) {
        if (!nodeContainsTarget(zoomedImageRef, event.target)) {
            close()
        }
    }
</script>

<div class="overflow-x-hidden relative {className}">
    {#if showLeftArrow}
        <CarouselArrow on:click={dec} direction="left" />
    {/if}

    {#if zoomImageIndex !== -1}
        <Modal on:close={close} on:overlay:click={handleOverlayClick}>
            <div bind:this={zoomedImageRef}>
                <slot name="zoom" item={items[zoomImageIndex]} />
            </div>
        </Modal>
    {/if}

    <div
        class="grid grid-flow-col transition-transform transform duration-200
        ease-in-out"
        style="grid-auto-columns: 100%; transform: translateX({-index * 100}%)">
        {#each items as item, index}
            <slot {item} {index} {zoom} />
        {/each}
    </div>

    {#if showRightArrow}
        <CarouselArrow on:click={inc} direction="right" />
    {/if}
</div>
