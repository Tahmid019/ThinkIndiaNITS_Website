<!-- src/lib/components/About.svelte -->
<script lang="ts">
	import BlurFade from '$lib/components/ui/BlurFade.svelte';

	import { onMount } from 'svelte';
	let isVisible = false;

	import TextGenerate from './ui/TextGenerate.svelte';

	export let delay: number = 0.09;
	export let duration: number = 0.4;
	export let FinanceClubDescription: string =
		'The Think India chapter at NIT Silchar is a student-driven initiative committed to fostering intellectual growth, cultural awareness, and leadership among its members. The forum achieves this by organizing workshops, seminars, and interactive events that explore diverse themes of policy, education, innovation, and nation-building.';
	export let FinanceClubDescription2: string =
		'Through these initiatives, Think India NIT Silchar strives to nurture a generation of students who are not only academically competent but also socially conscious and culturally rooted. By encouraging discussions on policy, education, innovation, and national development, the forum equips members with the clarity of thought, leadership qualities, and a strong sense of responsibility required to address real-world challenges. In doing so, it prepares students to emerge as visionary leaders who can meaningfully contribute to society and actively participate in building a self-reliant and progressive India.';
	export let FinanceClubDescription2_color: string = 'text-gray-400';
	export let FinanceClubDescription2_sizing: string = 'text-small';

	// export let shineVar:string  = "animate-shine bg-[linear-gradient(110deg,#939393,45%,#1e2631,55%,#939393)] bg-[length:200%_100%] text-transparent bg-clip-text";
	export let gradVar: string =
		'font-bold animate-text-gradient bg-gradient-to-r from-[#ACACAC] via-[#363636] to-[#ACACAC] bg-[200%_auto] text-center text-transparent bg-clip-text';

	const handleScroll = () => {
		const aboutSection = document.getElementById('about');
		if (aboutSection) {
			const rect = aboutSection.getBoundingClientRect();
			isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
		}
	};

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<section id="about" class="bg-transparent py-10">
	<div class="container mx-auto px-6 text-justify">
		<BlurFade delay={0.25}>
			<h1
				class="mb-10 text-center text-h1 tracking-tighter {gradVar} "
			>
				About Us
			</h1>
		</BlurFade>
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
			<div
				class="transition-transform duration-1000 {isVisible ? 'translate-x-0' : '-translate-x-20'}"
			>
				<img src="admin.jpg" alt="About Us" class="rounded-lg shadow-lg" />
			</div>
			<div
				class="transition-transform delay-200 duration-1000 {isVisible
					? 'translate-x-0'
					: 'translate-x-20'}"
			>
				<BlurFade delay={0}>
					<TextGenerate {delay} {duration} text={FinanceClubDescription} />
				</BlurFade>
				<BlurFade delay={0}>
					<p class=""></p>
					<TextGenerate
						{delay}
						{duration}
						text={FinanceClubDescription2}
						color={FinanceClubDescription2_color}
						sizing={FinanceClubDescription2_sizing}
					/>
				</BlurFade>
			</div>
		</div>
	</div>
</section>
