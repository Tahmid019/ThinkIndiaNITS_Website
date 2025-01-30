<script lang="ts">
	import BlogCard from '$lib/components/BlogCard.svelte';
	import blogPosts from '$lib/data/blogs.js';
	import BlurFade from './ui/BlurFade.svelte';
</script>

<section class="bg-transparent py-20 pt-32">
	<div class="container mx-auto px-6">
		<BlurFade>
			<h1
				class="mb-12 text-center text-3xl font-bold text-white sm:text-4xl
 lg:text-5xl xl:text-6xl"
			>
				Blog
			</h1>
		</BlurFade>
		<div class="-mx-4 flex flex-wrap">
			{#each blogPosts as post}
				<BlogCard title={post.title} content={post.content} imageUrl={post.imageUrl} />
			{/each}
		</div>
	</div>
</section>
