<script lang="ts">
	import { APP_URL } from './env';

	interface Facebook {
		'og:url'?: string;
		'og:title'?: string;
		'og:description'?: string;
	}

	interface Twitter {}

	export let title: string;
	export let description: string | undefined;
	export let canonical: string;
	export let facebook: Facebook = {};
	export let twitter: Twitter = {};

	let finalCanonical: string;
	$: {
		const canonicalUrl = new URL(canonical, APP_URL);

		finalCanonical = canonicalUrl.toString();
	}

	let finalDescription: string;
	$: finalDescription =
		description ||
		'Baptiste Devessier is a full stack web and XState freelance consultant. He also publishes screencasts on YouTube and writes articles.';

	let defaultFacebook: Facebook;
	$: defaultFacebook = {
		'og:url': finalCanonical,
		'og:title': title,
		'og:description': finalDescription
	};

	let finalFacebook: Facebook;
	$: finalFacebook = { ...defaultFacebook, ...facebook };
</script>

<svelte:head>
	<title>{title}</title>

	<meta name="description" content={finalDescription} />
	<link rel="canonical" href={finalCanonical} />

	{#each Object.entries(finalFacebook) as [name, content]}
		<meta property={name} {content} />
	{/each}
	{#each Object.entries(twitter) as [name, content]}
		<meta {name} {content} />
	{/each}
</svelte:head>
