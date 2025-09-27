<script lang="ts">
	import BlurFade from './ui/BlurFade.svelte';
	export let gradVar: string =
		'font-bold animate-text-gradient bg-gradient-to-r from-[#ACACAC] via-[#363636] to-[#ACACAC] bg-[200%_auto] text-center text-transparent bg-clip-text';
</script>

<div class="mb-16 mt-10 text-center">
	<BlurFade>
		<h1
			class="mb-4 text-h1 font-bold tracking-tighter {gradVar}"
		>
			About Us
		</h1>
	</BlurFade>
	<BlurFade delay={0.15}>
		<p class="mx-auto max-w-[75%] text-justify text-base text-slate-600">
			Welcome to <span class="font-bold text-black">Think India NIT Silchar</span> — a dynamic forum of ideas, 
			innovation, and inspiration. Here, we bring together passionate students, researchers, and young 
			professionals who aspire to contribute meaningfully to <span class="text-black font-semibold">nation-building</span>.  
			<br /><br />
			Our vision is to create an ecosystem where intellect meets purpose — where discussions on policy, 
			education, culture, and technology evolve into actionable initiatives. Through <span class="italic">seminars, 
			workshops, publications, and community projects</span>, we strive to nurture leadership, ignite curiosity, 
			and foster a spirit of responsibility towards society.  
			<br /><br />
			Think India is not just a platform — it is a 
				journey of ideas shaping the future of our nation. Together, let's think, act, and build a 
			<strong class="text-black">self-reliant India</strong>.
		</p>

	</BlurFade>
</div>
