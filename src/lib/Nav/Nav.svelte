<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { MenuIcon, LogoIcon } from '$lib/Icons';

	import NavLink from './NavLink.svelte';

	export let segment: string;

	// Should be changed if the default configuration of TailwindCSS is not used anymore.
	const BREAKPOINT = 768;

	const links = [
		{
			href: '/my-journey',
			text: 'My journey'
		},
		{
			href: '/projects',
			text: 'Projects'
		},
		{
			href: '/writing',
			text: 'Writing'
		},
		{
			href: '/contact',
			text: 'Contact'
		}
	];

	let mounted = false;
	onMount(() => {
		mounted = true;
	});

	let showNavBar = false;

	$: {
		if (mounted) {
			if (showNavBar) {
				document.body.classList.add('overflow-hidden');
			} else {
				document.body.classList.remove('overflow-hidden');
			}
		}
	}

	function toggle() {
		showNavBar = !showNavBar;
	}

	function handleWindowResize({ target: { innerWidth } }) {
		if (BREAKPOINT <= innerWidth && showNavBar) {
			showNavBar = false;
		}
	}
</script>

<svelte:window on:resize={handleWindowResize} />

<nav class="py-6">
	<div class="flex items-center justify-between">
		<a href="/" sveltekit:prefetch class="text-2xl tracking-wider main-link-font">
			<LogoIcon class="w-20 h-20" title="Accueil" />
		</a>

		<div class="items-center hidden md:flex">
			{#each links as { href, text }, index}
				<NavLink
					{href}
					active={segment === href}
					class={index < links.length - 1 ? 'mr-8 lg:mr-10' : ''}
				>
					{text}
				</NavLink>
			{/each}
		</div>

		<div class="z-30 flex items-center md:hidden">
			<button on:click={toggle}>
				<span class="sr-only">
					{showNavBar ? 'Fermer le menu' : 'Ouvrir le menu'}
				</span>

				<MenuIcon width={30} height={30} opened={showNavBar} />
			</button>
		</div>
	</div>

	{#if showNavBar}
		<div
			class="fixed inset-0 px-10 pt-20 bg-white md:hidden z-20 flex flex-col items-start"
			transition:fade={{ duration: 200 }}
		>
			{#each links as { href, text }}
				<NavLink
					{href}
					active={segment === href}
					on:click={() => (showNavBar = false)}
					class="font-bold"
				>
					{text}
				</NavLink>
			{/each}
		</div>
	{/if}
</nav>
