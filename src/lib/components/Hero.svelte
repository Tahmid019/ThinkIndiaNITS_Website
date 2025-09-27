<script lang="ts">
	import BlurFade from '$lib/components/ui/BlurFade.svelte';
	import Globe from './ui/Globe.svelte';
	import Think_india from '../assets/think_india.svg';

	// import InteractiveHover from './ui/InteractiveHover.svelte';
</script>

<section class="bg-transparent pb-28 pt-20 text-center lg:pb-0">
	<div class="hero-container flex flex-col items-center px-6 md:px-12 lg:flex-row lg:px-36">
		<div class="container mx-auto px-4 pb-32 text-center md:px-6 md:pt-20 lg:pt-32 lg:text-right">
			<BlurFade delay={0.25}>
				<h1
					class="mb-5 mt-10 flex justify-center lg:justify-end text-display font-bold tracking-tighter "
				>
					<div class="group relative overflow-hidden">
						<span class="invisible">Think India</span>
						<span
							class="absolute left-0 top-0 animate-text-gradient transition-transform duration-500 ease-in-out hover:duration-300 group-hover:-translate-y-full"
						>
							Think India
						</span>
						<span
							class="absolute left-0 top-0 translate-y-full animate-text-gradient transition-transform duration-500 ease-in-out hover:duration-300 group-hover:translate-y-0"
						>
							Think India
						</span>
					</div>
				</h1>
			</BlurFade>

			<BlurFade delay={0.5}>
				<p class="mb-8 text-h3 tracking-tighter text-black ">NIT Silchar</p>
			</BlurFade>

			<BlurFade delay={0.75}>
				<a
					href="/About"
					class="rounded-full border px-6 py-3 font-semibold text-black backdrop-blur-sm transition-colors hover:bg-gray-100 hover:text-black sm:px-8"
				>
					Learn More
				</a>
			</BlurFade>
		</div>
		<div class="img w-full max-w-xs sm:max-w-sm md:max-w-md lg:block lg:max-w-lg">
			<BlurFade delay={0.75}>
				<!-- <img src="3delem.png" alt="elem-3d" class="h-auto w-full" /> -->
				 <img src={Think_india} alt="elem-3d" class="h-auto w-auto inline-flex justify-center"/>
				<!-- <Globe class="-top-32" /> -->
			</BlurFade>
		</div>
	</div>
</section>

<style>
	@keyframes text-gradient {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}

	.animate-text-gradient {
		background-image: linear-gradient(90deg, #acacac, #363636, #acacac);
		background-size: 200% auto;
		background-clip: text;
		-webkit-background-clip: text;
		color: transparent;
		animation: text-gradient 3s linear infinite;
	}
</style>
