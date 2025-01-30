<script lang="ts">
	import BlurFade from '$lib/components/ui/BlurFade.svelte';
	import Globe from './ui/Globe.svelte';
</script>

<section class="bg-transparent pt-20 pb-28 lg:pb-0 text-center">
	<div class="hero-container flex flex-col items-center px-6 md:px-12 lg:flex-row lg:px-36">
		<div class="container mx-auto px-4  md:pt-20 lg:pt-32 pb-32 text-center md:px-6 lg:text-right">
			<BlurFade delay={0.25}>
				<h1
					class="mb-4 text-4xl font-bold tracking-tighter text-white sm:text-5xl lg:text-6xl xl:text-7xl"
				>
					Finance & Investment Club
				</h1>
			</BlurFade>

			<BlurFade delay={0.5}>
				<p class="mb-8 text-lg tracking-tighter text-white sm:text-xl xl:text-3xl">NIT Silchar</p>
			</BlurFade>

			<BlurFade delay={0.75}>
				<a
					href="/About"
					class="rounded-full border px-6 py-3 font-semibold text-white backdrop-blur-sm transition-colors hover:bg-gray-100 hover:text-black sm:px-8"
				>
					Learn More
				</a>
			</BlurFade>
		</div>
		<div class="img w-full max-w-xs sm:max-w-sm md:max-w-md lg:block lg:max-w-lg">
			<BlurFade delay={0.75}>
			<!-- <img src="3delem.png" alt="elem-3d" class="h-auto w-full" /> -->
			 <Globe class="-top-32"/>
			</BlurFade>
		</div>
	</div>
</section>
