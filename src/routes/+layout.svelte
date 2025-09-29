<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Loading from '$lib/components/ui/Loading.svelte';
	import { onMount } from 'svelte';
	import { dev } from '$app/environment';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	
	injectAnalytics({ mode: dev ? 'development' : 'production' });

	let isLoading: boolean = true;

	onMount(() => {
		setTimeout(() => {
			isLoading = false;
		}, 3000);
	});
</script>

<Loading {isLoading} />

{#if !isLoading}
	<Navbar />
	<slot />
{/if}
