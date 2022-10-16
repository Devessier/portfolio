<script lang="ts">
	import AppBadge from '$lib/AppBadge.svelte';
	import { formatDate } from '$lib/format-date';
	import type { TalkPreview, TalkPreviewFormatted } from '$lib/types';

	export let talks: TalkPreview[];

	let formattedTalks: TalkPreviewFormatted[];
	$: formattedTalks = talks.map(({ datetime, ...talk }) => ({
		...talk,
		datetime,
		formattedDatetime: formatDate(datetime)
	}));
</script>

<h1 class="text-5xl font-cursive">
	<slot name="title" />
</h1>

<div class="mt-12">
	{#if formattedTalks.length > 0}
		<ul class="grid grid-cols-1 gap-y-16">
			{#each formattedTalks as { title, description, link, datetime, formattedDatetime, tags }}
				<li class="flex flex-col max-w-prose">
					<time {datetime} class="text-red-700 italic font-medium text-sm">
						{formattedDatetime}
					</time>

					<a rel="external" href={link} class="mt-2">
						<h2 class="text-2xl leading-8 font-semibold hover:underline">
							{title}
						</h2>
					</a>

					<p class="mt-4 text-gray-600 leading-7">
						{description}
					</p>

					<div class="flex mt-4">
						{#each tags as tag, index}
							<AppBadge href={undefined} class={index === 0 ? 'ml-0' : 'ml-2'}>
								{tag}
							</AppBadge>
						{/each}
					</div>
				</li>
			{/each}
		</ul>
	{:else}
		<div class="flex flex-col items-center mt-6">
			<p class="text-xl font-medium">
				<slot name="empty" />
			</p>
		</div>
	{/if}
</div>
