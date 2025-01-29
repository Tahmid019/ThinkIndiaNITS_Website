<!-- src/lib/components/About.svelte -->
<script lang="ts">
	import admin from '$lib/assets/admin.jpg';
	import BlurFade from '$lib/components/ui/BlurFade.svelte';

	import { onMount } from 'svelte';
	let isVisible = false;

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

<section id="about" class="bg-transparent py-20">
	<div class="container mx-auto px-6">
		<BlurFade delay={0.25}>
			<h1
				class="mb-10 text-center text-3xl font-bold tracking-tighter text-white sm:text-4xl lg:text-5xl xl:text-6xl"
			>
				About Us
			</h1>
		</BlurFade>
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
			<div
				class="transition-transform duration-1000 {isVisible ? 'translate-x-0' : '-translate-x-20'}"
			>
				<img src={admin} alt="About Us" class="rounded-lg shadow-lg" />
			</div>
			<div
				class="transition-transform delay-200 duration-1000 {isVisible
					? 'translate-x-0'
					: 'translate-x-20'}"
			>
				<BlurFade delay={0.05}>
					<p class="mb-4 text-base text-gray-300 sm:text-lg lg:text-xl xl:text-xl">
						The Finance and Investment Club at NIT Silchar is a student-driven organization
						dedicated to enhancing financial literacy and investment knowledge among its members.
						The club achieves this by conducting workshops, seminars, and interactive events that
						cover various aspects of finance and investment strategies.
					</p></BlurFade
				>
				<BlurFade delay={0.05}>
					<p class="text-base text-gray-400 sm:text-lg lg:text-xl xl:text-xl">
						Through these initiatives, the Finance and Investment Club at NIT Silchar strives to
						equip students with practical financial skills and insights, preparing them for
						successful careers in the financial sector. Sources
					</p></BlurFade
				>
			</div>
		</div>
	</div>
</section>
