<script lang="ts">
	import { page } from '$app/stores';

	$: topic = $page.params.topic;
</script>

<p>Topic: {topic}</p>
