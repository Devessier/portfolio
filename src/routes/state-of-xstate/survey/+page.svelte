<script lang="ts">
	import { Icon } from '@steeze-ui/svelte-icon';
	import { AcademicCap, ClipboardCheck, Hashtag } from '@steeze-ui/heroicons';
	import { LogoIcon } from '$lib/Icons';
	import '../../../app.postcss';
	import '../../shiki.css';
	import type { PageData } from './$types';

	export let data: PageData;
	$: code = data.code;
</script>

<svelte:head>
	<title>State of XState - Survey</title>
</svelte:head>

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
									I'm preparing a report on the current state of XState and I'm conducting a survey
									to collect your valuable feedback, that will directly contribute to shape the
									report.
								</p>
								<p class="mt-6 text-lg leading-8 text-gray-600">
									Completing the survey will take you <b>5 minutes</b> of your time, and you'll get insider
									insights into XStaters' practices.
								</p>
								<div class="mt-10 flex items-center gap-x-6">
									<a
										href="#"
										class="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
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

		<!-- Feature section -->
		<!-- <div class="mx-auto mt-32 max-w-7xl sm:mt-56 sm:px-6 lg:px-8">
			<div
				class="relative isolate overflow-hidden bg-gray-900 px-6 py-20 sm:rounded-3xl sm:px-10 sm:py-24 lg:py-24 xl:px-24"
			>
				<div
					class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0"
				>
					<div class="lg:row-start-2 lg:max-w-md">
						<h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
							Boost your productivity.<br />Start using our app today.
						</h2>
						<p class="mt-6 text-lg leading-8 text-gray-300">
							Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing
							sagittis vel nulla. Ac euismod vel sit maecenas.
						</p>
					</div>
					<img
						src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
						alt="Product screenshot"
						class="relative -z-20 min-w-full max-w-xl rounded-xl shadow-xl ring-1 ring-white/10 lg:row-span-4 lg:w-[64rem] lg:max-w-none"
						width="2432"
						height="1442"
					/>
					<div
						class="max-w-xl lg:row-start-3 lg:mt-10 lg:max-w-md lg:border-t lg:border-white/10 lg:pt-10"
					>
						<dl class="max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
							<div class="relative">
								<dt class="ml-9 inline-block font-semibold text-white">
									<svg
										class="absolute left-1 top-1 h-5 w-5 text-indigo-500"
										viewBox="0 0 20 20"
										fill="currentColor"
										aria-hidden="true"
									>
										<path
											fill-rule="evenodd"
											d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
											clip-rule="evenodd"
										/>
									</svg>
									Push to deploy.
								</dt>
								<dd class="inline">
									Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.
								</dd>
							</div>
							<div class="relative">
								<dt class="ml-9 inline-block font-semibold text-white">
									<svg
										class="absolute left-1 top-1 h-5 w-5 text-indigo-500"
										viewBox="0 0 20 20"
										fill="currentColor"
										aria-hidden="true"
									>
										<path
											fill-rule="evenodd"
											d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
											clip-rule="evenodd"
										/>
									</svg>
									SSL certificates.
								</dt>
								<dd class="inline">
									Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
									commodo.
								</dd>
							</div>
							<div class="relative">
								<dt class="ml-9 inline-block font-semibold text-white">
									<svg
										class="absolute left-1 top-1 h-5 w-5 text-indigo-500"
										viewBox="0 0 20 20"
										fill="currentColor"
										aria-hidden="true"
									>
										<path
											d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z"
										/>
										<path
											fill-rule="evenodd"
											d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z"
											clip-rule="evenodd"
										/>
									</svg>
									Database backups.
								</dt>
								<dd class="inline">
									Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.
								</dd>
							</div>
						</dl>
					</div>
				</div>
				<div
					class="pointer-events-none absolute left-12 top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-3xl lg:bottom-[-12rem] lg:top-auto lg:translate-y-0 lg:transform-gpu"
					aria-hidden="true"
				>
					<div
						class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-25"
						style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
					/>
				</div>
			</div>
		</div> -->

		<!-- Feature section -->
		<div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
			<div class="mx-auto max-w-2xl lg:text-center">
				<p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					XState is so good that it can be used anywhere
				</p>
				<p class="mt-6 text-lg leading-8 text-gray-600">
					XState can be used anywhere JavaScript runs. So widly different use cases induce a lot
					different ways to use XState, to test machines, to model things. What if the current state
					of XState was assembled into a report?
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
		</div>

		<!-- Newsletter section -->
		<div class="mx-auto mt-32 max-w-7xl sm:mt-56 sm:px-6 lg:px-8">
			<div
				class="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32"
			>
				<h2
					class="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl"
				>
					Get notified when we’re launching.
				</h2>
				<p class="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
					Reprehenderit ad esse et non officia in nulla. Id proident tempor incididunt nostrud nulla
					et culpa.
				</p>
				<form class="mx-auto mt-10 flex max-w-md gap-x-4">
					<label for="email-address" class="sr-only">Email address</label>
					<input
						id="email-address"
						name="email"
						type="email"
						autocomplete="email"
						required
						class="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
						placeholder="Enter your email"
					/>
					<button
						type="submit"
						class="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
						>Notify me</button
					>
				</form>
				<svg
					viewBox="0 0 1024 1024"
					class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
					aria-hidden="true"
				>
					<circle
						cx="512"
						cy="512"
						r="512"
						fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
						fill-opacity="0.7"
					/>
					<defs>
						<radialGradient
							id="759c1415-0410-454c-8f7c-9a820de03641"
							cx="0"
							cy="0"
							r="1"
							gradientUnits="userSpaceOnUse"
							gradientTransform="translate(512 512) rotate(90) scale(512)"
						>
							<stop stop-color="#7775D6" />
							<stop offset="1" stop-color="#E935C1" stop-opacity="0" />
						</radialGradient>
					</defs>
				</svg>
			</div>
		</div>

		<!-- Testimonials section -->
		<div class="relative isolate mt-32 sm:mt-56 sm:pt-32 mb-32 sm:mb-56">
			<svg
				class="absolute inset-0 -z-10 hidden h-full w-full stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)] sm:block"
				aria-hidden="true"
			>
				<defs>
					<pattern
						id="55d3d46d-692e-45f2-becd-d8bdc9344f45"
						width="200"
						height="200"
						x="50%"
						y="0"
						patternUnits="userSpaceOnUse"
					>
						<path d="M.5 200V.5H200" fill="none" />
					</pattern>
				</defs>
				<svg x="50%" y="0" class="overflow-visible fill-gray-50">
					<path
						d="M-200.5 0h201v201h-201Z M599.5 0h201v201h-201Z M399.5 400h201v201h-201Z M-400.5 600h201v201h-201Z"
						stroke-width="0"
					/>
				</svg>
				<rect
					width="100%"
					height="100%"
					stroke-width="0"
					fill="url(#55d3d46d-692e-45f2-becd-d8bdc9344f45)"
				/>
			</svg>
			<div class="relative">
				<div
					class="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
					aria-hidden="true"
				>
					<div
						class="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"
						style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
					/>
				</div>
				<div
					class="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-8 opacity-25 blur-3xl xl:justify-end"
					aria-hidden="true"
				>
					<div
						class="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]"
						style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
					/>
				</div>
				<div class="mx-auto max-w-7xl px-6 lg:px-8">
					<div class="mx-auto max-w-xl sm:text-center">
						<h2 class="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
							Testimonials
						</h2>
						<p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							We have worked with thousands of amazing people
						</p>
					</div>
					<div
						class="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4"
					>
						<figure
							class="col-span-2 hidden sm:block sm:rounded-2xl sm:bg-white sm:shadow-lg sm:ring-1 sm:ring-gray-900/5 xl:col-start-2 xl:row-end-1"
						>
							<blockquote class="p-12 text-xl font-semibold leading-8 tracking-tight text-gray-900">
								<p>
									“Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae
									auctor libero. Hac condimentum dignissim nibh vulputate ut nunc. Amet nibh orci mi
									venenatis blandit vel et proin. Non hendrerit in vel ac diam.”
								</p>
							</blockquote>
							<figcaption class="flex items-center gap-x-4 border-t border-gray-900/10 px-6 py-4">
								<img
									class="h-10 w-10 flex-none rounded-full bg-gray-50"
									src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80"
									alt=""
								/>
								<div class="flex-auto">
									<div class="font-semibold">Brenna Goyette</div>
									<div class="text-gray-600">@brennagoyette</div>
								</div>
								<img
									class="h-10 w-auto flex-none"
									src="https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg"
									alt=""
								/>
							</figcaption>
						</figure>
						<div class="space-y-8 xl:contents xl:space-y-0">
							<div class="space-y-8 xl:row-span-2">
								<figure class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
									<blockquote class="text-gray-900">
										<p>
											“Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil.
											Aut enim doloremque et ipsam.”
										</p>
									</blockquote>
									<figcaption class="mt-6 flex items-center gap-x-4">
										<img
											class="h-10 w-10 rounded-full bg-gray-50"
											src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
											alt=""
										/>
										<div>
											<div class="font-semibold">Leslie Alexander</div>
											<div class="text-gray-600">@lesliealexander</div>
										</div>
									</figcaption>
								</figure>

								<!-- More testimonials... -->
							</div>
							<div class="space-y-8 xl:row-start-1">
								<figure class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
									<blockquote class="text-gray-900">
										<p>
											“Aut reprehenderit voluptatem eum asperiores beatae id. Iure molestiae ipsam
											ut officia rem nulla blanditiis.”
										</p>
									</blockquote>
									<figcaption class="mt-6 flex items-center gap-x-4">
										<img
											class="h-10 w-10 rounded-full bg-gray-50"
											src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
											alt=""
										/>
										<div>
											<div class="font-semibold">Lindsay Walton</div>
											<div class="text-gray-600">@lindsaywalton</div>
										</div>
									</figcaption>
								</figure>

								<!-- More testimonials... -->
							</div>
						</div>
						<div class="space-y-8 xl:contents xl:space-y-0">
							<div class="space-y-8 xl:row-start-1">
								<figure class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
									<blockquote class="text-gray-900">
										<p>
											“Voluptas quos itaque ipsam in voluptatem est. Iste eos blanditiis
											repudiandae. Earum deserunt enim molestiae ipsum perferendis recusandae saepe
											corrupti.”
										</p>
									</blockquote>
									<figcaption class="mt-6 flex items-center gap-x-4">
										<img
											class="h-10 w-10 rounded-full bg-gray-50"
											src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
											alt=""
										/>
										<div>
											<div class="font-semibold">Tom Cook</div>
											<div class="text-gray-600">@tomcook</div>
										</div>
									</figcaption>
								</figure>

								<!-- More testimonials... -->
							</div>
							<div class="space-y-8 xl:row-span-2">
								<figure class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
									<blockquote class="text-gray-900">
										<p>
											“Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit
											incidunt excepturi rerum voluptatem minus harum.”
										</p>
									</blockquote>
									<figcaption class="mt-6 flex items-center gap-x-4">
										<img
											class="h-10 w-10 rounded-full bg-gray-50"
											src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
											alt=""
										/>
										<div>
											<div class="font-semibold">Leonard Krasner</div>
											<div class="text-gray-600">@leonardkrasner</div>
										</div>
									</figcaption>
								</figure>

								<!-- More testimonials... -->
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
</div>
