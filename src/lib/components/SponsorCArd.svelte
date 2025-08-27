<script lang="ts">
	import { cn } from '$lib/utils.js';

	export let img: string;
	export let name: string;
</script>

<figure
	class={cn(
		'relative flex w-fit cursor-pointer items-center overflow-hidden rounded-2xl border',
		// light styles
		'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
		// dark styles
		'dark:border-gray-50/[.0] dark:bg-gray-50/[.00] dark:hover:bg-gray-50/[.01]'
	)}
>
	<div class="sponserImg">
		<img
			src={img}
			alt={name}
			class="w-24 h-auto grayscale transition duration-300 hover:grayscale-0"
		/>
	</div>
</figure>
