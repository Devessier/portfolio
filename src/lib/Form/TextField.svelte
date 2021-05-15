<script lang="ts">
	import Input from './Input.svelte';

	export let value;
	export let label = 'off';
	export let type = 'text';
	export let placeholder;
	export let name;
	export let autocomplete = 'off';
	export let rules = [];
	export let required = false;
	export let lazy = true;

	let className = '';
	export { className as class };

	function handleInput({ target }: Event) {
		const { value: newValue } = target as HTMLInputElement;

		if (['number', 'range'].includes(type)) {
			value = +newValue;
		} else {
			value = newValue;
		}
	}
</script>

<Input {lazy} {rules} {value} {label} class={className} let:id let:isValid let:baseClass>
	<input
		{id}
		{name}
		{placeholder}
		{autocomplete}
		{type}
		{required}
		aria-required={required}
		aria-invalid={!isValid}
		on:input={handleInput}
		class={baseClass}
	/>
</Input>
