<script>
	import Loader from './Loader.svelte';
	import { CheckIcon, XIcon } from '$lib/Icons';

	export let isValid = true;
	export let isLoading = false;
	export let done = false;
	export let error = false;

	const STATUSES = {
		LOADING: 'LOADING',
		INVALID: 'INVALID',
		DONE: 'DONE',
		ERROR: 'ERROR',
		DEFAULT: 'DEFAULT'
	};

	const STATES = {
		[STATUSES.LOADING]: {
			disabled: true,
			class: 'bg-red-500 focus:bg-red-400 text-white cursor-wait',
			hideText: true,
			icon: Loader,
			text: 'Loading'
		},
		[STATUSES.INVALID]: {
			disabled: true,
			class: 'bg-gray-300 text-gray-800 cursor-not-allowed',
			hideText: false,
			text: 'Invalid text fields'
		},
		[STATUSES.DONE]: {
			disabled: true,
			class: 'bg-green-400 text-white cursor-default',
			hideText: true,
			icon: CheckIcon,
			text: 'Success'
		},
		[STATUSES.ERROR]: {
			disabled: true,
			class: 'bg-red-700 focus:bg-red-600 text-white cursor-default',
			hideText: true,
			icon: XIcon,
			text: 'Error'
		},
		[STATUSES.DEFAULT]: {
			disabled: false,
			class: 'bg-red-700 hover:bg-red-600 focus:bg-red-600 text-white cursor-pointer',
			hideText: false,
			text: 'Send'
		}
	};

	let status = STATUSES.DEFAULT;
	$: {
		if (!isValid) {
			status = STATUSES.INVALID;
		} else if (isLoading) {
			status = STATUSES.LOADING;
		} else if (done) {
			status = STATUSES.DONE;
		} else if (error) {
			status = STATUSES.ERROR;
		} else {
			status = STATUSES.DEFAULT;
		}
	}
	$: state = STATES[status];
	$: disabled = state.disabled;
	$: className = state.class;
	$: hideText = state.hideText;
	$: icon = state.icon;
	$: text = state.text;

	let shake = false;
	$: shake = !isLoading && error;
	$: shakeDelay = error ? 200 : 0;
</script>

<button
	type="submit"
	{disabled}
	class="relative px-4 py-2 rounded shadow focus:outline-none
    transition-colors duration-150 text-sm font-medium {shake ? 'shake' : ''}
    {className}"
	style="animation-delay: {shakeDelay}ms"
	on:animationend={() => (shake = false)}
>
	<span class={hideText ? 'opacity-0' : 'opacity-100'} aria-hidden={hideText}> Send </span>

	{#if icon !== undefined}
		<div
			class="absolute inset-0 w-full h-full flex items-center
            justify-center"
		>
			<svelte:component
				this={icon}
				class="w-6 h-6 stroke-current"
				transition={isLoading ? null : true}
				duration={isLoading ? null : error ? 200 : 600}
				ariaLabel={text}
			/>
		</div>
	{/if}
</button>

<style>
	/* https://css-tricks.com/snippets/css/shake-css-keyframe-animation/ */

	.shake {
		animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
		transform: translate3d(0, 0, 0);
		backface-visibility: hidden;
		perspective: 1000px;
	}

	@keyframes shake {
		10%,
		90% {
			transform: translate3d(-2px, 0, 0);
		}

		20%,
		80% {
			transform: translate3d(4px, 0, 0);
		}

		30%,
		50%,
		70% {
			transform: translate3d(-8px, 0, 0);
		}

		40%,
		60% {
			transform: translate3d(8px, 0, 0);
		}
	}
</style>
