<script lang="ts">
	import AbtCard from "$lib/components/AbtCard.svelte";
	import AbtEnd from "$lib/components/AbtEnd.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import Mission from "$lib/components/Mission.svelte";
import Sponsors from "$lib/components/Sponsors.svelte";
	import GradientAnimation from "$lib/components/ui/GradientAnimation.svelte";

	// Define types for team members (if needed)
	type TeamMember = {
		name: string;
		role: string;
		imageUrl: string;
		bio: string;
	};

	// Example team data
	const teamMembers: TeamMember[] = [
		{
			name: 'John Doe',
			role: 'Founder & CEO',
			imageUrl: 'https://via.placeholder.com/150',
			bio: 'John is a seasoned financial expert with over 10 years of experience in investment banking and portfolio management.'
		},
		{
			name: 'Jane Smith',
			role: 'Chief Analyst',
			imageUrl: 'https://via.placeholder.com/150',
			bio: 'Jane specializes in market analysis and has a proven track record of identifying profitable investment opportunities.'
		},
		{
			name: 'Alex Johnson',
			role: 'Content Strategist',
			imageUrl: 'https://via.placeholder.com/150',
			bio: 'Alex is passionate about simplifying complex financial concepts for our readers.'
		}
	];
</script>

<!-- Main About Page -->
 <GradientAnimation>
<div class="min-h-screen bg-trasnparent py-20">
	<div class="container mx-auto px-4">
		<!-- Page Header -->
		<AbtCard />

		<!-- Mission Section -->
		 <Mission />
		

		<!-- Team Section -->
		<Sponsors />

		<!-- Call to Action -->
		 <!-- <AbtEnd /> -->

		 <!-- Footer -->
		 
		</div>
		
	</div>
	<Footer />
</GradientAnimation>

<style>
	/* Custom styles for hover effects */
	.team-card:hover {
		transform: translateY(-10px);
		transition: transform 0.3s ease;
	}
</style>
