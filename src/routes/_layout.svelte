<script>
    import Nav from '../components/Nav.svelte';

    export let segment;
</script>

<Nav {segment} />

<main class="relative flex flex-col flex-grow h-full">
    <slot />
</main>
