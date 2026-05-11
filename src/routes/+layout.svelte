<script lang="ts">
	import './layout.css';
	import Sidebar from '$lib/components/sidebar.svelte';
	import { socialLinks } from '$lib';
	import PopupNav from '$lib/components/popupNav.svelte';
	import globalStates from './globalStates.svelte';

	let { children } = $props();
</script>

<svelte:head><title>TheCodeHeist | Md Riyasat Hossain</title></svelte:head>

<PopupNav />

<main class="flex h-screen w-full flex-col bg-neutral-950 font-geist-mono text-white">
	<div class="flex items-center justify-between border-b border-neutral-900 px-4 py-4 md:px-16">
		<p class="w-min bg-white px-2 text-lg font-black text-black md:text-xl">thecodeheist</p>

		<div class="hidden items-center justify-end gap-8 md:flex">
			{#each socialLinks as data (data.id)}
				{@const Icon = data.icon}

				<a href={data.href} target="_blank">
					<Icon title={data.name} />
				</a>
			{/each}
		</div>

		<button
			type="button"
			class="block md:hidden"
			onclick={() => (globalStates.popupNavState = !globalStates.popupNavState)}
			aria-label="Toggle navigation menu"
		>
			{#if globalStates.popupNavState}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			{:else}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
			{/if}
		</button>
	</div>

	<section class="flex h-full w-full flex-1 flex-col-reverse overflow-hidden md:flex-row">
		<Sidebar />

		<section class="flex h-full w-full flex-col gap-8 overflow-y-auto p-8">
			{@render children()}
		</section>
	</section>
</main>
