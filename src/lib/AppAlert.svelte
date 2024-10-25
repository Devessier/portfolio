<script>
	import { Icon } from '@steeze-ui/svelte-icon';
	import { Exclamation, ExclamationCircle, InformationCircle } from '@steeze-ui/heroicons';
	import { clsx } from 'clsx';

	/** @type {import('./AppAlert.types').AppAlertType} */
	export let type = 'error';
</script>

<div
	class={clsx('border-l-8 px-4 py-6 my-10 flex flex-col gap-y-4', {
		'bg-red-50 border-red-400': type === 'error',
		'bg-yellow-50 border-yellow-400': type === 'warning',
		'bg-blue-50 border-blue-400': type === 'note'
	})}
>
	<div class="flex gap-x-2 items-center">
		<div class="shrink-0">
			<Icon
				src={type === 'warning'
					? Exclamation
					: type === 'error'
					? ExclamationCircle
					: InformationCircle}
				theme="solid"
				class={clsx('h-6 w-6', {
					'text-yellow-400': type === 'warning',
					'text-red-400': type === 'error',
					'text-blue-400': type === 'note'
				})}
			/>
		</div>

		<p
			class={clsx('text-base font-medium m-0', {
				'text-yellow-800': type === 'warning',
				'text-red-800': type === 'error',
				'text-blue-800': type === 'note'
			})}
		>
			{#if type === 'warning'}
				Warning
			{:else if type === 'error'}
				Danger
			{:else if type === 'note'}
				Note
			{/if}
		</p>
	</div>

	<div class="first:[&>*]:mt-0 last:[&>*]:mb-0">
		<slot />
	</div>
</div>
