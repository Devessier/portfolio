<script>
    import { fade } from 'svelte/transition';

    export let className = '';

    /**
     * Using a delay of the same duration in the `in` hook makes it possible
     * to wait until the outgoing element is asbent before allowing
     * the incoming element to enter.
     *
     * It's the equivalent of `mode="out-in"` in VUe.js land.
     */
    const TRANSITION_DURATION = 400;
</script>

<div
    in:fade={{ delay: TRANSITION_DURATION, duration: TRANSITION_DURATION }}
    out:fade={{ duration: TRANSITION_DURATION }}
    class={className}>
    <slot />
</div>
