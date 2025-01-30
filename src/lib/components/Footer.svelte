<script lang="ts">
	const year: number = new Date().getFullYear();

	const socialLinks = [
		{ name: 'Facebook', icon: 'fa-facebook', url: 'https://facebook.com' },
		{ name: 'Instagram', icon: 'fa-instagram', url: 'https://instagram.com' },
		{ name: 'LinkedIn', icon: 'fa-linkedin', url: 'https://linkedin.com' }
	];
</script>

<footer
	class="bg-slate-800/25 px-4 py-6 text-white backdrop-blur-md transition-all duration-300 hover:bg-slate-800/35 lg:py-8"
>
	<div class="mx-auto grid max-w-6xl grid-cols-3 gap-6">
		<!-- Contact Section -->
		<div>
			<h2 class="text-[0.9rem] font-semibold md:text-lg lg:text-xl">Contact Us</h2>
			<p class="mt-1 text-[0.8rem] text-gray-400 md:text-base lg:text-lg">Email: tahmif786.com</p>
			<p class="text-[0.8rem] text-gray-400 md:text-base lg:text-lg">Phone: +91 99547 22871</p>
		</div>

		<!-- Quick Links -->
		<div>
			<h2 class="text-[0.9rem] text-base font-semibold md:text-lg lg:text-xl">Quick Links</h2>
			<ul class="mt-1 space-y-1 sm:mt-2 sm:space-y-2">
				<li>
					<a
						href="/About"
						class="text-[0.8rem] text-gray-400 transition hover:text-white md:text-base lg:text-lg"
						>About Us</a
					>
				</li>
				<li>
					<a
						href="/Blog"
						class="text-[0.8rem] text-gray-400 transition hover:text-white md:text-base lg:text-lg"
						>Services</a
					>
				</li>
				<li>
					<a
						href="/"
						class="text-[0.8rem] text-gray-400 transition hover:text-white md:text-base lg:text-lg"
						>Privacy Policy</a
					>
				</li>
			</ul>
		</div>

		<!-- Social Media -->
		<div>
			<h2 class="font-semibold">Follow Us</h2>
			<div class="mt-1 flex gap-3 sm:mt-2 sm:gap-4">
				{#each socialLinks as { name, icon, url }}
					<a
						href={url}
						target="_blank"
						aria-label={name}
						class="text-xl text-gray-400 transition hover:text-white sm:text-2xl"
					>
						<i class={`fab ${icon}`}></i>
					</a>
				{/each}
			</div>
		</div>
	</div>

	<!-- Bottom Section -->
	<div class="mt-4 pt-4 text-center sm:mt-6">
		<p class="text-xs text-gray-500 sm:text-sm">
			&copy; {year} Finance & Investment Club, NITS. All rights reserved.
		</p>
	</div>
</footer>

<style>
	@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');
</style>
