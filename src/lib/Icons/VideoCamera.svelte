<script lang="ts">
	import { Icon } from '@steeze-ui/svelte-icon';
	import { VideoCamera } from '@steeze-ui/heroicons';

	let className: string;
	export { className as class };
</script>

<Icon src={VideoCamera} class={className} />
