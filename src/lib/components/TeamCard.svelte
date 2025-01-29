<script lang="ts">
	export let name: string;
	export let position: string;
	export let url: string;
	// export let facebook?: string;
	// export let instagram?: string;
	// export let linkedin?: string;
	// export let github?: string;
	export let themeMode: 'dark' | 'light';
</script>

<div
	class="profile-card flex transform flex-col items-center rounded-lg bg-white p-6 shadow-lg transition-transform hover:scale-105 dark:bg-gray-800"
>
	<!-- Profile Image -->
	<div class="img mb-4 h-24 w-24">
		<img
			src={url}
			alt={`${name}'s profile`}
			class="h-full w-full rounded-full border-4 object-cover {themeMode === 'dark'
				? 'border-gray-600'
				: 'border-gray-300'}"
		/>
	</div>

	<!-- Name and Position -->
	<div class="caption text-center">
		<h3 class="text-lg font-bold {themeMode === 'dark' ? 'text-white' : 'text-gray-800'}">
			{name}
		</h3>
		<p class="text-sm font-medium {themeMode === 'dark' ? 'text-gray-400' : 'text-gray-600'}">
			{position}
		</p>
	</div>

	<!-- Social Links -->
	<div class="social-links mt-4 flex justify-center space-x-4">
		<!-- {#if facebook}
        <a
          href={facebook}
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-500 hover:text-blue-500 transition duration-300"
        >
          <i class="fab fa-facebook text-xl"></i>
        </a>
      {/if}
  
      {#if instagram}
        <a
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-500 hover:text-pink-500 transition duration-300"
        >
          <i class="fab fa-instagram text-xl"></i>
        </a>
      {/if}
  
      {#if linkedin}
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-500 hover:text-blue-600 transition duration-300"
        >
          <i class="fab fa-linkedin text-xl"></i>
        </a>
      {/if}
  
      {#if github}
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-500 hover:text-gray-800 transition duration-300"
        >
          <i class="fab fa-github text-xl"></i>
        </a>
      {/if} -->
	</div>
</div>

<style>
	.profile-card {
		max-width: 300px;
	}
</style>
