<script>
    export let href;
    export let active = false;
</script>

<style type="text/postcss">
    a {
        @apply relative py-2 overflow-x-hidden block tracking-widest;

        &::after {
            @apply absolute w-full h-2 inset-x-0 bottom-0 transition duration-300 transform ease-in-out -translate-x-full;

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

<a {href} class:active-link={active} class="">
    <slot />
</a>
