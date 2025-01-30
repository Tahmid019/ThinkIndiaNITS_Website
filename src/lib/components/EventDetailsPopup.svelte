<script lang="ts">
	export let event: {
		id: number;
		title: string;
		date: string;
		location: string;
		description: string;
		imageUrl: string;
	};

	export let isOpen: boolean;
	export let closePopup: () => void;
</script>

{#if isOpen}
	<div
		class=" group fixed inset-0 flex items-center justify-center bg-slate-800/55 p-4 pt-16"
		on:click={closePopup}
		role="button"
		tabindex="0"
		on:keydown={(e) => e.key === 'Enter' && closePopup()}
	>
		<div
			class="w-full max-w-2xl rounded-lg border border-slate-600 bg-slate-700/15 p-6 shadow-xl backdrop-blur-md transition-all duration-300 group-hover:bg-white"
			on:click|stopPropagation
			role="button"
			tabindex="0"
			on:keydown={(e) => e.key === 'Enter' && e.stopPropagation()}
		>
			<img
				class="h-64 w-full scale-90 rounded-t-lg object-cover transition-all duration-300 group-hover:scale-100"
				src={event.imageUrl}
				alt={event.title}
			/>
			<div class="p-4">
				<h2
					class="mb-2 text-2xl font-bold text-white transition-all duration-300 group-hover:text-gray-700"
				>
					{event.title}
				</h2>
				<p class="mb-4 text-white/55 transition-all duration-300 group-hover:text-gray-700">
					{event.date}
				</p>
				<p class="mb-4 text-white/55 transition-all duration-300 group-hover:text-gray-700">
					{event.location}
				</p>
				<p class="text-white/55 transition-all duration-300 group-hover:text-gray-700">
					{event.description}
				</p>
			</div>
			<button
				class="mt-4 rounded bg-slate-700 px-4 py-2 text-white transition-colors duration-300 hover:bg-slate-300 hover:text-black"
				on:click={closePopup}
			>
				Close
			</button>
		</div>
	</div>
{/if}
