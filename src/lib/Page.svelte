<script>
	import { clsx } from 'clsx';

	let className = '';
	export { className as class };
</script>

<div class={clsx('w-full mt-2 lg:mt-10', className)}>
	<slot />
</div>
