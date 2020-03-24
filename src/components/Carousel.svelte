<script>
    import CarouselArrow from './CarouselArrow.svelte'

    let className = ''
    export { className as class }

    export let items = []

    let index = 0

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
</script>

<div class="overflow-x-hidden relative {className}">
    {#if showLeftArrow}
        <CarouselArrow on:click={dec} direction="left" />
    {/if}

    <div
        class="grid grid-flow-col transition-transform transform duration-200
        ease-in-out"
        style="grid-auto-columns: 100%; transform: translateX({-index * 100}%)">
        {#each items as item}
            <slot {item} />
        {/each}
    </div>

    {#if showRightArrow}
        <CarouselArrow on:click={inc} direction="right" />
    {/if}
</div>
