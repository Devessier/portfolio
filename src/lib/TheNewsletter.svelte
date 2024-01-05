<script>
	import TheNewsletterBadge from './TheNewsletterBadge.svelte';
</script>

<div class="bg-white py-16 sm:py-32 -mx-6 sm:mx-0">
	<div class="mx-auto">
		<div
			class="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32"
		>
			<h2
				class="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl"
			>
				Join my mailing list
			</h2>
			<p class="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
				Get monthly insights, personal stories, and in-depth information about what I find helpful
				in web development as a freelancer.
			</p>
			<p
				class="mx-auto mt-4 max-w-xl text-center text-lg leading-8 text-gray-300 flex flex-wrap justify-center gap-y-2 gap-x-1"
			>
				<TheNewsletterBadge>Email advice once a month</TheNewsletterBadge> + <TheNewsletterBadge
					>Free XState report</TheNewsletterBadge
				> + <TheNewsletterBadge>Free course on XState</TheNewsletterBadge>
			</p>
			<p class="mt-10 text-center text-gray-300 text-lg">
				Want to see what it looks like?
				<a href="https://newsletter.baptiste.devessier.fr/archive/" class="underline">
					View the previous issues.
				</a>
			</p>
			<form
				action="https://buttondown.email/api/emails/embed-subscribe/baptiste-devessier"
				method="post"
				target="popupwindow"
				on:submit={() => {
					window.open('https://newsletter.baptiste.devessier.fr', 'popupwindow');
				}}
				class="mx-auto mt-10 grid grid-cols-1 sm:grid-cols-[1fr,auto] max-w-md gap-x-4 gap-y-2"
			>
				<label for="email-address" class="sr-only">Email address</label>
				<input
					id="email-address"
					name="email"
					type="email"
					autocomplete="email"
					required
					class="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
					placeholder="Enter your email"
					aria-describedby="email-description"
				/>
				<button
					type="submit"
					class="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
				>
					Subscribe
				</button>
				<p class="text-sm text-gray-400 sm:col-span-2 text-center" id="email-description">
					I value your privacy and will never share your email address.
				</p>
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
</div>
