<!-- src/routes/+page.svelte -->
<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Timeline from '$lib/components/Timeline.svelte';
	import ImageCarousel from '$lib/components/ImageCarousel.svelte';

	import GradientAnimation from '$lib/components/ui/GradientAnimation.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<GradientAnimation>
	<div class="home-container bg-black">
		<Hero />
		<About />
		<Timeline />
		<ImageCarousel />
	</div>
	<Footer />
</GradientAnimation>
