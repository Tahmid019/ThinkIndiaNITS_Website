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
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4" on:click={closePopup} role="button" tabindex="0" on:keydown={(e) => e.key === 'Enter' && closePopup()}>
      <div class="bg-white rounded-lg shadow-xl max-w-2xl w-full p-6" on:click|stopPropagation role="button" tabindex="0" on:keydown={(e) => e.key === 'Enter' && e.stopPropagation()}>
        <img class="w-full h-64 object-cover rounded-t-lg" src={event.imageUrl} alt={event.title} />
        <div class="p-4">
          <h2 class="text-2xl font-bold mb-2">{event.title}</h2>
          <p class="text-gray-700 mb-4">{event.date}</p>
          <p class="text-gray-700 mb-4">{event.location}</p>
          <p class="text-gray-700">{event.description}</p>
        </div>
        <button
          class="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
          on:click={closePopup}
        >
          Close
        </button>
      </div>
    </div>
  {/if}