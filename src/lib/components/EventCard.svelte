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
    class="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
    on:click={handleClick}
    on:keydown={(e) => e.key === 'Enter' && handleClick()}
    aria-label={`Event: ${event.title}`}
  >
    <img class="w-full h-48 object-cover" src={event.imageUrl} alt={event.title} />
    <div class="px-6 py-4 text-left">
      <div class="font-bold text-xl mb-2">{event.title}</div>
      <p class="text-gray-700 text-base">{event.date}</p>
      <p class="text-gray-700 text-base">{event.location}</p>
    </div>
  </button>