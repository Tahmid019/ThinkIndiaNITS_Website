<script lang="ts">
	import AbtCard from '$lib/components/AbtCard.svelte';
	// import AbtEnd from '$lib/components/AbtEnd.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Mission from '$lib/components/Mission.svelte';
	import Sponsors from '$lib/components/Sponsors.svelte';
	import GradientAnimation from '$lib/components/ui/GradientAnimation.svelte';
</script>

<!-- Main About Page -->
<GradientAnimation>
	<div class="bg-trasnparent min-h-screen py-20">
		<div class="container mx-auto px-4">
			<!-- Page Header -->
			<AbtCard />

			<!-- Mission Section -->
			<Mission />

			<!-- Team Section -->
			<Sponsors />

			<!-- Call to Action -->
			<!-- <AbtEnd /> -->

			<!-- Footer -->
		</div>
	</div>
	<Footer />
</GradientAnimation>

<!-- <style>
	/* Custom styles for hover effects */
	.team-card:hover {
		transform: translateY(-10px);
		transition: transform 0.3s ease;
	}
</style> -->
