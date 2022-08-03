<script>
	import { setContext } from 'svelte';
	import { page } from '$app/stores';
	import { parts, finished } from './turing-visualizer.json';

	$: currentArticleIndexZeroBased = parts.findIndex(({ slug }) =>
		$page.url.pathname.includes(slug)
	);
	$: currentArticleIndexOneBased =
		currentArticleIndexZeroBased === -1 ? undefined : currentArticleIndexZeroBased + 1;
	$: linkToPreviousArticle =
		currentArticleIndexZeroBased <= 0
			? undefined
			: `/writing/${parts[currentArticleIndexZeroBased - 1].slug}/`;

	setContext('SERIES_STEPS', parts);
	setContext('SERIES_FINISHED', finished);
</script>

<slot articleIndex={currentArticleIndexOneBased} {linkToPreviousArticle} />
