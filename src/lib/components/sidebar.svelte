<script>
	import { resolve } from '$app/paths';
	import { page } from '$app/state';

	let currentPath = $derived(() => page.url.pathname);
</script>

<div
	class="flex flex-row items-center justify-evenly border-t border-neutral-900 p-4 md:flex-1/4 md:flex-col md:justify-center md:gap-4 md:border-r"
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
