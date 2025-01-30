<script lang="ts">
	import { onMount } from 'svelte';
	import TeamCard from '$lib/components/ui/TeamCard.svelte';
	import tdata from '$lib/data/team.js';
	import BlurFade from './ui/BlurFade.svelte';

	let selectedRole = 'President';

	// Filter data based on position
	let presidents = tdata.filter((member) => member.position === 'President');
	let heads = tdata.filter((member) => member.position.endsWith('Head'));
	let analysts = tdata.filter((member) => member.position.endsWith('Analyst'));
	let members = tdata.filter((member) => member.position === 'member');
	let mentors = tdata.filter((member) => member.position === 'Mentor');

	// Group members by team (e.g., Design, Development)
	// let memberTeams: { [key: string]: typeof tdata } = {
	//   Design: tdata.filter(member => member.position === 'Designer'),
	//   Development: tdata.filter(member => member.position === 'Developer'),
	// };

	// Combine all roles into a single array for filtering
	let filteredTeamByRole: typeof tdata = [];

	function filterTeamByRole(role: string) {
		switch (role) {
			case 'President':
				filteredTeamByRole = presidents;
				break;
			case 'Heads':
				filteredTeamByRole = heads;
				break;
			case 'Analysts':
				filteredTeamByRole = analysts;
				break;
			case 'Mentors':
				filteredTeamByRole = mentors;
				break;
			case 'Members':
				filteredTeamByRole = members;
				break;
			default:
				filteredTeamByRole = [];
		}
	}

	function setSelectedRole(role: string) {
		selectedRole = role;
		filterTeamByRole(role);
	}
	onMount(() => {
		filterTeamByRole(selectedRole);
	});
</script>

<div
	class="team-page flex min-h-screen items-center justify-center bg-transparent bg-cover bg-center p-6 pt-24 lg:pt-32"
>
	<div class="flex w-[90vw] max-w-screen-lg flex-col items-center">
		<!-- Team Header -->
		<BlurFade>
			<h1
				class="mb-8 text-center text-3xl font-bold text-white
 sm:text-4xl lg:text-5xl xl:text-6xl"
			>
				Meet Our Team
			</h1>
		</BlurFade>
		<!-- Role Selector -->
		<div class="role-selector mb-10 flex flex-wrap justify-center gap-4">
			{#each ['President', 'Heads', 'Analysts', 'Mentors', 'Members'] as role}
				<BlurFade>
					<button
						on:click={() => setSelectedRole(role)}
						class="rounded-full px-6 py-2 font-semibold shadow-md transition-all duration-200 {selectedRole ===
						role
							? 'bg-white text-black hover:bg-gray-300'
							: 'bg-gray-700 text-gray-300 hover:bg-gray-600'}"
					>
						{role}
					</button>
				</BlurFade>
			{/each}
		</div>

		<!-- Display team categories for "Members" -->
		{#if selectedRole === 'Members'}
			<div class="team-sections mt-8 w-full">
				<!-- {#each members as team} -->
				<!-- {#if memberTeams[team].length > 0} -->
				<!-- <div class="team-section w-full mb-12">
                <h2
                  class="text-2xl font-semibold text-center mb-4 bg-slate-700"
                >
                  {team} Team
                </h2> -->
				<div
					class="team-grid grid w-full grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
				>
					{#each members as member}
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
				</div>
				<!-- </div> -->
				<!-- {/if} -->
				<!-- {/each} -->
			</div>
		{/if}

		<!-- Display other roles -->
		{#if selectedRole !== 'Members'}
			<div
				class="team-grid mt-8 grid w-full grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
			>
				{#if filteredTeamByRole.length > 0}
					{#each filteredTeamByRole as member}
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
		{/if}
	</div>
</div>
