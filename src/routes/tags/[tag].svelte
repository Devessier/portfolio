<script lang="ts">
	import { page } from '$app/stores';

	$: tag = $page.params.tag;
</script>

<p>Tag {tag}</p>
