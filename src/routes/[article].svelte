<script lang="ts">
	import { page } from '$app/stores';
	import Page from '$lib/Page/Page.svelte';

	$: article = $page.params.article;

	const title = 'Generate and put in context or compute from context externally XState';
	const description =
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In delectus, aliquid beatae officia placeat iusto sint cumque corporis deserunt magnam ad voluptatibus, culpa obcaecati accusamus, quidem recusandae. Qui, nulla error!';
	// TODO: to be defined
	const canonical = 'https://baptiste.devessier.fr/';
	const schemas = [];
	const facebook = [
		{
			name: 'og:url',
			content: 'https://baptiste.devessier.fr/'
		},
		{
			name: 'og:title',
			content: title
		},
		{
			name: 'og:description',
			content: description
		}
	];
	const twitter = [];

	const tags = [
		{
			title: 'Front-end',
			slug: 'front-end'
		},
		{
			title: 'Temporal',
			slug: 'temporal'
		},
		{
			title: 'Testing',
			slug: 'testing'
		}
	];
</script>

<Page class="pb-16" {title} {description} {canonical} {schemas} {facebook} {twitter}>
	<div class="max-w-prose text-lg mx-auto">
		<div class="flex items-center justify-center flex-wrap mb-2">
			{#each tags as { title, slug }}
				<a
					href="/tags/{slug}"
					class="border-gray-300 mb-2 border text-gray-600 bg-white hover:bg-gray-50 transition-colors duration-100 ease-out font-normal text-xs px-3 py-1 rounded-2xl flex-shrink-0 mx-1"
				>
					{title}
				</a>
			{/each}
		</div>

		<h1
			class="text-3xl text-center font-cursive leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
		>
			{title}
		</h1>

		<p class="mt-8 text-xl text-gray-500 leading-8">{description}</p>
	</div>

	<div class="mt-6 prose prose-red prose-lg text-gray-500 mx-auto">
		<p>
			Faucibus commodo massa rhoncus, volutpat. <strong>Dignissim</strong> sed
			<strong>eget risus enim</strong>. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
			praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus
			commodo massa rhoncus, volutpat. Dignissim sed eget risus enim.
			<a href="#">Mattis mauris semper</a> sed amet vitae sed turpis id.
		</p>
		<ul>
			<li>Quis elit egestas venenatis mattis dignissim.</li>
			<li>Cras cras lobortis vitae vivamus ultricies facilisis tempus.</li>
			<li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
		</ul>
		<p>
			Quis semper vulputate aliquam venenatis egestas sagittis quisque orci. Donec commodo sit
			viverra aliquam porttitor ultrices gravida eu. Tincidunt leo, elementum mattis elementum ut
			nisl, justo, amet, mattis. Nunc purus, diam commodo tincidunt turpis. Amet, duis sed elit
			interdum dignissim.
		</p>
		<h2>From beginner to expert in 30 days</h2>
		<p>
			Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum
			urna nibh. Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas
			pellentesque id sed tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi.
			Pellentesque nam sed nullam sed diam turpis ipsum eu a sed convallis diam.
		</p>
		<blockquote>
			<p>
				Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur
				neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi.
			</p>
		</blockquote>
		<p>
			Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper
			sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus
			varius sit neque erat velit.
		</p>
		<figure>
			<img
				class="w-full rounded-lg"
				src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
				alt=""
				width="1310"
				height="873"
			/>
			<figcaption>Sagittis scelerisque nulla cursus in enim consectetur quam.</figcaption>
		</figure>
		<h2>Everything you need to get up and running</h2>
		<p>
			Purus morbi dignissim senectus mattis <a href="#">adipiscing</a>. Amet, massa quam varius orci
			dapibus volutpat cras. In amet eu ridiculus leo sodales cursus tristique. Tincidunt sed tempus
			ut viverra ridiculus non molestie. Gravida quis fringilla amet eget dui tempor dignissim.
			Facilisis auctor venenatis varius nunc, congue erat ac. Cras fermentum convallis quam.
		</p>
		<p>
			Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper
			sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus
			varius sit neque erat velit.
		</p>
	</div>
</Page>
