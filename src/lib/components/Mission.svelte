<script>
	import BlurFade from './ui/BlurFade.svelte';
</script>

<BlurFade>
	<div
		class="group mb-16 rounded-lg border border-slate-600 bg-slate-800/35 p-8 shadow-lg transition-all duration-300 hover:bg-white"
	>
		<BlurFade delay={0.15}>
			<h2
				class="mb-6 text-h3 font-bold text-white transition-all
 duration-300 group-hover:text-gray-800 "
			>
				Our Mission
			</h2>
		</BlurFade>
		<BlurFade delay={0.35}>
			<p
				class="mb-4 text-small text-justify text-gray-200 transition-all duration-300
 group-hover:text-gray-600 "
			>
				At Finance Club, we believe that financial literacy is the key to achieving financial
				freedom. Our team of experts is dedicated to providing you with accurate, up-to-date, and
				actionable insights to help you navigate the complex world of finance.
			</p>
			<p
				class="text-small text-justify text-gray-300 transition-all duration-300 group-hover:text-gray-700"
			>
				Whether you're a seasoned investor or just starting your financial journey, we're here to
				guide you every step of the way.
			</p>
		</BlurFade>
	</div>
</BlurFade>
