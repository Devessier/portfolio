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

function createToastStore() {
	const { subscribe, update } = writable([]);

	let id = 0;

	return {
		subscribe,
		trigger({ title, text, buttons, timeout = 5000 }) {
			const toastId = id++;

			update((toasts) => [...toasts, { id: toastId, title, text, buttons }]);

			if (timeout > 0) {
				setTimeout(() => {
					this.dismiss(toastId);
				}, timeout);
			}
		},
		dismiss(id: number) {
			update((toasts) => toasts.filter(({ id: notificationId }) => notificationId !== id));
		}
	};
}

export const toasts = createToastStore();
