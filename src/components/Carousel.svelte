<script>
    import CarouselArrow from './CarouselArrow.svelte'
    import Modal from './Modal.svelte'

    let className = ''
    export { className as class }

    export let items = []

    let index = 0
    let zoomImageIndex = -1
    let container

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
</script>

<div bind:this={container} class="overflow-x-hidden relative {className}">
    {#if showLeftArrow}
        <CarouselArrow on:click={dec} direction="left" />
    {/if}

    {#if zoomImageIndex !== -1}
        <Modal on:close={close}>
            <slot name="zoom" item={items[zoomImageIndex]} />
        </Modal>
    {/if}

    <div
        class="grid grid-flow-col transition-transform transform duration-200
        ease-in-out relative"
        style="grid-auto-columns: 100%; transform: translateX({-index * 100}%)">
        {#each items as item, index}
            <slot {item} {index} {zoom} {container} />
        {/each}
    </div>

    {#if showRightArrow}
        <CarouselArrow on:click={inc} direction="right" />
    {/if}
</div>
