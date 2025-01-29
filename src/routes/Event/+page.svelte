<script lang="ts">
	import EventCard from '$lib/components/EventCard.svelte';
	import EventDetailsPopup from '$lib/components/EventDetailsPopup.svelte';

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

	const events: Event[] = [
		{
			id: 1,
			title: 'Event 1',
			date: '2023-10-15',
			location: 'New York, USA',
			description: 'This is a detailed description of Event 1.',
			imageUrl: 'https://via.placeholder.com/400x200'
		},
		{
			id: 2,
			title: 'Event 2',
			date: '2023-11-20',
			location: 'London, UK',
			description: 'This is a detailed description of Event 2.',
			imageUrl: 'https://via.placeholder.com/400x200'
		}
	];

	function handleEventSelect(event: Event) {
		selectedEvent = event;
		isPopupOpen = true;
	}

	function closePopup() {
		isPopupOpen = false;
		selectedEvent = null;
	}
</script>

<div class="container mx-auto p-4">
	<h1 class="mb-6 text-3xl font-bold">Events</h1>
	<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each events as event}
			<EventCard {event} on:select={() => handleEventSelect(event)} />
		{/each}
	</div>
</div>

{#if selectedEvent}
	<EventDetailsPopup event={selectedEvent} isOpen={isPopupOpen} {closePopup} />
{/if}
