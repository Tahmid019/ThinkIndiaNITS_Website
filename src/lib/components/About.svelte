<!-- src/lib/components/About.svelte -->
<script lang="ts">
	import BlurFade from '$lib/components/ui/BlurFade.svelte';

	import { onMount } from 'svelte';
	let isVisible = false;

	import TextGenerate from './ui/TextGenerate.svelte';

  export let delay: number = 0.2;
  export let duration: number = 0.9;
  export let FinanceClubDescription: string = "The Finance and Investment Club at NIT Silchar is a student-driven organization dedicated to enhancing financial literacy and investment knowledge among its members. The club achieves this by conducting workshops, seminars, and interactive events that cover various aspects of finance and investment strategies.";
	export let FinanceClubDescription2: string = "Through these initiatives, the Finance and Investment Club at NIT Silchar strives to equip students with practical financial skills and insights, preparing them for successful careers in the financial sector. Sources";
	export let FinanceClubDescription2_color:string = "text-gray-400";
	export let FinanceClubDescription2_sizing:string = "text-base  sm:text-lg lg:text-xl xl:text-xl";

	// export let shineVar:string  = "animate-shine bg-[linear-gradient(110deg,#939393,45%,#1e2631,55%,#939393)] bg-[length:200%_100%] text-transparent bg-clip-text";
	export let gradVar:string = "font-bold animate-text-gradient bg-gradient-to-r from-[#ACACAC] via-[#363636] to-[#ACACAC] bg-[200%_auto] text-3xl text-center text-transparent bg-clip-text";

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
	<div class="container mx-auto px-6">
		<BlurFade delay={0.25}>
			<h1
				class="mb-10 text-center text-3xl tracking-tighter {gradVar} sm:text-4xl lg:text-5xl xl:text-6xl"
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
				<BlurFade delay={0.05}>
					<TextGenerate delay={delay} duration={duration} text={FinanceClubDescription}/>
					</BlurFade
				>
				<BlurFade delay={0.05}>
					<p class="">
						
					</p>
					<TextGenerate delay={delay} duration={duration} text={FinanceClubDescription2} color={FinanceClubDescription2_color} sizing={FinanceClubDescription2_sizing} />
					</BlurFade
				>
			</div>
		</div>
	</div>
</section>
