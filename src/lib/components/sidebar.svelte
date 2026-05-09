<script>
	import { resolve } from '$app/paths';
	import { page } from '$app/state';

	let currentPath = $derived(() => page.url.pathname);
</script>

<div
	class="flex flex-1/4 flex-col items-center justify-center gap-4 border-r border-neutral-900 p-4"
>
	<a
		class={'border-b-2 border-neutral-950 text-lg hover:border-white' +
			(currentPath() === '/' ? ' border-white font-bold' : '')}
		href={resolve('/')}
	>
		/root
	</a>
	<a
		class={'border-b-2 border-neutral-950 text-lg hover:border-white' +
			(currentPath() === '/projects' ? ' border-white font-bold' : '')}
		href={resolve('/projects')}
	>
		/projects
	</a>
	<a
		class={'border-b-2 border-neutral-950 text-lg hover:border-white' +
			(currentPath() === '/contact' ? ' border-white font-bold' : '')}
		href={resolve('/contact')}
	>
		/contact
	</a>
</div>
