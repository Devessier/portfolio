<script>
	/** @type {import('./AppAlert.types').AppAlertType} */
	export let type = 'error';

	/** @type {Record<import('./AppAlert.types').AppAlertType, string>} */
	const classesPerType = {
		error: 'bg-red-50 border-red-400',
		warning: 'bg-yellow-50 border-yellow-300 prose-a:text-yellow-700 hover:prose-a:text-yellow-600'
	};

	$: classes = classesPerType[type];
</script>

<div class="border-l-8 p-4 {classes}">
	<slot />
</div>
