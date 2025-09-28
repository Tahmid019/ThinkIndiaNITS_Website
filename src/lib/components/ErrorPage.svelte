<script lang="ts">
  import Game1 from '$lib/components/Game1.svelte';
  import { browser } from '$app/environment';
</script>

<div class="flex flex-col my-12 gap-3 md:flex-row items-center justify-center min-h-screen bg-gray-50 text-center md:text-left px-6">
  
  <!-- Left: Game -->
  <div class="w-full md:w-1/2 flex items-center justify-center md:translate-x-16">
    {#if browser}
      <Game1 />
    {/if}
  </div>

  <!-- Right: Error message -->
  <div class="w-full md:w-1/2 flex flex-col items-center md:items-start space-y-4">
    <h1 class="text-4xl font-bold text-gray-900">Oops!</h1>
    <p class="text-gray-500">We couldn't find the page you were looking for</p>
    <button 
      type="button" 
      onclick={() => (window.location.href = '/')}
      class="px-6 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition"
      aria-label="Go to home page"
    >
      Go home
    </button>
  </div>
</div>
