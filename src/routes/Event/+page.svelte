<script lang="ts">
    import EventCard from '$lib/components/EventCard.svelte';
    import EventDetailsPopup from '$lib/components/EventDetailsPopup.svelte';
  
    let selectedEvent: {
      id: number;
      title: string;
      date: string;
      location: string;
      description: string;
      imageUrl: string;
    } | null = null;
  
    let isPopupOpen = false;
  
    const events = [
      {
        id: 1,
        title: 'Event 1',
        date: '2023-10-15',
        location: 'New York, USA',
        description: 'This is a detailed description of Event 1.',
        imageUrl: 'https://via.placeholder.com/400x200',
      },
      {
        id: 2,
        title: 'Event 2',
        date: '2023-11-20',
        location: 'London, UK',
        description: 'This is a detailed description of Event 2.',
        imageUrl: 'https://via.placeholder.com/400x200',
      },
      // Add more events as needed
    ];
  
    function handleEventSelect(event: any) {
      selectedEvent = event;
      isPopupOpen = true;
    }
  
    function closePopup() {
      isPopupOpen = false;
      selectedEvent = null;
    }
  </script>
  
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-6">Events</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each events as event}
        <EventCard {event} on:select={handleEventSelect} />
      {/each}
    </div>
  </div>
  
  {#if selectedEvent}
    <EventDetailsPopup event={selectedEvent} isOpen={isPopupOpen} {closePopup} />
  {/if}