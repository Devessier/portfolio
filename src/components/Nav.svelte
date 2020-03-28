<script>
    import { fade } from 'svelte/transition'

    import NavLink from './NavLink.svelte'
    import { MenuIcon, LogoIcon } from './Icons'

    export let segment

    // Should be changed if the default configuration of TailwindCSS is not used anymore.
    const BREAKPOINT = 768

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
    ]

    let showNavBar = false

    function toggle() {
        showNavBar = !showNavBar
    }

    function handleWindowResize({ target: { innerWidth } }) {
        if (BREAKPOINT <= innerWidth && showNavBar) {
            showNavBar = false
        }
    }
</script>

<style>
    .menu-btn-active {
        top: 32.25px;
        right: 1rem;

        @screen sm {
            right: 1.5rem;
        }
    }
</style>

<svelte:window on:resize={handleWindowResize} />

<nav class="py-6">
    <div class="flex items-center justify-between">
        <a
            href="."
            rel="prefetch"
            class="text-2xl tracking-wider main-link-font">
            <LogoIcon class="w-20 h-20" title="bd" />
        </a>

        <div class="items-center hidden md:flex">
            {#each links as { href, text }, index}
                <NavLink
                    {href}
                    active={segment === href}
                    class={index < links.length - 1 ? 'mr-10' : ''}>
                    {text}
                </NavLink>
            {/each}
        </div>

        <div
            class="z-30 flex items-center md:hidden {showNavBar ? 'fixed menu-btn-active' : ''}">
            <button on:click={toggle}>
                <span class="sr-only">
                    {showNavBar ? 'Fermer le menu' : 'Ouvrir le menu'}
                </span>

                <MenuIcon width="30" height="30" opened={showNavBar} />
            </button>
        </div>
    </div>

    {#if showNavBar}
        <div
            class="fixed inset-0 block px-10 pt-20 bg-white md:hidden z-20 flex
            flex-col items-start"
            transition:fade={{ duration: 200 }}>
            {#each links as { href, text }}
                <NavLink
                    {href}
                    active={segment === href}
                    on:click={() => (showNavBar = false)}
                    class="font-bold">
                    {text}
                </NavLink>
            {/each}
        </div>
    {/if}
</nav>
