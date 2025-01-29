<!-- src/lib/components/BlogCard.svelte -->
<script lang="ts">
    export let title: string;
    export let content: string;
    export let imageUrl: string;
  
    let isExpanded = false;
  
    const toggleExpand = () => {
      isExpanded = !isExpanded;
    };
  </script>
  
  <button
    class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 transition-all duration-300 transform hover:scale-105"
    on:click={toggleExpand}
    on:keydown={(e) => e.key === 'Enter' && toggleExpand()}
    aria-expanded={isExpanded}
  >
    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        src={imageUrl}
        alt={title}
        class="w-full h-48 object-cover"
      />
      <div class="p-6">
        <h3 class="text-xl font-bold mb-2">{title}</h3>
        {#if isExpanded}
          <p class="text-gray-700">{content}</p>
        {:else}
          <p class="text-gray-700">{content.substring(0, 100)}...</p>
        {/if}
      </div>
    </div>
  </button>