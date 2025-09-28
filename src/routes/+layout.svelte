<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Loading from '$lib/components/ui/Loading.svelte';
	import { onMount } from 'svelte';

	let isLoading: boolean = true;

	onMount(() => {
		setTimeout(() => {
			isLoading = false;
		}, 3000);
	});
</script>

<!-- <Loading {isLoading} /> -->

{#if true}
	<Navbar />
	<slot />
{/if}
