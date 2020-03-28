<script>
    export let href
    export let active = false

    let className

    export { className as class }
</script>

<style lang="postcss">
    a {
        @apply relative py-2 overflow-x-hidden block tracking-widest font-medium;

        &::after {
            @apply absolute w-2/5 h-2 inset-x-0 bottom-0 transition duration-300 transform ease-in-out -translate-x-full bg-white;

            content: '';
        }

        &:hover {
            &::after {
                @apply bg-red-400;
            }
        }

        &.active-link {
            &::after {
                @apply bg-red-500;
            }
        }

        &:hover,
        &.active-link {
            &::after {
                @apply translate-x-0;
            }
        }
    }
</style>

<a {href} rel="prefetch" class:active-link={active} class={className} on:click>
    <slot />
</a>
