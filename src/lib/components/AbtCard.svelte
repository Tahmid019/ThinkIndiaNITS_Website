<script>
	import BlurFade from './ui/BlurFade.svelte';
</script>

<div class="mb-16 mt-10 text-center">
	<BlurFade>
		<h1
			class="mb-4 text-3xl font-bold text-white sm:text-4xl
 lg:text-5xl xl:text-6xl"
		>
			About Us
		</h1>
	</BlurFade>
	<BlurFade delay={0.15}>
		<p
			class="mx-auto max-w-2xl text-xl text-gray-200/85 sm:text-2xl lg:text-3xl
 xl:text-3xl"
		>
			Welcome to <span class="font-semibold text-white">Finance Club</span>, your trusted source for
			insightful financial analysis, investment strategies, and market trends. Our mission is to
			empower you with the knowledge to make informed financial decisions.
		</p>
	</BlurFade>
</div>
