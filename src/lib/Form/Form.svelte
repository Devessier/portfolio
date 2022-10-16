<script context="module" lang="ts">
	const EMAIL_REGEX =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	export function notEmpty(value: string) {
		return value ? true : 'Required';
	}

	export function emailValid(value: string) {
		return EMAIL_REGEX.test(value) || 'Invalid email address';
	}
</script>

<script lang="ts">
	import { setContext, createEventDispatcher } from 'svelte';
	import { createFormStore } from '$lib/stores';

	export let method: 'GET' | 'POST' = 'POST';
	export let name: string;
	let className: string | undefined = undefined;
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
