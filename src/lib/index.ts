// place files you want to import through the `$lib` alias in this folder.
import { SiGithub, SiX, SiDevdotto, SiSubstack } from '@icons-pack/svelte-simple-icons';
import { resolve } from '$app/paths';

export const socialLinks = [
	{
		id: 1,
		name: 'GitHub (TheCodeHeist)',
		href: 'https://github.com/TheCodeHeist',
		icon: SiGithub
	},
	{
		id: 2,
		name: 'X (@thecodeheist)',
		href: 'https://x.com/thecodeheist',
		icon: SiX
	},
	{
		id: 3,
		name: 'Dev.to (thecodeheist)',
		href: 'https://dev.to/thecodeheist',
		icon: SiDevdotto
	},
	{
		id: 4,
		name: 'Substack (@thecodeheist)',
		href: 'https://substack.com/@thecodeheist',
		icon: SiSubstack
	}
];

export const sidebarLinks = [
	{
		id: 1,
		name: '/root',
		href: resolve('/')
	},
	{
		id: 2,
		name: '/projects',
		href: resolve('/projects')
	},
	{
		id: 3,
		name: '/contact',
		href: resolve('/contact')
	}
];

export const projects = [
	{
		id: 1,
		name: 'Hyperbola Community Edition',
		description: 'Open-source student management system, for independent educators.',
		repo: 'https://github.com/TheCodeHeist/hyperbola-community'
	},
	{
		id: 2,
		name: 'EdxCode',
		description:
			'Pearson Edexcel Pseudocode Interpreter, based on Pseudocode Command Set provided by Pearson Edexcel.',
		repo: 'https://github.com/TheCodeHeist/edx-code'
	},
	{
		id: 3,
		name: 'Reduced',
		description:
			'Decentralized Notification Utility for Oxidized, a Network Configuration Backup Tool.',
		repo: 'https://github.com/TheCodeHeist/reduced'
	},
	{
		id: 4,
		name: 'EvilStack',
		description:
			'Stack-based programming language that has familiar syntax and has similar commands to assembly, just for fun!',
		repo: 'https://github.com/TheCodeHeist/evilstack-lang'
	}
];
