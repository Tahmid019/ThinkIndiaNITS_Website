<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import TeamCard from '$lib/components/TeamCard.svelte';
	import teamData from '$lib/data/TeamData.json' assert { type: 'json' };
	import BlackBg from '$lib/assets/admin.jpg';
	import LightBg from '$lib/assets/admin.jpg';

	// Define the TeamMember Type
	type TeamMember = {
		name: string;
		position: string;
		url?: string;
		facebook?: string;
		instagram?: string;
		linkedin?: string;
		team?: string;
	};

	const data: TeamMember[] = teamData;

	// Theme mode store
	const themeMode = writable<'dark' | 'light'>('dark');

	let bgImg = BlackBg;
	let selectedRole: keyof typeof roleFilters = 'President';

	// Define role filters with proper types
	const roleFilters: Record<string, (member: TeamMember) => boolean> = {
		President: (member) => member.position === 'President' || member.position === 'Vice President',
		Heads: (member) => member.position.includes('Head'),
		Analysts: (member) => member.position.includes('Analyst'),
		Members: (member) => member.position.toLowerCase() === 'member'
	};

	let filteredTeamByRole: TeamMember[] = data.filter(roleFilters[selectedRole]);

	let memberTeams: Record<string, TeamMember[]> = {
		Developer: [],
		'Junior Fundamental Analyst': [],
		'Junior Technical Analyst': [],
		'PR and Marketing': [],
		Content: [],
		Design: []
	};

	// Update filtered team
	const updateFilteredTeam = () => {
		filteredTeamByRole = data.filter(roleFilters[selectedRole]);

		if (selectedRole === 'Members') {
			// Reset memberTeams
			memberTeams = {
				Developer: [],
				'Junior Fundamental Analyst': [],
				'Junior Technical Analyst': [],
				'PR and Marketing': [],
				Content: [],
				Design: []
			};

			filteredTeamByRole.forEach((member) => {
				if (member.position.toLowerCase() === 'member' && member.team) {
					if (memberTeams[member.team]) {
						memberTeams[member.team].push(member);
					}
				}
			});
		}
	};

	$: updateFilteredTeam();

	onMount(() => {
		const unsubscribe = themeMode.subscribe((mode) => {
			bgImg = mode === 'dark' ? BlackBg : LightBg;
		});
		return unsubscribe;
	});
</script>

<div
	class="team-page flex min-h-screen items-center justify-center p-6"
	style="background-image: url({bgImg}); background-size: cover; background-position: center; padding-top: 70px;"
>
	<div class="flex w-[80vw] max-w-screen-lg flex-col items-center">
		<!-- Team Header -->
		<h1 class="mb-8 text-center text-4xl font-bold md:text-5xl">Meet Our Team</h1>

		<!-- Role Selector -->
		<div class="role-selector mb-10 flex justify-center gap-6">
			{#each Object.keys(roleFilters) as role}
				<button
					on:click={() => (selectedRole = role)}
					class="rounded-full px-6 py-2 font-semibold shadow-md transition-all duration-200 {selectedRole === role ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'}"
				>
					{role}
				</button>
			{/each}
		</div>

		<!-- Display team categories for "Members" -->
		{#if selectedRole === 'Members'}
			<div class="team-sections mt-8 w-full">
				{#each Object.keys(memberTeams) as team}
					{#if memberTeams[team].length > 0}
						<div class="team-section mb-12 w-full">
							<h2 class="mb-4 text-center text-2xl font-semibold">{team} Team</h2>
							<div class="team-grid flex w-full flex-wrap justify-center gap-8">
								{#each memberTeams[team] as member, index}
									<TeamCard
										{...member}
										themeMode={$themeMode}
									/>
								{/each}
							</div>
						</div>
					{/if}
				{/each}
			</div>
		{:else}
			<div class="team-grid mt-8 flex w-full flex-wrap justify-center gap-8">
				{#if filteredTeamByRole.length > 0}
					{#each filteredTeamByRole as member}
						<TeamCard
							{...member}
							themeMode={$themeMode}
						/>
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

<style>
	:global(body) {
		margin: 0;
		font-family: sans-serif;
	}
</style>
