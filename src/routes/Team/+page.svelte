<script>
	import TeamPage from '$lib/components/TeamPage.svelte';
	import GradientAnimation from '$lib/components/ui/GradientAnimation.svelte';

	export let data;
	let tdata = data.tdata;	

	console.log("Data ---")
	console.log(tdata);
</script>

<GradientAnimation>
	<TeamPage tdata={tdata}/>
</GradientAnimation>
