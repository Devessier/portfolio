<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { VideoCamera, Rss, Mail } from '@steeze-ui/heroicons';
	import { MenuIcon, LogoIcon } from '$lib/Icons';

	import NavLink from './NavLink.svelte';

	// Should be changed if the default configuration of TailwindCSS is not used anymore.
	const BREAKPOINT = 768;

	const links = [
		{
			href: '/about/',
			text: 'About'
		},
		{
			href: '/projects/',
			text: 'Projects'
		},
		{
			href: '/writing/',
			text: 'Writing'
		},
		{
			href: '/talks/',
			text: 'Talks'
		},
		{
			href: '/notes/',
			text: 'Notes'
		},
		{
			href: '/contact/',
			text: 'Contact',
			icon: Mail
		},
		{
			href: 'https://youtube.com/@baptistedevessier',
			text: 'YouTube',
			external: true,
			icon: VideoCamera
		},
		{
			href: '/feed.xml',
			text: 'RSS',
			external: true,
			icon: Rss
		}
	];
	$: textLinks = links.filter((link) => link.icon === undefined);
	$: iconLinks = links.filter((link) => link.icon !== undefined);

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

	function handleWindowResize({
		currentTarget: { innerWidth }
	}: UIEvent & { currentTarget: EventTarget & Window }) {
		if (BREAKPOINT <= innerWidth && showNavBar) {
			showNavBar = false;
		}
	}
</script>

<svelte:window on:resize={handleWindowResize} />

<nav class="py-6">
	<div class="flex items-center justify-between">
		<a href="/" class="text-2xl tracking-wider main-link-font">
			<LogoIcon class="w-20 h-20" title="Accueil" />
		</a>

		<div class="items-center hidden md:flex space-x-6">
			{#each textLinks as { href, external, text }}
				<NavLink {href} {external} active={$page.url.pathname === href}>
					{text}
				</NavLink>
			{/each}

			{#each iconLinks as { href, external, text, icon }}
				<a
					{href}
					rel={external === true ? 'external' : undefined}
					target={external === true ? '_blank' : undefined}
					title={text}
					class="transition-colors duration-300 ease-in-out {$page.url.pathname === href
						? 'text-red-600'
						: ''}"
				>
					<Icon src={icon} class="w-6 h-6" />
				</a>
			{/each}
		</div>

		<div class="z-30 flex items-center md:hidden">
			<button on:click={toggle}>
				<span class="sr-only">
					{showNavBar ? 'Close drawer' : 'Open drawer'}
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
			{#each links as { href, text, external }}
				<NavLink
					{href}
					{external}
					active={$page.url.pathname === href}
					on:click={() => (showNavBar = false)}
				>
					{text}
				</NavLink>
			{/each}
		</div>
	{/if}
</nav>
