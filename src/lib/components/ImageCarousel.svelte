<script lang="ts">
	import fare1 from '$lib/assets/fare1.jpg';
	import fare2 from '$lib/assets/fare2.jpg';
	import fare3 from '$lib/assets/fare3.jpg';
	import BlurFade from './ui/BlurFade.svelte';
	import { cn } from '$lib/utils.js';

	export let images = [fare1, fare2, fare3];

	export let gradVar: string =
		'font-bold animate-text-gradient bg-gradient-to-r from-[#ACACAC] via-[#363636] to-[#ACACAC] bg-[200%_auto] text-center text-transparent bg-clip-text';
</script>

<section class="bg-transparent py-20">
	<div class="container mx-auto px-6">
		<BlurFade delay={0.25}>
			<h2 class="mb-12 text-center text-h1 {gradVar}">
				Flaskbacks
			</h2>
		</BlurFade>
		<div class="w-full">
			<div class="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
				{#each images as item, i}
					<div
						class={cn(
							'overflow-hidden rounded-lg',
							i === 0 && 'md:col-span-2 md:row-span-2',
							i === 1 && 'md:col-span-2',
							i === 2 && 'md:col-start-3 md:row-start-1'
						)}
					>
						<img
							class={cn(
								'h-full w-full rounded-lg object-cover opacity-90 grayscale transition-all duration-300 hover:scale-[1.01] hover:opacity-100 hover:grayscale-0',
								i === 0 && 'h-72 md:h-full', // Adjust height for the first image
								i === 1 && 'h-36 md:h-72', // Adjust height for the second image
								i === 2 && 'h-36 md:h-72' // Adjust height for the third image
							)}
							alt="Flaskback"
							src={item}
						/>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
