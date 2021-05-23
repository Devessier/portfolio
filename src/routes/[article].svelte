<script lang="ts">
	import { page } from '$app/stores';

	$: article = $page.params.article;
</script>

<p>Article {article}</p>
