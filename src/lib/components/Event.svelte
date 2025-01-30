<script lang="ts">
	import EventCard from '$lib/components/EventCard.svelte';
	import EventDetailsPopup from '$lib/components/EventDetailsPopup.svelte';
	import events from '$lib/data/events.js';

	type Event = {
		id: number;
		title: string;
		date: string;
		location: string;
		description: string;
		imageUrl: string;
	};

	let selectedEvent: Event | null = null;
	let isPopupOpen = false;

	function handleEventSelect(event: Event) {
		selectedEvent = event;
		isPopupOpen = true;
	}

	function closePopup() {
		isPopupOpen = false;
		selectedEvent = null;
	}
</script>

<div class="container z-10 mx-auto p-4 pt-32">
	<h1 class="mb-6 text-center text-3xl font-bold text-white">Events</h1>
	<div class="grid grid-cols-1 justify-center gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each events as event}
			<EventCard {event} on:select={() => handleEventSelect(event)} />
		{/each}
	</div>
</div>

{#if selectedEvent}
	<EventDetailsPopup event={selectedEvent} isOpen={isPopupOpen} {closePopup} />
{/if}
