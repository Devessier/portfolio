<script>
    import { fade } from 'svelte/transition';

    export let events = [];

    let className;

    export { className as class };

    const FADE_DURATION = 200;
    const FADE_INTERVAL = 100;
</script>

<style>
    ul {
        @apply grid;

        grid-template-columns: 1fr;

        @screen md {
            grid-template-columns: max-content 1fr;
        }
    }
</style>

<ul class={className}>
    {#each events as { title, description, date }, index}
        <p
            class="text-red-500 font-semibold text-left md:text-right"
            in:fade={{ duration: FADE_DURATION, delay: FADE_INTERVAL * index }}>
            {date}
        </p>

        <div
            class="ml-0 md:ml-4 mb-6"
            in:fade={{ duration: FADE_DURATION, delay: FADE_INTERVAL * index }}>
            <slot name="event" {title} {description} />
        </div>
    {/each}
</ul>
