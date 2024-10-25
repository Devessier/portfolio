<script lang="ts">
	import { Icon } from '@steeze-ui/svelte-icon';
	import { AcademicCap, ClipboardCheck, Hashtag } from '@steeze-ui/heroicons';
	import { LogoIcon } from '$lib/Icons';
	import '../../../app.postcss';
	import '../../shiki.css';
	import type { PageData } from './$types';
	import Seo from '$lib/SEO.svelte';

	export let data: PageData;
	$: code = data.code;
</script>

<Seo
	title="State of XState Survey"
	description="Participate in State of XState Survey and get insider insights into XStaters' practices."
	canonical="/state-of-xstate/survey/"
/>

<div class="bg-white">
	<main>
		<!-- Hero section -->
		<div class="bg-white">
			<div class="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
				<div
					class="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40"
				>
					<div class="px-6 lg:px-0 lg:pt-4">
						<div class="mx-auto max-w-2xl">
							<div class="max-w-lg">
								<LogoIcon class="w-20 h-20" />
								<h1 class="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
									Participate in State of XState Survey
								</h1>
								<p class="mt-6 text-lg leading-8 text-gray-600">
									I'm preparing a report on the current state of XState and conducting a survey to
									collect your valuable feedback that will directly contribute to shape the report.
								</p>
								<p class="mt-6 text-lg leading-8 text-gray-600">
									Completing the survey will take <b>5 minutes</b>, and you'll get insider insights
									into XStaters' practices.
								</p>
								<div class="mt-10 flex items-center gap-x-6">
									<a
										href="#survey"
										class="rounded-md bg-red-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
										>Take the Survey Now</a
									>
								</div>
							</div>
						</div>
					</div>
					<div class="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
						<div
							class="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-red-500/10 ring-1 ring-red-50 md:-mr-20 lg:-mr-36"
							aria-hidden="true"
						/>
						<div class="shadow-lg md:rounded-3xl">
							<div
								class="bg-red-400 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]"
							>
								<div
									class="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-red-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"
									aria-hidden="true"
								/>
								<div class="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
									<div class="mx-auto max-w-2xl md:mx-0 md:max-w-none">
										<div class="w-screen overflow-hidden rounded-tl-xl bg-gray-900">
											<div class="flex bg-gray-800/40 ring-1 ring-white/5">
												<div class="-mb-px flex text-sm font-medium leading-6 text-gray-400">
													<div
														class="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white"
													>
														appMachine.ts
													</div>
													<div class="border-r border-gray-600/10 px-4 py-2">App.tsx</div>
												</div>
											</div>
											<div class="px-6 pb-14 pt-6 [&_pre]:border-0">{@html code}</div>
										</div>
									</div>
									<div
										class="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 md:rounded-3xl"
										aria-hidden="true"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
			</div>
		</div>

		<div class="bg-white px-6 py-24 sm:py-32 lg:px-8">
			<div class="mx-auto max-w-2xl text-center">
				<h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
					I value your feedback
				</h2>
				<p class="mt-6 text-lg leading-8 text-gray-600">
					By gathering diverse opinions and experiences, I can write a report better describing
					plural real-world uses of XState.
				</p>
			</div>
		</div>

		<!-- Feature section -->
		<div class="mx-auto max-w-7xl px-6 mt-32 sm:mt-56 lg:px-8">
			<div class="mx-auto max-w-2xl lg:text-center">
				<p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					XState is used to solve way different problems
				</p>
				<p class="mt-6 text-lg leading-8 text-gray-600">
					XState can be used anywhere JavaScript runs. So wildly different use cases induce a lot of
					different ways to use XState, to teach it, to test it.
				</p>
			</div>
			<div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
				<dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
					<div class="flex flex-col">
						<dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
							<Icon src={AcademicCap} class="h-5 w-5 flex-none text-red-600" />

							Onboarding developers into XState
						</dt>
						<dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
							<p class="flex-auto">
								It takes time to get good with XState, as its concepts aren't common in Web
								development. How are teams teaching XState to new developers?
							</p>
						</dd>
					</div>
					<div class="flex flex-col">
						<dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
							<Icon src={ClipboardCheck} class="h-5 w-5 flex-none text-red-600" />

							Testing state machines
						</dt>
						<dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
							<p class="flex-auto">
								Testing is definitely a crucial part of development. State machines can be
								unit-tested. Model-Based Testing is also a thing. How are teams testing their
								machines?
							</p>
						</dd>
					</div>
					<div class="flex flex-col">
						<dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
							<Icon src={Hashtag} class="h-5 w-5 flex-none text-red-600" />

							Naming conventions
						</dt>
						<dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
							<p class="flex-auto">
								State machines are usually integrated into codebases, and programming cases are used
								to name states and events. With Stately Editor, are programming cases still mostly
								used?
							</p>
						</dd>
					</div>
				</dl>
			</div>

			<div class="mx-auto max-w-2xl lg:text-center mt-32 sm:mt-56">
				<p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					Discover how other developers use XState
				</p>
				<p class="mt-6 text-lg leading-8 text-gray-600">
					The report will tell how other teams use XState to build better software. It will also
					advise about best practices shared across the community.
				</p>
				<p class="mt-6 text-lg leading-8 text-gray-600">
					Please, feel free to share the survey with other fellow XState enthusiasts.
				</p>
			</div>
		</div>

		<div class="bg-white pb-16 pt-24 sm:pb-24 sm:pt-32 xl:pb-48 mt-32 sm:mt-56">
			<div class="bg-gray-900 pb-20 sm:pb-24 xl:pb-0">
				<div
					class="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch"
				>
					<div class="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
						<div class="relative aspect-square h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
							<img
								class="absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover shadow-2xl"
								src="/img/baptiste-devessier.jpeg"
								alt=""
							/>
						</div>
					</div>
					<div class="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
						<figure class="relative isolate pt-6 sm:pt-12">
							<blockquote
								class="text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9 space-y-4"
							>
								<p>I'm Baptiste Devessier. I'm undertaking a report on the State of XState.</p>

								<p>
									I'm a full stack web and XState freelance consultant from France, helping teams
									get used to XState, and building with them solutions based on XState.
								</p>

								<p>
									I've seen XState used in many areas and straightforwardly solving different
									problems. I think the report can help others rediscover how much XState is
									powerful.
								</p>
							</blockquote>
						</figure>
					</div>
				</div>
			</div>
		</div>

		<div
			id="survey"
			class="mx-auto max-w-7xl sm:p-6 lg:p-8 mb-32 sm:mb-56 sm:rounded-3xl bg-gray-50"
		>
			<iframe
				title="State of XState Survey"
				src="https://survey.forms.app/baptiste-devessier/state-of-xstate"
				frameborder="0"
				class="w-full min-h-full h-screen sm:h-[800px] border-none outline-none"
			/>
		</div>
	</main>

	<footer class="relative pb-20 pt-5 sm:pb-32 sm:pt-14 border-t">
		<div class="relative text-center text-sm text-slate-600">
			<p>Copyright © 2023 Baptiste Devessier</p>
			<p>All rights reserved.</p>
		</div>
	</footer>
</div>
