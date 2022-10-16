import { writable, derived } from 'svelte/store';

export const freshNavigation = writable(undefined);

function createInputsStore() {
	const { subscribe, update } = writable({});

	return {
		subscribe,
		update: (id: string, input: string) => update((store) => ({ ...store, [id]: input }))
	};
}

export function createFormStore() {
	const inputs = createInputsStore();

	return {
		inputs,
		isValid: derived(inputs, ($inputs) =>
			Object.values($inputs).every(({ isValid }) => isValid === true)
		)
	};
}
