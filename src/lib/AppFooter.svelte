<script>
	import { LogoIcon } from './Icons';

	const internalLinks = [
		{
			text: 'Home',
			href: '/'
		},
		{
			text: 'About',
			href: '/about/'
		},
		{
			text: 'RSS',
			href: '/feed.xml/'
		},
		{
			text: 'Privacy Policy',
			href: '/privacy-policy/'
		}
	];

	const externalLinks = [
		{
			text: 'GitHub',
			href: 'https://github.com/Devessier',
			external: true
		},
		{
			text: 'Twitter',
			href: 'https://twitter.com/BDevessier',
			external: true
		},
		{
			text: 'YouTube',
			href: 'https://www.youtube.com/channel/UCHkj5xmIUA357RS944tY5Tg',
			external: true
		},
		{
			text: 'Contact',
			href: '/contact/'
		}
	];
</script>

<!-- The design of the footer has been inspired by the one of: https://www.swyx.io, https://www.joshwcomeau.com/ -->

<footer class="bg-white pt-10 pb-20 border-t border-gray-200 grid grid-cols-1 lg:grid-cols-3 gap-2">
	<div>
		<a href="/" class="inline-block">
			<LogoIcon class="w-20 h-20 -my-4" />
		</a>
	</div>

	<ul class="flex flex-col gap-2">
		{#each internalLinks as { text, href, external }}
			<li>
				<a
					{href}
					rel={external === true ? 'external' : undefined}
					class="font-medium hover:underline">{text}</a
				>
			</li>
		{/each}
	</ul>

	<ul class="flex flex-col gap-2">
		{#each externalLinks as { text, href, external }}
			<li>
				<a
					{href}
					rel={external === true ? 'external' : undefined}
					class="font-medium hover:underline">{text}</a
				>
			</li>
		{/each}
	</ul>
</footer>
