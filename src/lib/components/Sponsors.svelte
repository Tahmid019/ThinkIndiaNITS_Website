<script>
	// import sponserData from '$lib/data/sponsers.json';
	import sponsers from '$lib/data/sponsor.js';

	import Marquee from '$lib/components/ui/Marquee.svelte';
	import SponsorCard from '$lib/components/SponsorCArd.svelte';
	import BlurFade from './ui/BlurFade.svelte';

	let zeroRow = sponsers.slice(0, sponsers.length);
	// let firstRow = sponserData.sponsers.slice(0, sponserData.sponsers.length / 2);
	// let secondRow = sponserData.sponsers.slice(sponserData.sponsers.length / 2);
</script>

<div id="sponsors" class="sponser-container">
	<div class="sponser_intro pb-8" id="inside_sponsers">
		<BlurFade>
			<span
				class=" w-fit text-wrap bg-white bg-clip-text p-2 text-center text-3xl font-extrabold text-transparent sm:text-4xl lg:text-5xl xl:text-6xl
"
			>
				Past Sponsors
			</span>
		</BlurFade>
	</div>
	<div class="sponser_cards">
		<div
			class="bg-background relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg py-1 md:shadow-xl"
		>
			<Marquee pauseOnHover class="[--duration:30s]">
				{#each zeroRow as item}
					<SponsorCard {...item} />
				{/each}
			</Marquee>
			<!-- <Marquee pauseOnHover class="[--duration:30s]">
				{#each firstRow as item}
					<SponsorCard {...item} />
				{/each}
			</Marquee>
			<Marquee reverse pauseOnHover class="[--duration:30s]">
				{#each secondRow as item}
					<SponsorCard {...item} />
				{/each}
			</Marquee> -->
			<div
				class="dark:from-background pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black"
			></div>
			<div
				class="dark:from-background pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black"
			></div>
		</div>
	</div>
</div>

<style>
	.sponser-container {
		display: flex;
		flex-direction: column;
		/* row-gap: 30px; */
	}

	.sponser_intro {
		font-family: 'league-spartan', sans-serif;
		font-weight: bold;
		font-size: 30px;
		display: flex;
		justify-content: center;
	}
</style>
