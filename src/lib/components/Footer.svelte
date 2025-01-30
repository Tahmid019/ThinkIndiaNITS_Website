<script lang="ts">
	const year: number = new Date().getFullYear();

	const socialLinks = [
		{ name: 'Facebook', icon: 'fa-facebook', url: 'https://facebook.com' },
		{ name: 'Instagram', icon: 'fa-instagram', url: 'https://instagram.com' },
		{ name: 'LinkedIn', icon: 'fa-linkedin', url: 'https://linkedin.com' }
	];
</script>

<footer
	class="bg-slate-800/25 px-6 py-0 lg:py-8 text-white backdrop-blur-md transition-all duration-300 hover:bg-slate-800/35"
>
	<div class="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
		<!-- Contact Section -->
		<div>
			<h2 class="text-lg font-semibold">Contact Us</h2>
			<p class="mt-2 text-gray-400">Email: tahmif786.com</p>
			<p class="text-gray-400">Phone: +91 99547 22871</p>
		</div>

		<!-- Quick Links -->
		<div>
			<h2 class="text-lg font-semibold">Quick Links</h2>
			<ul class="mt-2">
				<li><a href="/About" class="text-gray-400 transition hover:text-white">About Us</a></li>
				<li><a href="/Blog" class="text-gray-400 transition hover:text-white">Services</a></li>
				<li><a href="/" class="text-gray-400 transition hover:text-white">Privacy Policy</a></li>
			</ul>
		</div>

		<!-- Social Media -->
		<div>
			<h2 class="text-lg font-semibold">Follow Us</h2>
			<div class="mt-2 flex gap-4">
				{#each socialLinks as { name, icon, url }}
					<a
						href={url}
						target="_blank"
						aria-label={name}
						class="text-2xl text-gray-400 transition hover:text-white"
					>
						<i class={`fab ${icon}`}></i>
					</a>
				{/each}
			</div>
		</div>
	</div>

	<!-- Bottom Section -->
	<div class="mt-6 pt-4 text-center">
		<p class="text-gray-500">&copy; {year} Finance & Investment Club, NITS. All rights reserved.</p>
	</div>
</footer>

<style>
	@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');
</style>
