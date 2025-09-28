<script lang="ts">
	import { Motion } from 'svelte-motion';

	export let delay: number = 0;
	export let duration: number = 0.3;
	export let text: string =
		'The Finance and Investment Club at NIT Silchar is a student-driven organization dedicated to enhancing financial literacy and investment knowledge among its members. The club achieves this by conducting workshops, seminars, and interactive events that cover various aspects of finance and investment strategies.';
	export let color: string = 'text-black';
	export let sizing: string = 'text-small';
</script>

<p class="mb-4 {color} {sizing}">
	{#each text.split(' ') as item, index}
		<Motion
			initial={{ opacity: 0, filter: 'blur(4px)', rotateX: 90, y: 5 }}
			transition={{
				ease: 'easeOut',
				duration: duration,
				delay: index * delay
			}}
			animate={{
				opacity: 1,
				filter: 'blur(0px)',
				rotateX: 0,
				y: 0
			}}
			let:motion
		>
			<span use:motion class="inline-block whitespace-pre tracking-tighter">
				{item}
			</span>
		</Motion>
	{/each}
</p>
