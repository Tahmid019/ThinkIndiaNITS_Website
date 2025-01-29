<script>
	import logo from "$lib/assets/logo.svg";
	let isOpen = false;
  </script>
  
  <nav class="fixed top-0 left-0 w-full bg-white/10 backdrop-blur-md shadow-md z-[1000]">
	<div class="max-w-7xl mx-auto flex items-center justify-between p-4">
	  <!-- Logo -->
	  <a href="/" class="flex items-center space-x-3">
		<img src={logo} class="h-8 md:h-12 lg:h-16 xl:h-20" alt="Flowbite Logo" />
	  </a>
  
	  <!-- Mobile Menu Button -->
	  <button
		on:click={() => (isOpen = !isOpen)}
		class="md:hidden text-white hover:bg-white/20 p-2 rounded-lg"
		aria-label="Toggle navigation menu"
	  >
		<svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
		</svg>
	  </button>
	  <!-- Backdrop for mobile menu -->
	{#if isOpen}
	  <button
		type="button"
		class="fixed inset-0 bg-black/50 backdrop-blur-sm z-0 md:hidden"
		on:click={() => (isOpen = false)}
		aria-label="Close menu"
	  ></button>
	{/if}
  
	  <!-- Navigation Links -->
	  <div
		class="fixed md:static top-0 left-0 h-screen md:h-auto w-32 md:w-auto bg-white/95 backdrop-blur-xl md:bg-transparent md:backdrop-blur-none transform transition-transform duration-300 ease-in-out md:translate-x-0"
		class:translate-x-0={isOpen}
		class:-translate-x-full={!isOpen}
	  >
		<ul class="flex flex-col md:flex-row md:space-x-6 p-4 md:p-0">
		  {#each [
			{ name: 'Home', link: '/' },
			{ name: 'About', link: '/About' },
			{ name: 'Events', link: '/Event' },
			{ name: 'Blogs', link: '/Blog' },
			{ name: 'Team', link: '/Team' },
		  ] as { name, link }}
			<li>
			  <a
				href={link}
				class="block py-2 px-4 text-white font-semibold text-base lg:text-lg xl:text-xl rounded-md hover:bg-white/20"
				on:click={() => (isOpen = false)}
			  >
				{name}
			  </a>
			</li>
		  {/each}
		</ul>
	  </div>
	</div>
  
	
  </nav>