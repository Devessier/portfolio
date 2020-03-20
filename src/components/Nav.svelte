<script>
    import { fade } from 'svelte/transition';
    import resolveConfig from 'tailwindcss/resolveConfig';
    import tailwindConfig from '../../tailwind.js';

    import NavLink from './NavLink.svelte';
    import MenuIcon from './MenuIcon.svelte';

    export let segment;

    const fullConfig = resolveConfig(tailwindConfig) || '768px';
    const BREAKPOINT = Number(fullConfig.theme.screens.md.replace('px', ''));

    const links = [
        {
            href: 'my-way',
            text: 'Parcours',
        },
        {
            href: 'projects',
            text: 'Projets',
        },
        {
            href: 'contact',
            text: 'Contact',
        },
    ];

    let showNavBar = false;

    function toggle() {
        showNavBar = !showNavBar;
    }

    function handleWindowResize({ target: { innerWidth } }) {
        if (BREAKPOINT <= innerWidth && showNavBar) {
            showNavBar = false;
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Geo&display=swap&text=Devessier');

    .main-link-font {
        font-family: 'Geo', sans-serif;
    }
</style>

<svelte:window on:resize={handleWindowResize} />

<nav class="py-6">
    <div class="flex items-center justify-between">
        <a href="." class="main-link-font text-2xl tracking-wider">Devessier</a>

        <div class="hidden md:flex items-center">
            {#each links as { href, text }, index}
                <NavLink
                    {href}
                    active={segment === href}
                    class={index < links.length - 1 ? 'mr-10' : ''}>
                    {text}
                </NavLink>
            {/each}
        </div>

        <div class="flex md:hidden items-center z-20">
            <button on:click={toggle}>
                <MenuIcon width="30" height="30" />
            </button>
        </div>
    </div>

    {#if showNavBar}
        <div
            class="absolute inset-0 bg-white text-red-500 block md:hidden z-10
            pt-20 px-10"
            transition:fade={{ duration: 200 }}>
            {#each links as { href, text }, index}
                <NavLink
                    {href}
                    active={segment === href}
                    on:click={() => (showNavBar = false)}
                    class="font-semibold">
                    {text}
                </NavLink>
            {/each}

        </div>
    {/if}

</nav>
