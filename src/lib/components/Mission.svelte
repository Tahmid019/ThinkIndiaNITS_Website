<script>
	import BlurFade from './ui/BlurFade.svelte';
</script>

<BlurFade>
	<div
		class="group mb-16 rounded-lg border border-slate-600 bg-slate-800/35 p-8 shadow-lg transition-all duration-300 hover:bg-white"
	>
		<BlurFade delay={0.15}>
			<h2
				class="mb-6 text-3xl font-bold text-white transition-all
 duration-300 group-hover:text-gray-800 sm:text-4xl lg:text-5xl xl:text-6xl"
			>
				Our Mission
			</h2>
		</BlurFade>
		<BlurFade delay={0.35}>
			<p
				class="mb-4 text-base text-gray-200 transition-all duration-300
 group-hover:text-gray-600 sm:text-lg lg:text-xl xl:text-xl"
			>
				At Finance Club, we believe that financial literacy is the key to achieving financial
				freedom. Our team of experts is dedicated to providing you with accurate, up-to-date, and
				actionable insights to help you navigate the complex world of finance.
			</p>
			<p
				class="text-base text-gray-300 transition-all duration-300 group-hover:text-gray-700 lg:text-lg"
			>
				Whether you're a seasoned investor or just starting your financial journey, we're here to
				guide you every step of the way.
			</p>
		</BlurFade>
	</div>
</BlurFade>
