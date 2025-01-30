<script lang="ts">
	import { Motion, AnimatePresence } from 'svelte-motion';
	import { writable } from 'svelte/store';
	import { cn } from '$lib/utils.js';

	export let url: string | undefined;
	export let name: string | undefined;
	export let position: string | undefined;
	export let facebook: string | undefined;
	export let instagram: string | undefined;
	export let linkedin: string | undefined;

	let ref: HTMLDivElement;
	const direction = writable('left');

	// Handle mouse enter to determine animation direction
	function handleMouseEnter(event: MouseEvent) {
		if (!ref) return;

		const directionValue = getDirection(event, ref);
		console.log('direction', directionValue);

		switch (directionValue) {
			case 0:
				direction.set('top');
				break;
			case 1:
				direction.set('right');
				break;
			case 2:
				direction.set('bottom');
				break;
			case 3:
				direction.set('left');
				break;
			default:
				direction.set('left');
				break;
		}
	}

	// Calculate the direction of the mouse movement
	function getDirection(ev: MouseEvent, obj: HTMLDivElement) {
		const { width: w, height: h, left, top } = obj.getBoundingClientRect();
		const x = ev.clientX - left - (w / 2) * (w > h ? h / w : 1);
		const y = ev.clientY - top - (h / 2) * (h > w ? w / h : 1);
		const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
		return d;
	}

	// Animation variants for the image
	const variants = {
		initial: { x: 0, y: 0 },
		exit: { x: 0, y: 0 },
		top: { y: 20 },
		bottom: { y: -20 },
		left: { x: 20 },
		right: { x: -20 }
	};

	// Animation variants for the text
	const textVariants = {
		initial: { y: 0, x: 0, opacity: 0 },
		exit: { y: 0, x: 0, opacity: 0 },
		top: { y: -20, opacity: 1 },
		bottom: { y: 2, opacity: 1 },
		left: { x: -2, opacity: 1 },
		right: { x: 20, opacity: 1 }
	};

	// Mobile-specific animations
	const mobileVariants = {
		initial: { scale: 1 },
		hover: { scale: 1.05 }
	};
</script>

<div
	class="profile-card transform overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
>
	<Motion let:motion>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			use:motion
			class={cn('relative h-48 w-full overflow-hidden', 'group/card')}
			bind:this={ref}
			on:mouseenter={handleMouseEnter}
			on:touchstart={() => direction.set('top')}
		>
			<AnimatePresence let:item list={[{ key: 's' }]}>
				<Motion initial="initial" whileHover={$direction} exit="exit" let:motion>
					<div class="relative h-full w-full" use:motion>
						<div
							class="absolute inset-0 z-10 hidden h-full w-full bg-black/40 transition duration-700 group-hover/card:block"
						></div>
						<Motion transition={{ duration: 0.2, ease: 'easeOut' }} {variants} let:motion>
							<div use:motion class="relative h-full w-full">
								<img
									src={url}
									alt={`${name}'s profile`}
									class="h-full w-full scale-[1.15] object-cover"
									loading="lazy"
								/>
							</div>
						</Motion>
						<Motion
							transition={{ duration: 0.5, ease: 'easeOut' }}
							variants={textVariants}
							let:motion
						>
							<div use:motion class="absolute bottom-4 left-4 z-40 text-white">
								<h3 class="text-xl font-bold">{name}</h3>
								<p class="text-sm">{position}</p>
							</div>
						</Motion>
					</div>
				</Motion>
			</AnimatePresence>
		</div>
	</Motion>

	<!-- Mobile-specific hover animation -->
	<Motion let:motion>
		<div
			use:motion
			class="caption p-6 text-center"
			initial="initial"
			whileHover="hover"
			variants={mobileVariants}
		>
			<h3 class="mb-2 text-xl font-bold text-gray-800">{name}</h3>
			<p class="mb-4 text-sm text-gray-600">{position}</p>
			<div class="social-links flex justify-center space-x-4">
				{#if facebook}
					<a
						href={facebook}
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Facebook profile"
						class="text-gray-600 transition duration-300 hover:text-blue-500"
					>
						<i class="fab fa-facebook text-2xl"></i>
					</a>
				{/if}
				{#if instagram}
					<a
						href={instagram}
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Instagram profile"
						class="text-gray-600 transition duration-300 hover:text-pink-500"
					>
						<i class="fab fa-instagram text-2xl"></i>
					</a>
				{/if}
				{#if linkedin}
					<a
						href={linkedin}
						target="_blank"
						rel="noopener noreferrer"
						aria-label="LinkedIn profile"
						class="text-gray-600 transition duration-300 hover:text-blue-600"
					>
						<i class="fab fa-linkedin text-2xl"></i>
					</a>
				{/if}
			</div>
		</div>
	</Motion>
</div>

<style>
	.profile-card {
		max-width: 300px;
		margin: 0 auto;
	}

	@media (max-width: 640px) {
		.profile-card {
			max-width: 100%;
		}

		.caption {
			transform: scale(1);
			transition: transform 0.3s ease;
		}

		.caption:hover {
			transform: scale(1.05);
		}
	}
</style>
