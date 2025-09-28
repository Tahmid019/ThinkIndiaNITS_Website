<script lang="ts">
	import Think_india_logo from '$lib/assets/think_india.svg';
	let isOpen = false;

	let NavLinks: Array<{ name: string; link: string }> | null = [
		{ name: 'Home', link: '/' }, 
		{ name: 'About', link: '/About' }, 
		// { name: 'Events', link: '/Event' }, 
		// { name: 'Blogs', link: '/Blog' }, 
		// { name: 'Team', link: '/Team' }
	];
</script>

<nav class="fixed p-2 left-0 top-0 z-[1000] w-full bg-white/10 shadow-md backdrop-blur-md">
	<div class="mx-auto flex max-w-7xl items-center justify-between">
		<!-- Logo -->
		<a href="/" class="flex items-center space-x-3">
			<img src={Think_india_logo} class="h-logo pl-card" alt="Think India Logo" />
		</a>

		<!-- Mobile Menu Button -->
		<button
			on:click={() => (isOpen = !isOpen)}
			class="rounded-lg p-2 text-white hover:bg-white/20 md:hidden"
			aria-label="Toggle navigation menu"
		>
			<svg
				class="h-6 w-6"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16m-7 6h7"
				/>
			</svg>
		</button>
		<!-- Backdrop for mobile menu -->
		{#if isOpen}
			<button
				type="button"
				class="fixed inset-0 z-0 bg-black/50 backdrop-blur-sm md:hidden"
				on:click={() => (isOpen = false)}
				aria-label="Close menu"
			></button>
		{/if}

		<!-- Navigation Links -->
		<div
			class="fixed left-0 top-0 h-screen w-32 transform bg-black/50 backdrop-blur-xl transition-transform duration-300 ease-in-out md:static md:h-auto md:w-auto md:translate-x-0 md:bg-transparent md:backdrop-blur-none"
			class:translate-x-0={isOpen}
			class:-translate-x-full={!isOpen}
		>
			<ul class="flex flex-col p-4 md:flex-row md:space-x-6 md:p-0">
				{#each NavLinks as { name, link }}
					<li>
						<a
							href={link}
							class="block rounded-md px-4 py-2 text-h6 font-semibold text-slate-500 hover:text-slate-900 "
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
