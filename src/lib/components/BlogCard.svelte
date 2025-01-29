<!-- src/lib/components/BlogCard.svelte -->
<script lang="ts">
	export let title: string;
	export let content: string;
	export let imageUrl: string;

	let isExpanded = false;

	const toggleExpand = () => {
		isExpanded = !isExpanded;
	};
</script>

<button
	class="w-full transform p-4 transition-all duration-300 hover:scale-105 sm:w-1/2 md:w-1/3 lg:w-1/4"
	on:click={toggleExpand}
	on:keydown={(e) => e.key === 'Enter' && toggleExpand()}
	aria-expanded={isExpanded}
>
	<div class="overflow-hidden rounded-lg bg-white shadow-lg">
		<img src={imageUrl} alt={title} class="h-48 w-full object-cover" />
		<div class="p-6">
			<h3 class="mb-2 text-xl font-bold">{title}</h3>
			{#if isExpanded}
				<p class="text-gray-700">{content}</p>
			{:else}
				<p class="text-gray-700">{content.substring(0, 100)}...</p>
			{/if}
		</div>
	</div>
</button>
