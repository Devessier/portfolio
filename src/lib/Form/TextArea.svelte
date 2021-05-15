<script>
	import { onMount } from 'svelte';

	import Input from './Input.svelte';

	export let value;
	export let placeholder;
	export let label;
	export let name;
	export let rules = [];
	export let required = false;
	export let lazy = true;

	let className = '';
	export { className as class };

	let ref;

	function resizeTextarea() {
		ref.style.height = 'auto';
		ref.style.height = `${ref.scrollHeight}px`;
	}

	onMount(() => {
		ref.style.height = `${ref.scrollHeight}px`;
	});
</script>

<Input {lazy} {rules} {value} {label} class={className} let:id let:isValid let:baseClass>
	<textarea
		{id}
		bind:this={ref}
		bind:value
		{name}
		{placeholder}
		class="{baseClass} resize-y overflow-y-hidden"
		{required}
		aria-required={required}
		aria-invalid={!isValid}
		on:input={resizeTextarea}
	/>
</Input>
