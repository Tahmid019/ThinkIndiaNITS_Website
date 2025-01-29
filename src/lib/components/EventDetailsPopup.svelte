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
		class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4"
		on:click={closePopup}
		role="button"
		tabindex="0"
		on:keydown={(e) => e.key === 'Enter' && closePopup()}
	>
		<div
			class="w-full max-w-2xl rounded-lg bg-white p-6 shadow-xl"
			on:click|stopPropagation
			role="button"
			tabindex="0"
			on:keydown={(e) => e.key === 'Enter' && e.stopPropagation()}
		>
			<img class="h-64 w-full rounded-t-lg object-cover" src={event.imageUrl} alt={event.title} />
			<div class="p-4">
				<h2 class="mb-2 text-2xl font-bold">{event.title}</h2>
				<p class="mb-4 text-gray-700">{event.date}</p>
				<p class="mb-4 text-gray-700">{event.location}</p>
				<p class="text-gray-700">{event.description}</p>
			</div>
			<button
				class="mt-4 rounded bg-blue-500 px-4 py-2 text-white transition-colors duration-300 hover:bg-blue-600"
				on:click={closePopup}
			>
				Close
			</button>
		</div>
	</div>
{/if}
