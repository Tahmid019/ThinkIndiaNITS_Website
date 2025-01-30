<script lang="ts">
    export let url: string | undefined;
    export let name: string | undefined;
    export let position: string | undefined;
    export let facebook: string | undefined;
    export let instagram: string | undefined;
    export let linkedin: string | undefined;
  </script>
  
  <div class="profile-card bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
    <div class="img relative h-48 w-full overflow-hidden">
      <img
        src={url}
        alt={`${name}'s profile`}
        class="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
    <div class="caption p-6 text-center">
      <h3 class="text-xl font-bold text-gray-800 mb-2">{name}</h3>
      <p class="text-sm text-gray-600 mb-4">{position}</p>
      <div class="social-links flex justify-center space-x-4">
        {#if facebook}
          <a
            href={facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook profile"
            class="text-gray-600 hover:text-blue-500 transition duration-300"
          >
            <i class="fab fa-facebook text-2xl"></i>
          </a>
        {/if}
        {#if instagram}
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram profile"
            class="text-gray-600 hover:text-pink-500 transition duration-300"
          >
            <i class="fab fa-instagram text-2xl"></i>
          </a>
        {/if}
        {#if linkedin}
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            class="text-gray-600 hover:text-blue-600 transition duration-300"
          >
            <i class="fab fa-linkedin text-2xl"></i>
          </a>
        {/if}
      </div>
    </div>
  </div>
  
  <style>
    .profile-card {
      max-width: 300px;
      margin: 0 auto;
    }
  </style>