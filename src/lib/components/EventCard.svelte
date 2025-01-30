<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let event: {
		id: number;
		title: string;
		date: string;
		location: string;
		description: string;
		imageUrl: string;
	};

	const dispatch = createEventDispatcher();

	function handleClick() {
		dispatch('select', event);
	}
</script>

<button
	class="group cursor-pointer overflow-hidden rounded border border-slate-700 bg-slate-800/35 shadow-lg transition-all duration-300 hover:bg-white/95 hover:shadow-xl"
	on:click={handleClick}
	on:keydown={(e) => e.key === 'Enter' && handleClick()}
	aria-label={`Event: ${event.title}`}
>
	<img
		class="h-48 w-full scale-90 rounded-md object-cover transition-all duration-300 group-hover:scale-100"
		src={event.imageUrl}
		alt={event.title}
	/>
	<div class="px-6 py-4 text-left">
		<div
			class="mb-2 text-xl font-bold text-white transition-all duration-300 group-hover:text-slate-900"
		>
			{event.title}
		</div>
		<p class="text-base text-slate-400 group-hover:text-gray-700">{event.date}</p>
		<p class="text-base text-slate-300 group-hover:text-gray-700">{event.location}</p>
	</div>
</button>
