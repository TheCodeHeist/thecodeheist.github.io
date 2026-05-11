<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { sidebarLinks, socialLinks } from '$lib';
	import globalStates from '../../routes/globalStates.svelte';

	let currentPath = $derived(() => page.url.pathname);
</script>

<div
	class={'absolute top-1/2 left-1/2 z-50 flex h-5/6 w-5/6 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-lg border-2 border-neutral-900 bg-neutral-950 p-4 font-geist-mono text-white md:hidden' +
		(globalStates.popupNavState ? ' block' : ' hidden')}
>
	<div
		class="flex h-full w-full flex-col items-center justify-center rounded-sm border-8 border-neutral-900"
	>
		<div class="flex flex-col items-center justify-center gap-4 border-b border-neutral-900 p-8">
			{#each sidebarLinks as links (links.id)}
				<button
					type="button"
					class={'border-b-2 border-neutral-950 text-lg hover:border-white' +
						(currentPath() === links.href ? ' border-white font-bold' : '')}
					onclick={async (e) => {
						e.preventDefault();
						await goto(links.href);
						globalStates.popupNavState = false;
					}}
				>
					{links.name}
				</button>
			{/each}
		</div>

		<div class="flex items-center justify-end gap-8 p-8">
			{#each socialLinks as data (data.id)}
				{@const Icon = data.icon}

				<a href={data.href} rel="external" target="_blank">
					<Icon title={data.name} />
				</a>
			{/each}
		</div>
	</div>
</div>
