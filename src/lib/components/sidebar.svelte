<script>
	import { page } from '$app/state';
	import { sidebarLinks } from '$lib';

	let currentPath = $derived(() => page.url.pathname);
</script>

<div
	class="hidden flex-1/4 flex-col items-center justify-center gap-4 border-r border-neutral-900 p-4 md:flex"
>
	{#each sidebarLinks as links (links.id)}
		<a
			class={'border-b-2 border-neutral-950 text-lg hover:border-white' +
				(currentPath() === links.href ? ' border-white font-bold' : '')}
			href={links.href}
		>
			{links.name}
		</a>
	{/each}
</div>
