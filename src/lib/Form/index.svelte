<script context="module">
	const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	export function notEmpty(value) {
		return value ? true : 'Le champ est requis';
	}

	export function emailValid(value) {
		return EMAIL_REGEX.test(value) || "L'adresse mail n'est pas valide";
	}
</script>

<script>
	import { setContext, createEventDispatcher } from 'svelte';
	import { createFormStore } from '$lib/stores';

	export let method = 'POST';
	export let name;
	let className;
	export { className as class };

	const dispatch = createEventDispatcher();

	const { inputs, isValid } = createFormStore();
	setContext('inputs', inputs);

	function validate() {
		let valid = true;

		for (const input of Object.values($inputs)) {
			const result = input.validate();
			if (result !== true) valid = false;
		}

		if (valid === true) {
			dispatch('submit');
		}
	}
</script>

<form novalidate {method} {name} class={className} on:submit|preventDefault={validate}>
	<slot isValid={$isValid} />
</form>
