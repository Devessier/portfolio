<script lang="ts">
	export let videoId: string;
	export let videoTitle: string | undefined = undefined;
	export let thumbnailQuality: 'low' | 'high' | undefined = 'low';
</script>

<div class="grid grid-cols-1 aspect-video w-full">
	{@html `
		<lite-youtube
			videoid="${videoId}"
			${videoTitle === undefined ? '' : `title="${videoTitle}"`}
			style="${
				thumbnailQuality === 'high'
					? `background-image: url('https://i.ytimg.com/vi/${videoId}/sddefault.jpg');`
					: ''
			}"
		></lite-youtube>
	`}
</div>
