<script>
	import { getContext } from 'svelte';

	/** @type {{ slug: string; title: string }[]} */
	const steps = getContext('SERIES_STEPS');
	const isSeriesFinished = getContext('SERIES_FINISHED');
</script>

<p>
	{#if isSeriesFinished === true}
		The series contains the following articles:
	{:else}
		For the moment, the series contains the following articles:
	{/if}
</p>

<ul>
	{#each steps as step}
		<li>
			<a href="/writing/{step.slug}/">{step.title}</a>
		</li>
	{/each}
</ul>
