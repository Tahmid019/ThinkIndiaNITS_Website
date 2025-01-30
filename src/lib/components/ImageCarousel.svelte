<!-- src/lib/components/ImageCarousel.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';

	import fare1 from '$lib/assets/fare1.jpg';
	import fare2 from '$lib/assets/fare2.jpg';
	import fare3 from '$lib/assets/fare3.jpg';
	import BlurFade from './ui/BlurFade.svelte';
	import Marquee from './ui/Marquee.svelte';
	// import { cn } from 'classnames'; // or your utility function

	const images = [fare1, fare2, fare3];

	let currentIndex = 0;

	const nextSlide = () => {
		currentIndex = (currentIndex + 1) % images.length;
	};

	onMount(() => {
		const interval = setInterval(nextSlide, 5000);
		return () => clearInterval(interval);
	});
</script>

<section class="bg-transparent py-20">
	<div class="container mx-auto px-6">
		<BlurFade delay={0.25}>
			<h2
				class="mb-12 text-center text-3xl font-bold text-white sm:text-4xl lg:text-5xl xl:text-6xl"
			>
				Flaskbacks
			</h2>
		</BlurFade>
		<div class="relative">
			<Marquee pauseOnHover class="[--duration:50s]">
				{#each Array(3).fill(images).flat() as item, i (i)}
					<div class="flex flex-row items-center gap-2">
						<img
							class="w-32 rounded-md grayscale hover:grayscale-0 md:w-40 lg:w-60"
							alt=""
							src={item}
						/>
					</div>
				{/each}
			</Marquee>
			<div
				class="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent"
			></div>
			<div
				class="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent"
			></div>
		</div>
	</div>
</section>
