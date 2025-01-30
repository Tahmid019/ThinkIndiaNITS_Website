<!-- src/lib/components/ui/Loading.svelte -->
<script lang="ts">
    export let isLoading: boolean = true;
  </script>
  
  {#if isLoading}
    <div class="fixed inset-0 flex justify-center items-center bg-black z-50">
      <div class="loading">
        {#each Array(4) as _, rowIndex}
          <div class="row flex justify-center">
            {#each Array(4) as _, pointIndex}
              <div
                class="point w-3 h-3 rounded-full bg-white animate-color"
                style={`animation-delay: ${(rowIndex * 4 + pointIndex) * 100}ms;`}
              ></div>
            {/each}
          </div>
        {/each}
      </div>
    </div>
  {/if}
  
  <style>
    .loading {
      width: 6em;
      height: 5em;
      position: relative;
      text-align: center;
    }
  
    .point {
      margin: 0 0.35em 0.6em;
    }
  
    @keyframes color {
      0%, 100% {
        background-color: #ffffff; /* Red */
        filter: blur(1px);
      }
      50% {
        background-color: #000000; /* Blue */
        filter: blur(2px);
      }
    }
  
    .animate-color {
      animation: color 1500ms infinite ease-in-out;
    }
  </style>