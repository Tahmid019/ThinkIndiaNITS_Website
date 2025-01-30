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

<div class="container  mx-auto p-4 pt-32 z-10">
	<h1 class="mb-6 text-3xl text-center text-white font-bold">Events</h1>
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 justify-center">
        {#each events as event}
            <EventCard {event} on:select={() => handleEventSelect(event)} />
        {/each}
    </div>
</div>

{#if selectedEvent}
	<EventDetailsPopup event={selectedEvent} isOpen={isPopupOpen} {closePopup} />
{/if}
