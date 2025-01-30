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
	<div
		class="group overflow-hidden rounded-lg border border-slate-600 bg-slate-800/35 shadow-lg transition-all duration-300 hover:bg-white/95"
	>
		<img src={imageUrl} alt={title} class="h-48 w-full object-cover" />
		<div class="p-6">
			<h3
				class="mb-2 text-xl font-bold text-gray-50 transition-all duration-300 group-hover:text-gray-800
 sm:text-2xl lg:text-3xl xl:text-3xl"
			>
				{title}
			</h3>
			{#if isExpanded}
				<p
					class="text-base text-gray-200 transition-all duration-300
  group-hover:text-gray-700 lg:text-lg"
				>
					{content}
				</p>
			{:else}
				<p
					class="text-base text-gray-200 transition-all duration-300 group-hover:text-gray-700 lg:text-lg"
				>
					{content.substring(0, 100)}...
				</p>
			{/if}
		</div>
	</div>
</button>
