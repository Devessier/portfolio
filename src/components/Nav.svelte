<script>
    import NavLink from './NavLink.svelte';

    export let segment;

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
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Courgette&display=swap');

    .main-link-font {
        font-family: 'Courgette', cursive;
    }
</style>

<nav class="px-16 py-6">
    <ul class="flex items-center justify-between">
        <li>
            <a href="." class="main-link-font text-2xl tracking-wider">
                Devessier
            </a>
        </li>

        <div class="flex items-center">
            {#each links as { href, text }, index}
                <li class={index < links.length - 1 ? 'mr-10' : ''}>
                    <NavLink {href} active={segment === href}>{text}</NavLink>
                </li>
            {/each}
        </div>
    </ul>
</nav>
