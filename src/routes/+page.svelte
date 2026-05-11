<script lang="ts">
	import { projects } from '$lib';
</script>

<div class="flex w-full flex-col gap-2">
	<p class="text-2xl font-bold md:text-4xl">Hello, this is Md Riyasat Hossain!</p>
	<p class="text-sm text-neutral-400 md:text-lg">
		High-school Student • Software Engineer • Tech Enthusiast
	</p>
	<hr class="border border-neutral-900" />
</div>

<div class="flex w-full flex-col gap-2 text-sm md:text-base">
	<p class="text-justify">
		I'm an 18-year-old student, and a self-taught software engineer with a passion for building
		impactful software. I have a strong interest in programming languages, compilers, and systems
		programming, and I'm always eager to learn new technologies and improve my skills.
	</p>

	<p class="text-justify">
		I've been building software since I was 9 &mdash; over a decade of turning ideas into working
		products. I specialize in full-stack web development with a strong focus on <strong
			>TypeScript</strong
		>,
		<strong>Python</strong>, and <strong>Rust</strong>, and I care deeply about writing clean,
		maintainable code.
	</p>

	<p class="text-justify">
		It's not just about coding for me; I love sharing knowledge and helping others grow. I believe
		in the power of community and open-source, and I'm always looking for ways to contribute and
		give back. When I'm not coding, you can find me exploring new technologies, reading about
		programming languages, or just tinkering with fun projects.
	</p>

	<p class="text-justify">
		I strongly believe in the importance of mindset and habits in achieving success. Here are some
		of the principles that guide me in my journey:
	</p>

	<p class="mb-2 text-center italic">
		"Focus on the process, not the outcome."<br />"Embrace failure as a learning opportunity."<br
		/>"Be consistent, and the results will follow."<br />"Complacency kills dreams."
	</p>

	<p>
		If you're interested in collaborating, learning together, or just want to chat about tech, don't
		hesitate to reach out. I'm always open to new connections and opportunities!
	</p>
</div>

<div class="flex w-full flex-col gap-4">
	<p class="text-xl font-bold md:text-2xl">Featured Projects</p>

	<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
		{#each projects as project (project.id)}
			<div class="flex flex-col gap-2 rounded-lg border border-neutral-900 p-4">
				<h3 class="text-lg font-bold md:text-xl">{project.name}</h3>
				<p class="text-sm text-neutral-400 md:text-base">{project.description}</p>
				<a
					href={project.repo}
					rel="external"
					target="_blank"
					class="self-start rounded-md border border-neutral-900 bg-neutral-950 px-4 py-2 text-sm text-white hover:bg-white hover:text-neutral-950 md:text-base"
				>
					View on GitHub
				</a>
			</div>
		{/each}
	</div>
</div>
