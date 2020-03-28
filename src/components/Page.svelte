<script>
    import { fade } from 'svelte/transition'

    import SEO from './SEO.svelte'

    export let title = ''
    export let description = ''
    export let schemas = []
    let className = ''
    export { className as class }

    /**
     * Using a delay of the same duration in the `in` hook makes it possible
     * to wait until the outgoing element is asbent before allowing
     * the incoming element to enter.
     *
     * It's the equivalent of `mode="out-in"` in VUe.js land.
     */
    const TRANSITION_DURATION = 400
</script>

<SEO {title} {description} {schemas} />

<div
    in:fade={{ delay: TRANSITION_DURATION, duration: TRANSITION_DURATION }}
    out:fade={{ duration: TRANSITION_DURATION }}
    class="absolute w-full mt-2 lg:mt-10 {className}">
    <slot />
</div>
