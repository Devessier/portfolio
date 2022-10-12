<script lang="ts">
	import type { WritingPreview } from '$lib/types';
	import BlogPostsListBase from './BlogPostsListBase.svelte';

	export let articles: WritingPreview[];
</script>

<h1 class="text-5xl font-cursive">
	<slot name="title" />
</h1>

<div class="mt-12">
	<BlogPostsListBase {articles}>
		<svelte:fragment slot="empty">
			<div class="flex flex-col items-center mt-6">
				<p class="text-xl font-medium">
					<slot name="empty" />
				</p>
			</div>
		</svelte:fragment>
	</BlogPostsListBase>
</div>
