<script lang="ts">
	const year: number = new Date().getFullYear();

	const socialLinks = [
		{ name: 'Facebook', icon: 'fa-facebook', url: 'https://facebook.com' },
		{ name: 'Instagram', icon: 'fa-instagram', url: 'https://instagram.com' },
		{ name: 'LinkedIn', icon: 'fa-linkedin', url: 'https://linkedin.com' }
	];
</script>

<footer class="bg-white px-4 py-8 text-black backdrop-blur-md transition-all duration-300 lg:py-12">
	<div class="mx-auto max-w-[85%] grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-center">
		
		<!-- Contact Section -->
		<div class="flex flex-col items-start">
			<h2 class="text-small md:text-body font-semibold mb-2">Contact Us</h2>
			<p class="text-tiny md:text-small text-slate-500">Email: thinkindia@nits.ac.in</p>
			<p class="text-tiny md:text-small text-slate-500">Phone: +91 99547 22871</p>
		</div>

		<!-- Quick Links -->
		<div class="flex flex-col items-start">
			<h2 class="text-small md:text-body font-semibold mb-2">Quick Links</h2>
			<ul class="flex flex-col items-start">
				<li>
					<a href="/About" class="text-tiny md:text-small text-gray-400 transition hover:text-black">About Us</a>
				</li>
				<li>
					<a href="/Blog" class="text-tiny md:text-small text-gray-400 transition hover:text-black">Services</a>
				</li>
				<li>
					<a href="/" class="text-tiny md:text-small text-gray-400 transition hover:text-black">Privacy Policy</a>
				</li>
			</ul>
		</div>

		<!-- Social Media -->
		<div class="flex flex-col items-start">
			<h2 class="text-small md:text-body font-semibold mb-3">Follow Us</h2>
			<div class="flex justify-center flex-wrap gap-4">
				{#each socialLinks as { name, icon, url }}
					<a
						href={url}
						target="_blank"
						aria-label={name}
						class="text-gray-400 transition transform hover:text-black hover:scale-110"
					>
						<i class={`fab ${icon} text-2xl sm:text-3xl`}></i>
					</a>
				{/each}
			</div>
		</div>

	</div>

	<!-- Bottom Section -->
	<div class="mt-8 pt-6 border-t border-gray-200 text-center">
		<p class="text-xs text-gray-500 sm:text-sm">
			&copy; {year} Think India, NITS. All rights reserved.
		</p>
	</div>
</footer>

<style>
	@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');
</style>
