<script>
    import Nav from '../components/Nav.svelte';

    export let segment;
</script>

<Nav {segment} />

<main class="flex-grow relative h-full flex flex-col">
    <slot />
</main>
