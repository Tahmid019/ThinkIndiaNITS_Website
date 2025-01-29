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
	class="max-w-sm cursor-pointer overflow-hidden rounded shadow-lg transition-shadow duration-300 hover:shadow-xl"
	on:click={handleClick}
	on:keydown={(e) => e.key === 'Enter' && handleClick()}
	aria-label={`Event: ${event.title}`}
>
	<img class="h-48 w-full object-cover" src={event.imageUrl} alt={event.title} />
	<div class="px-6 py-4 text-left">
		<div class="mb-2 text-xl font-bold">{event.title}</div>
		<p class="text-base text-gray-700">{event.date}</p>
		<p class="text-base text-gray-700">{event.location}</p>
	</div>
</button>
