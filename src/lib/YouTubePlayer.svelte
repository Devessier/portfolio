<script lang="ts">
	export let videoId: string;
</script>

<div class="grid grid-cols-1 aspect-video w-full">
	{@html `<lite-youtube videoid="${videoId}"></lite-youtube>`}
</div>
