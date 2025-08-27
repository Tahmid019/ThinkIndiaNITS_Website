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
		<p
			class="mx-auto max-w-2xl text-small text-gray-200/85"
		>
			Welcome to <span class="font-semibold text-white">Finance Club</span>, your trusted source for
			insightful financial analysis, investment strategies, and market trends. Our mission is to
			empower you with the knowledge to make informed financial decisions.
		</p>
	</BlurFade>
</div>
