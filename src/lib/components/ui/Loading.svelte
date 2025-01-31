<script lang="ts">
	export let isLoading = true;
</script>

{#if isLoading}
	<div class="fixed inset-0 z-50 flex items-center justify-center bg-black">
		<div class="loading">
			{#each Array(4) as j, rowIndex}
				<div class="row {j} flex justify-center">
					{#each Array(4) as i, pointIndex}
						<div
							class="point {i} animate-color h-3 w-3 rounded-full bg-white"
							style={`animation-delay: ${(rowIndex * 4 + pointIndex) * 100}ms;`}
						></div>
					{/each}
				</div>
			{/each}
		</div>
	</div>
{/if}

<style>
	.loading {
		width: 6em;
		height: 5em;
		position: relative;
		text-align: center;
	}

	.point {
		margin: 0 0.35em 0.6em;
	}

	@keyframes color {
		0%,
		100% {
			background-color: #ffffff; /* White */
			filter: blur(1px);
		}
		50% {
			background-color: #000000; /* Black */
			filter: blur(2px);
		}
	}

	.animate-color {
		animation: color 1500ms infinite ease-in-out;
	}
</style>
