<script lang="ts">
	import EventCard from '$lib/components/EventCard.svelte';
	import EventDetailsPopup from '$lib/components/EventDetailsPopup.svelte';
	import events from '$lib/data/events.js';
	import BlurFade from './ui/BlurFade.svelte';

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
	<BlurFade>
		<h1
			class="mb-6 text-center text-3xl font-bold text-white sm:text-4xl
 lg:text-5xl xl:text-6xl"
		>
			Events
		</h1>
	</BlurFade>
	<div class="grid grid-cols-1 justify-center gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each events as event}
			<EventCard {event} on:select={() => handleEventSelect(event)} />
		{/each}
	</div>
</div>

{#if selectedEvent}
	<EventDetailsPopup event={selectedEvent} isOpen={isPopupOpen} {closePopup} />
{/if}
