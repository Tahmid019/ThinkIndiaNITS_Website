<!-- src/routes/blog/+page.svelte -->
<script lang="ts">
	import BlogCard from '$lib/components/BlogCard.svelte';

	const blogPosts = [
		{
			title: 'Getting Started with Svelte',
			content:
				'Svelte is a modern JavaScript framework that compiles your components into highly efficient vanilla JavaScript. Learn how to get started with Svelte today!',
			imageUrl: 'https://via.placeholder.com/400x200'
		},
		{
			title: 'Mastering Tailwind CSS',
			content:
				'Tailwind CSS is a utility-first CSS framework that allows you to build custom designs quickly. Discover tips and tricks to master Tailwind CSS.',
			imageUrl: 'https://via.placeholder.com/400x200'
		},
		{
			title: 'TypeScript for Beginners',
			content:
				'TypeScript adds static typing to JavaScript, making your code more robust and maintainable. This guide will help you get started with TypeScript.',
			imageUrl: 'https://via.placeholder.com/400x200'
		},
		{
			title: 'Building Responsive UIs',
			content:
				'Learn how to create responsive user interfaces that work seamlessly across all devices using modern CSS techniques and frameworks.',
			imageUrl: 'https://via.placeholder.com/400x200'
		},
		{
			title: 'Advanced Svelte Techniques',
			content:
				'Take your Svelte skills to the next level with advanced techniques like state management, animations, and performance optimization.',
			imageUrl: 'https://via.placeholder.com/400x200'
		},
		{
			title: 'Tailwind CSS vs Bootstrap',
			content:
				'Compare Tailwind CSS and Bootstrap to understand their strengths and weaknesses, and decide which framework is best for your next project.',
			imageUrl: 'https://via.placeholder.com/400x200'
		}
	];
</script>

<section class="bg-gray-50 py-20">
	<div class="container mx-auto px-6">
		<h1 class="mb-12 text-center text-4xl font-bold">Blog</h1>
		<div class="-mx-4 flex flex-wrap">
			{#each blogPosts as post}
				<BlogCard title={post.title} content={post.content} imageUrl={post.imageUrl} />
			{/each}
		</div>
	</div>
</section>
