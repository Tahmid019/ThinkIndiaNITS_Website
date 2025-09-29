<script lang="ts">
	import { onMount } from 'svelte';
	import TeamCard from '$lib/components/ui/TeamCard.svelte';
	import BlurFade from './ui/BlurFade.svelte';

	export let tdata: any[] = [];
	export let gradVar: string =
		'font-bold animate-text-gradient bg-gradient-to-r from-[#ACACAC] via-[#363636] to-[#ACACAC] bg-[200%_auto] text-center text-transparent bg-clip-text';

	let selectedRole: string = 'President';

	$: displayedMembers = tdata.filter((member) => {
		switch (selectedRole.toLowerCase()) {
			case 'president':
				return member.position.toLowerCase().endsWith('president');
			case 'heads':
				return member.position.toLowerCase().endsWith('head');
			case 'analysts':
				return member.position.toLowercase().endsWith('analyst');
			case 'mentors':
				return member.position.toLowerCase().endsWith('mentor');
			case 'members':
				return member.position.toLowerCase().endsWith('member');
			default:
				return false;
		}
	});

	function setSelectedRole(role: string) {
		selectedRole = role;
	}
</script>

<div class="team-page bg-white flex min-h-screen items-center justify-center bg-transparent bg-cover bg-center p-6 pt-24 lg:pt-32">
	<div class="flex w-[90vw] max-w-screen-lg flex-col items-center">
		<!-- Team Header -->
		<BlurFade delay={0.25}>
			<h1 class="mb-10 text-center text-h1 tracking-tighter {gradVar}">
				Meet Our Team
			</h1>
		</BlurFade>

		<!-- Role Selector -->
		<div class="role-selector mb-10 flex flex-wrap justify-center gap-4">
			{#each ['President', 'Heads', 'Analysts', 'Mentors', 'Members'] as role}
				<BlurFade>
					<button
						on:click={() => setSelectedRole(role)}
						class="rounded-full px-6 py-2 font-semibold shadow-md transition-all duration-200 {selectedRole === role
							? 'bg-white text-black hover:bg-gray-300'
							: 'bg-gray-700 text-gray-300 hover:bg-gray-600'}"
					>
						{role}
					</button>
				</BlurFade>
			{/each}
		</div>

		<!-- Team Grid -->
		<div class="team-sections mt-8 w-full">
			<div class="team-grid grid w-full grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{#if displayedMembers.length > 0}
					{#each displayedMembers as member}
						<BlurFade>
							<TeamCard
								name={member.name}
								position={member.position}
								url={member.imageUrl}
								facebook={member.facebook}
								instagram={member.instagram}
								linkedin={member.linkedin}
							/>
						</BlurFade>
					{/each}
				{:else}
					<p class="col-span-full text-center text-gray-400">
						No team members found for {selectedRole}
					</p>
				{/if}
			</div>
		</div>
	</div>
</div>
