<script lang="ts">
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';
    import TeamCard from '$lib/components/TeamCard.svelte';
    import teamData from '$lib/data/TeamData.json' assert { type: 'json' };
    const data = teamData;
    import BlackBg from '../images/black-bg.jpeg';
    import LightBg from '../images/images2.jpg';
  
    // Theme mode store
    const themeMode = writable<'dark' | 'light'>('dark'); // Replace this with your actual theme context or logic
  
    let bgImg = BlackBg;
    let selectedRole: keyof typeof roleFilters = 'President';
  
    const roleFilters = {
      President: (member: any) => member.position === 'President' || member.position === 'Vice President',
      Heads: (member: any) => member.position.includes('Head'),
      Analysts: (member: any) => member.position.includes('Analyst'),
      Members: (member: any) => member.position.toLowerCase() === 'member',
    };
  
    let filteredTeamByRole = data.filter(roleFilters[selectedRole]);
    let memberTeams = {
      Developer: [],
      'Junior Fundamental Analyst': [],
      'Junior Technical Analyst': [],
      'PR and Marketing': [],
      Content: [],
      Design: [],
    };
  
    const updateFilteredTeam = () => {
      filteredTeamByRole = data.filter(roleFilters[selectedRole]);
      if (selectedRole === 'Members') {
        memberTeams = {
          Developer: [],
          'Junior Fundamental Analyst': [],
          'Junior Technical Analyst': [],
          'PR and Marketing': [],
          Content: [],
          Design: [],
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
    class="team-page flex items-center justify-center p-6 min-h-screen"
    style="background-image: url({bgImg}); background-size: cover; background-position: center; padding-top: 70px;"
  >
    <div class="flex flex-col items-center w-[80vw] max-w-screen-lg">
      <!-- Team Header -->
      <h1 class="text-center text-4xl md:text-5xl font-bold mb-8">
        Meet Our Team
      </h1>
  
      <!-- Role Selector -->
      <div class="role-selector flex justify-center gap-6 mb-10">
        {#each ['President', 'Heads', 'Analysts', 'Members'] as role}
          <button
            on:click={() => (selectedRole = role)}
            class="py-2 px-6 rounded-full shadow-md font-semibold transition-all duration-200 {selectedRole === role ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'}"
          >
            {role}
          </button>
        {/each}
      </div>
  
      <!-- Display team categories for "Members" -->
      {#if selectedRole === 'Members'}
        <div class="team-sections w-full mt-8">
          {#each Object.keys(memberTeams) as team}
            {#if memberTeams[team].length > 0}
              <div class="team-section w-full mb-12">
                <h2 class="text-2xl font-semibold text-center mb-4">{team} Team</h2>
                <div class="team-grid flex flex-wrap justify-center gap-8 w-full">
                  {#each memberTeams[team] as member, index}
                    <TeamCard
                      key={member.name + index}
                      {name}
                      {position}
                      {url}
                      {facebook}
                      {instagram}
                      {linkedin}
                      themeMode={$themeMode}
                    />
                  {/each}
                </div>
              </div>
            {/if}
          {/each}
        </div>
      {:else}
        <div class="team-grid flex flex-wrap justify-center gap-8 w-full mt-8">
          {#if filteredTeamByRole.length > 0}
            {#each filteredTeamByRole as member, index}
              <TeamCard
                key={member.name + index}
                {name}
                {position}
                {url}
                {facebook}
                {instagram}
                {linkedin}
                themeMode={$themeMode}
              />
            {/each}
          {:else}
            <p class="text-center text-gray-400 col-span-full">
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
  