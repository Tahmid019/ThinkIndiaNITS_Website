<script lang="ts">
	import { onMount, tick } from 'svelte';

	import BlurFade from './ui/BlurFade.svelte';

	const timelineItems = [
		{
			year: '2021',
			title: 'Idea Initiated',
			description: 'The idea of a Finance Club was initiated by the 2023 batch as a WhatsApp group.'
		},
		{
			year: '2022',
			title: 'Unofficial Meetups',
			description:
				'Students interested in finance held informal meetups on campus throughout the year. The formal idea of forming a dedicated Finance Club emerged due to the perceived lack of financial literacy within the campus.'
		},
		{
			year: '2023',
			title: 'First Official Events',
			description:
				'In January, the first official orientation for the 2026 batch was held. Stock simulation events and finance-related webinars were organized throughout the year.'
		},
		{
			year: '2024',
			title: 'Growth and Collaboration',
			description:
				'Numerous events and activities took place, with an increased frequency in the last six months. In September, junior members (2025 batch) were recruited. A team of 35 second-year members was formed, led by 6 third-year students, with 4th-year students serving as mentors. In October, collaboration with StockGro significantly elevated the club’s profile and activities.'
		},
		{
			year: '2025',
			title: 'Continuation of Legacy',
			description:
				'On February 1st, orientation for the 2028 batch will take place, marking the continuation of the Finance Club’s legacy.'
		}
	];

	let visibleItems = new Set<number>();

	onMount(async () => {
		await tick();

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						visibleItems = new Set([
							...visibleItems,
							Number((entry.target as HTMLElement).dataset.index)
						]);
					}
				});
			},
			{ threshold: 0.3 }
		);

		document.querySelectorAll('.timeline-item').forEach((el, index) => {
			el.setAttribute('data-index', index.toString());
			observer.observe(el);
		});
	});

	export let gradVar:string = "font-bold animate-text-gradient bg-gradient-to-r from-[#ACACAC] via-[#363636] to-[#ACACAC] bg-[200%_auto] text-3xl text-center text-transparent bg-clip-text";

</script>

<section class="relative bg-transparent py-20">
	<div class="container mx-auto px-6">
		<BlurFade delay={0.15}>
			<h2
				class="mb-10 text-center text-3xl font-bold tracking-tighter {gradVar} sm:text-4xl lg:text-5xl"
			>
				Our Timeline
			</h2>
		</BlurFade>

		<div class="relative">
			<!-- Timeline Vertical Line -->
			<div
				class="absolute left-1/2 hidden h-full w-1 -translate-x-1/2 transform bg-gray-300 md:block"
			></div>
			<BlurFade delay={0.25}>
				{#each timelineItems as item, index}
					<div
						class="timeline-item relative mb-12 flex translate-y-10 flex-col items-center opacity-0 transition-all duration-700 ease-out md:flex-row md:items-start"
						class:opacity-100={visibleItems.has(index)}
						class:translate-y-0={visibleItems.has(index)}
					>
						<!-- Alternate Sides on Large Screens -->
						<div class="w-full px-4 md:w-1/2 {index % 2 === 0 ? 'md:order-1' : ''}">
							<div
								class="group rounded-lg border border-slate-800 bg-slate-900/35 p-6 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white hover:shadow-xl"
							>
								<h3
									class="mb-2 text-2xl font-bold text-white transition-all duration-300 group-hover:text-gray-900"
								>
									{item.title}
								</h3>
								<p class="text-gray-300 transition-all duration-300 group-hover:text-gray-700">
									{item.description}
								</p>
							</div>
						</div>

						<!-- Timeline Year Badge -->
						<div
							class="-translate-x-1/6 absolute left-1/2 flex transform justify-center px-4 md:static md:w-1/2"
						>
							<span
								class="rounded-full border border-slate-800 bg-slate-900/35 px-6 py-2 text-lg font-semibold text-white shadow-md transition-all duration-300 hover:scale-110 hover:bg-white hover:text-black"
							>
								{item.year}
							</span>
						</div>
					</div>
				{/each}
			</BlurFade>
		</div>
	</div>
</section>
