<script>
	import Page from '$lib/Page/Page.svelte';
	import Form, { notEmpty, emailValid } from '$lib/Form/index.svelte';
	import TextField from '$lib/Form/TextField.svelte';
	import TextArea from '$lib/Form/TextArea.svelte';
	import FormButton from '$lib/Form/FormButton.svelte';
	import { LocationMarkerIcon, AtIcon } from '$lib/Icons';

	const title = 'Baptiste Devessier | Contact';
	const description = 'Contactez-moi pour que nous travaillions ensemble sur vos projets';
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
</script>

<Page
	{title}
	{description}
	{canonical}
	{schemas}
	{facebook}
	{twitter}
	class="pb-8 grid grid-cols-1 md:grid-cols-2"
>
	<div>
		<h1 class="text-4xl mb-6 sm:mb-12">Contact</h1>

		<div class="flex mb-3">
			<LocationMarkerIcon class="w-6 h-6 stroke-current text-red-500 mr-2" aria-hidden="true" />

			<span>Paris, France</span>
		</div>

		<div class="flex mb-4 md:mb-0">
			<AtIcon class="w-6 h-6 stroke-current text-red-500 mr-2" aria-hidden="true" />

			<a href="mailto:baptiste@devessier.fr" class="block"> baptiste@devessier.fr </a>
		</div>
	</div>

	<Form
		method="POST"
		name={FORM_NAME}
		class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2"
		on:submit={handleSubmit}
		let:isValid
	>
		<TextField
			name="name"
			autocomplete="name"
			label="Nom"
			placeholder="Tom Delorme"
			bind:value={name}
			required
			rules={[notEmpty]}
		/>
		<TextField
			name="email"
			autocomplete="email"
			label="Adresse mail"
			placeholder="tom.delorme@gmail.com"
			type="email"
			bind:value={email}
			required
			rules={[notEmpty, emailValid]}
		/>

		<TextArea
			name="message"
			label="Message"
			placeholder="Bonjour Baptiste, …"
			bind:value={message}
			class="sm:col-span-2"
			required
			rules={[notEmpty]}
		/>

		<div class="sm:col-span-2">
			<FormButton {isValid} {isLoading} {done} {error} />
		</div>
	</Form>
</Page>
