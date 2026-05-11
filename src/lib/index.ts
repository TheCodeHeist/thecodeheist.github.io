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
		repo: 'https://github.com/TheCodeHeist/hyperbola-community',
		featured: true
	},
	{
		id: 2,
		name: 'EdxCode',
		description:
			'Pearson Edexcel Pseudocode Interpreter, based on Pseudocode Command Set provided by Pearson Edexcel.',
		repo: 'https://github.com/TheCodeHeist/edx-code',
		featured: true
	},
	{
		id: 3,
		name: 'Reduced',
		description:
			'Decentralized Notification Utility for Oxidized, a Network Configuration Backup Tool.',
		repo: 'https://github.com/TheCodeHeist/reduced',
		featured: true
	},
	{
		id: 4,
		name: 'EvilStack',
		description:
			'Stack-based programming language that has familiar syntax and has similar commands to assembly, just for fun!',
		repo: 'https://github.com/TheCodeHeist/evilstack-lang'
	},
	{
		id: 5,
		name: 'MapleMate',
		description:
			"MapleMate, a personalised AI chatbot by MLIS Robotics Club, using Google's Gemma3 Model on Ollama.",
		repo: 'https://github.com/TheCodeHeist/maplemate_mlisrbc',
		featured: true
	}
];

export const educationQualifications = [
	{
		id: 1,
		name: 'International General Certificate of Secondary Education (IGCSE)',
		batch: 'May 2024 & November 2024',
		institution: 'Maple Leaf International School, Dhaka',
		from: 'Jan 2017',
		to: 'Nov 2024'
	},
	{
		id: 2,
		name: 'International Advanced Level (IAL)',
		batch: 'January 2027 (On-going)',
		institution: 'Maple Leaf International School, Dhaka',
		present: true,
		from: 'Jan 2025',
		to: 'Present'
	}
];

export const softSkills = [
	{
		id: 1,
		name: 'Adaptability',
		description:
			'I am able to adjust to new situations and environments with ease, which allows me to thrive in dynamic and changing work settings.'
	},
	{
		id: 2,
		name: 'Communication',
		description:
			'I am able to effectively convey information and ideas to others, both verbally and in writing, which helps me to build strong relationships and collaborate effectively.'
	},
	{
		id: 3,
		name: 'Emotional Intelligence',
		description:
			'I am able to understand and manage my own emotions, as well as recognize and influence the emotions of others, which allows me to navigate social situations and build strong relationships.'
	},
	{
		id: 4,
		name: 'Problem-Solving',
		description:
			'I am able to analyze complex problems, identify potential solutions, and implement effective strategies to overcome challenges and achieve goals.'
	},
	{
		id: 5,
		name: 'Teamwork',
		description:
			'I am able to work collaboratively with others towards a common goal, contributing my skills and knowledge while also valuing the contributions of my teammates.'
	},
	{
		id: 6,
		name: 'Leadership',
		description:
			'I am able to inspire and motivate others towards a shared vision, while also providing guidance and support to help them achieve their goals.'
	}
];

export const hardSkills = [
	{
		id: 1,
		name: 'Software Development',
		description:
			'I have experience in making software applications, including web development, mobile app development, and desktop application development.'
	},
	{
		id: 2,
		name: 'Basic Graphics Design',
		description:
			'I have a basic understanding of graphics design principles and tools, which allows me to create simple visual assets for my projects.'
	},
	{
		id: 3,
		name: 'Robotics and Hardware',
		description:
			'I have experience with robotics and hardware development, including programming microcontrollers and working with sensors and actuators.'
	},
	{
		id: 4,
		name: 'Basic Cybersecurity',
		description:
			'I have a basic understanding of cybersecurity principles and practices, which allows me to implement basic security measures in my projects and be aware of potential security risks.'
	}
];
