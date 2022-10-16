<script lang="ts">
	import Page from '$lib/Page/Page.svelte';
	import Form, { notEmpty, emailValid } from '$lib/Form/index.svelte';
	import TextField from '$lib/Form/TextField.svelte';
	import TextArea from '$lib/Form/TextArea.svelte';
	import FormButton from '$lib/Form/FormButton.svelte';
	import {
		LocationMarkerIcon,
		GithubIcon,
		TwitterIcon,
		VideoCameraIcon,
		MailIcon
	} from '$lib/Icons';

	const title = 'Baptiste Devessier | Contact';
	const description = 'Contact me so that we can meet to work on your projects';
	const canonical = 'https://baptiste.devessier.fr/contact/';
	const schemas = [];
	const facebook = [
		{
			name: 'og:url',
			content: 'https://baptiste.devessier.fr/contact/'
		},
		{
			name: 'og:title',
			content: title
		},
		{
			name: 'og:description',
			content: description
		}
	];
	const twitter = [];

	const FORM_NAME = 'contact';

	let name = '';
	let email = '';
	let message = '';
	let isLoading = false;
	let done = false;
	let error;

	function encodeRequestBody(body) {
		return Object.entries(body)
			.map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
			.join('&');
	}

	async function handleSubmit(event) {
		isLoading = true;

		try {
			await fetch('/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				body: encodeRequestBody({
					'form-name': FORM_NAME,
					name,
					email,
					message
				})
			});

			error = false;
			done = true;
		} catch (e) {
			done = false;
			error = true;

			setTimeout(() => {
				error = false;
			}, 3000);
		} finally {
			setTimeout(() => {
				isLoading = false;
			}, 1000);
		}
	}

	const youtubeChannelUrl = 'https://www.youtube.com/channel/UCHkj5xmIUA357RS944tY5Tg';
	const communicationMeans = [
		{
			href: 'https://github.com/Devessier',
			text: 'Follow me on GitHub',
			icon: GithubIcon
		},
		{
			href: 'https://twitter.com/BDevessier',
			text: 'Follow me on Twitter',
			icon: TwitterIcon
		},
		{
			href: youtubeChannelUrl,
			text: 'Follow me on YouTube',
			icon: VideoCameraIcon
		},
		{
			separator: true,
			text: 'Paris, France',
			icon: LocationMarkerIcon
		},
		{
			href: 'mailto:baptiste@devessier.fr',
			text: 'baptiste@devessier.fr',
			icon: MailIcon
		}
	];
</script>

<Page {title} {description} {canonical} {schemas} {facebook} {twitter}>
	<h1 class="text-5xl font-cursive">Contact</h1>

	<div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-y-8">
		<ul class="flex flex-col">
			{#each communicationMeans as { href, text, icon, separator }, index}
				<li class="flex {index === 0 ? '' : separator === true ? 'mt-8' : 'mt-4'}">
					<svelte:element
						this={href === undefined ? 'div' : 'a'}
						rel={href !== undefined ? 'external' : undefined}
						{href}
						class="group flex items-center text-sm font-medium"
					>
						<svelte:component this={icon} class="w-6 h-6 stroke-current text-red-500" />

						<span
							class="ml-4 {href !== undefined ? 'transition-colors group-hover:text-red-500' : ''}"
						>
							{text}
						</span>
					</svelte:element>
				</li>
			{/each}
		</ul>

		<Form
			method="POST"
			name={FORM_NAME}
			class="grid grid-cols-1 sm:grid-cols-2 gap-4"
			on:submit={handleSubmit}
			let:isValid
		>
			<TextField
				name="name"
				autocomplete="name"
				label="Name"
				placeholder="Tom Delorme"
				bind:value={name}
				required
				rules={[notEmpty]}
			/>
			<TextField
				name="email"
				autocomplete="email"
				label="Email address"
				placeholder="tom.delorme@gmail.com"
				type="email"
				bind:value={email}
				required
				rules={[notEmpty, emailValid]}
			/>

			<TextArea
				name="message"
				label="Message"
				placeholder="Hi Baptiste, …"
				bind:value={message}
				class="sm:col-span-2"
				required
				rules={[notEmpty]}
			/>

			<div class="sm:col-span-2 flex justify-end">
				<FormButton {isValid} {isLoading} {done} {error} />
			</div>
		</Form>
	</div>
</Page>
