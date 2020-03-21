<script>
    export let events = [];

    let className;

    export { className as class };
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
    {#each events as { title, description, date }}
        <p class="text-red-500 font-semibold text-left md:text-right">{date}</p>

        <div class="ml-0 md:ml-4 mb-6">
            <slot name="event" {title} {description} />
        </div>
    {/each}
</ul>
