<script lang="ts">
	import './layout.css';
	import Sidebar from '$lib/components/sidebar.svelte';
	import { SiGithub, SiX, SiDevdotto, SiSubstack } from '@icons-pack/svelte-simple-icons';

	let { children } = $props();
</script>

<svelte:head><title>TheCodeHeist | Md Riyasat Hossain</title></svelte:head>

<main class="flex h-screen w-full flex-col bg-neutral-950 font-geist-mono text-white">
	<div class="flex items-center justify-between border-b border-neutral-900 px-4 py-4 md:px-16">
		<p class="w-min bg-white px-2 text-lg font-black text-black md:text-xl">thecodeheist</p>

		<div class="flex items-center justify-end gap-8">
			<a href="https://github.com/TheCodeHeist" target="_blank">
				<SiGithub />
			</a>

			<a href="https://x.com/thecodeheist" target="_blank">
				<SiX />
			</a>

			<a href="https://dev.to/thecodeheist" target="_blank">
				<SiDevdotto />
			</a>

			<a href="https://substack.com/@thecodeheist" target="_blank">
				<SiSubstack />
			</a>
		</div>
	</div>

	<section class="flex h-full w-full flex-1 flex-col-reverse overflow-hidden md:flex-row">
		<Sidebar />

		<section class="flex h-full w-full flex-col gap-8 overflow-y-auto p-8">
			{@render children()}
		</section>
	</section>
</main>
