<script>
	export let indexInSeries;
	$: indexInSeriesInEnglish =
		indexInSeries === undefined ? undefined : toEnglishNumber(indexInSeries - 1);

	function toEnglishNumber(indexZeroBased) {
		const englishNumbers = [
			'first',
			'second',
			'third',
			'fourth',
			'fifth',
			'sixth',
			'seventh',
			'eighth',
			'ninth',
			'tenth'
		];
		const englishWord = englishNumbers[indexZeroBased];
		if (englishWord === undefined) {
			throw new Error('No english word for index ' + indexZeroBased);
		}

		return englishWord;
	}
</script>

<p>
	This article is the {indexInSeriesInEnglish} one of
	<a href="/tags/turing-visualizer/">
		a series about our Turing machine visualizer built with XState
	</a>.
</p>
