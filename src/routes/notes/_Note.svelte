<script>
	import { formatDate } from '$lib/format-date';

	export let datetime;

	$: formattedDatetime = formatDate(datetime);
</script>

<article>
	<time {datetime} class="text-red-700 italic font-medium text-sm">
		{formattedDatetime}
	</time>

	<slot />
</article>
