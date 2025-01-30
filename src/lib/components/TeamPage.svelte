<script lang="ts">
    import { onMount } from 'svelte';
    import TeamCard from '$lib/components/ui/TeamCard.svelte';
    import tdata from "$lib/data/team.js";
	import BlurFade from './ui/BlurFade.svelte';

  let selectedRole = 'President';

  // Filter data based on position
  let presidents = tdata.filter(member => member.position === 'President');
  let heads = tdata.filter(member => member.position.endsWith('Head'));
  let analysts = tdata.filter(member => member.position.endsWith('Analyst'));
  let members = tdata.filter(member => member.position === 'member');
  let mentors = tdata.filter(member => member.position === 'Mentor');

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
    class="team-page flex items-center justify-center p-6 pt-24 min-h-screen bg-cover bg-center bg-transparent"
  >
    <div class="flex flex-col items-center w-[90vw] max-w-screen-lg">
      <!-- Team Header -->
       <BlurFade>
      <h1
        class="text-center text-3xl sm:text-4xl lg:text-5xl xl:text-6xl
 font-bold mb-8 text-white"
      >
        Meet Our Team
      </h1>
      </BlurFade>
      <!-- Role Selector -->
      <div class="role-selector flex flex-wrap justify-center gap-4 mb-10">
        {#each ['President', 'Heads', 'Analysts', 'Mentors', 'Members'] as role}
        <BlurFade>  
        <button
            on:click={() => setSelectedRole(role)}
            class="py-2 px-6 rounded-full shadow-md font-semibold transition-all duration-200 {selectedRole === role
              ?
                'bg-white text-black hover:bg-gray-300'
              :  'bg-gray-700 text-gray-300 hover:bg-gray-600'}"
          >
            {role}
          </button>
          </BlurFade>
        {/each}
      </div>
  
      <!-- Display team categories for "Members" -->
      {#if selectedRole === 'Members'}
        <div class="team-sections w-full mt-8">
          <!-- {#each members as team} -->
            <!-- {#if memberTeams[team].length > 0} -->
              <!-- <div class="team-section w-full mb-12">
                <h2
                  class="text-2xl font-semibold text-center mb-4 bg-slate-700"
                >
                  {team} Team
                </h2> -->
                <div class="team-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
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
        <div class="team-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full mt-8">
          {#if filteredTeamByRole.length > 0}
            {#each filteredTeamByRole as member, index}
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
            <p class="text-center text-gray-400 col-span-full">
              No team members found for {selectedRole}
            </p>
          {/if}
        </div>
      {/if}
    </div>
  </div>