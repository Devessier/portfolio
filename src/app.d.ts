/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/typescript
// for information about these interfaces
declare namespace App {
	interface Locals {
		userid: string;
	}

	// eslint-disable-next-line @typescript-eslint/no-empty-interface
	interface Platform {}

	// eslint-disable-next-line @typescript-eslint/no-empty-interface
	interface Session {}

	// eslint-disable-next-line @typescript-eslint/no-empty-interface
	interface Stuff {}
}
