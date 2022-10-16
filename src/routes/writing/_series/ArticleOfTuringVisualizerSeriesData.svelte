<script>
	import { setContext } from 'svelte';
	import { parts, finished } from './turing-visualizer.json';

	export let articleTitle;

	$: currentArticleIndexZeroBased = parts.findIndex(({ title }) => title === articleTitle);
	$: {
		if (currentArticleIndexZeroBased === -1) {
			throw new Error(`Article not found: ${articleTitle}`);
		}
	}
	$: currentArticleIndexOneBased = currentArticleIndexZeroBased + 1;
	$: linkToPreviousArticle =
		currentArticleIndexZeroBased === 0
			? undefined
			: `/writing/${parts[currentArticleIndexZeroBased - 1].slug}/`;

	setContext('SERIES_STEPS', parts);
	setContext('SERIES_FINISHED', finished);
</script>

<slot articleIndex={currentArticleIndexOneBased} {linkToPreviousArticle} />
