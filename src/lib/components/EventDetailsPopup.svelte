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
			class="w-full max-w-2xl transition-all duration-300 rounded-lg bg-slate-700/15 border border-slate-600 backdrop-blur-md group-hover:bg-white p-6 shadow-xl"
			on:click|stopPropagation
			role="button"
			tabindex="0"
			on:keydown={(e) => e.key === 'Enter' && e.stopPropagation()}
		>
			<img class="h-64 w-full scale-90 group-hover:scale-100 transition-all duration-300 rounded-t-lg object-cover" src={event.imageUrl} alt={event.title} />
			<div class="p-4">
				<h2 class="mb-2 transition-all duration-300 text-2xl text-white group-hover:text-gray-700 font-bold">{event.title}</h2>
				<p class="mb-4 transition-all duration-300 text-white/55 group-hover:text-gray-700">{event.date}</p>
				<p class="mb-4 transition-all duration-300 text-white/55 group-hover:text-gray-700">{event.location}</p>
				<p class="transition-all duration-300 text-white/55 group-hover:text-gray-700">{event.description}</p>
			</div>
			<button
				class="mt-4 rounded  px-4 py-2 text-white transition-colors duration-300 bg-slate-700 hover:bg-slate-300 hover:text-black"
				on:click={closePopup}
			>
				Close
			</button>
		</div>
	</div>
{/if}
