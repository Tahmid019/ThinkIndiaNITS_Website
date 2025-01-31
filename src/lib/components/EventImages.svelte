<script lang="ts">
	import images from '$lib/assets/eventImages/eventImages.js';
	import { cn } from '$lib/utils.js';
	import BlurFade from './ui/BlurFade.svelte';
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
								'h-full w-full rounded-lg object-cover opacity-50 grayscale transition-all duration-300 hover:scale-[1.1] hover:opacity-100 hover:grayscale-0',
								i === 0 && 'h-72 md:h-full', // Adjust height for the first image
								i === 1 && 'h-36 md:h-72', // Adjust height for the second image
								i === 2 && 'h-36 md:h-72' // Adjust height for the third image
							)}
							alt="Flaskback"
							src={item.img}
						/>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
