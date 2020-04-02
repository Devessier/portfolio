<script context="module">
    const loadedImages = new Set()
</script>

<script>
    import { onMount, onDestroy } from 'svelte'

    export let root = null
    export let src
    export let alt
    export let ratio = 60
    export let sizes = undefined
    let className = ''
    export { className as class }

    const SIZES = [
        {
            size: '640w',
            id: '640',
        },
        {
            size: '768w',
            id: '768',
        },
        {
            size: '1024w',
            id: '1024',
        },
        {
            size: '1366w',
            id: '1366',
        },
        {
            size: '1600w',
            id: '1600',
        },
        {
            size: '1920w',
            id: '1920',
        },
    ]

    let container
    let mustLoad = loadedImages.has(src)
    let loaded = loadedImages.has(src)

    $: placeholderSrc = `/img/${src}-tiny.jpeg`
    $: webpSrcset = generateSrcset(src, 'webp')
    $: srcset = generateSrcset(src, 'jpeg')
    $: fallbackSrc = `/img/${src}-full.jpeg`
    $: blur = !loaded

    function generateSrcset(src, format) {
        let srcset = ''
        let index = 0

        for (const { size, id } of SIZES) {
            srcset += `/img/${src}-${id}.${format} ${size}`

            if (index !== SIZES.length - 1) {
                srcset += ', '
            }

            index++
        }

        return srcset
    }

    function rectInViewport({ x, y, width, height }) {
        const VIEWPORT_HEIGHT =
            window.innerHeight || document.documentElement.clientHeight
        const VIEWPORT_WITH =
            window.innerWidth || document.documentElement.clientWidth
        const SCROLL_TOP = document.documentElement.scrollTop

        // The target is above the viewport
        if (y + height <= SCROLL_TOP) return false
        // The target is below the viewport
        if (y + height >= SCROLL_TOP + VIEWPORT_HEIGHT) return false

        return true
    }

    $: {
        if (container) {
            setupObservers()
        }
    }

    let observers = []

    function setupObservers() {
        if (loaded === true) return

        const LIMIT = 0.5

        let intersectedWithRoot = false
        let intersectedWithViewport = false

        const rootObserver = new IntersectionObserver(
            ([entry], observer) => {
                const isIntersectingWithRoot =
                    entry.isIntersecting && entry.intersectionRatio >= LIMIT

                if (isIntersectingWithRoot) {
                    intersectedWithRoot = true

                    if (intersectedWithViewport) {
                        mustLoad = true
                    }

                    observer.unobserve(container)
                }
            },
            {
                root,
                threshold: LIMIT,
            }
        )
        const viewportObserver = new IntersectionObserver(
            ([entry], observer) => {
                const isIntersectingWithViewport =
                    entry.isIntersecting && entry.intersectionRatio >= LIMIT

                if (isIntersectingWithViewport) {
                    intersectedWithViewport = true

                    if (intersectedWithRoot) {
                        mustLoad = true
                    }

                    observer.unobserve(container)
                }
            },
            {
                threshold: LIMIT,
            }
        )

        observers = [rootObserver, viewportObserver]

        observers.forEach(observer => observer.observe(container))
    }

    function cleanupObservers() {
        observers.forEach(observer => observer.unobserve(container))
    }

    onDestroy(cleanupObservers)

    function load(img) {
        img.onload = () => {
            loadedImages.add(src)

            setTimeout(() => {
                loaded = true
            }, 500)
        }
    }
</script>

<style type="postcss">
    img {
        @apply object-center object-cover absolute top-0 left-0 w-full h-full;
    }

    .container {
        transition: filter 0.5s ease;
    }

    .blur {
        filter: blur(10px);
    }
</style>

<div class="w-full flex justify-center items-center" style="min-height: 100px">
    <div class:blur bind:this={container} class="relative w-full container">
        <div class="w-full overflow-hidden">
            <div class="relative w-full" style="padding-bottom: {ratio}%" />

            <img
                src={placeholderSrc}
                {alt}
                class="{className}
                {loaded ? 'opacity-0' : 'opacity-100'}"
                on:click />

            {#if mustLoad}
                <picture>
                    <source type="image/webp" srcset={webpSrcset} {sizes} />
                    <source type="image/jpeg" {srcset} {sizes} />
                    <img
                        src={fallbackSrc}
                        use:load
                        {alt}
                        class="{className}
                        {!loaded ? 'opacity-0' : 'opacity-100'}"
                        on:click />
                </picture>
            {/if}
        </div>
    </div>
</div>
