<script lang="ts">
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
<div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20">
	<div class="container mx-auto px-4">
		<!-- Page Header -->
		<div class="mb-16 text-center">
			<h1 class="mb-4 text-5xl font-bold text-gray-800">About Us</h1>
			<p class="mx-auto max-w-2xl text-xl text-gray-600">
				Welcome to <span class="font-semibold text-blue-600">Finance Blub</span>, your trusted
				source for insightful financial analysis, investment strategies, and market trends. Our
				mission is to empower you with the knowledge to make informed financial decisions.
			</p>
		</div>

		<!-- Mission Section -->
		<div class="mb-16 rounded-lg bg-white p-8 shadow-lg">
			<h2 class="mb-6 text-3xl font-bold text-gray-800">Our Mission</h2>
			<p class="mb-4 text-gray-600">
				At Finance Blub, we believe that financial literacy is the key to achieving financial
				freedom. Our team of experts is dedicated to providing you with accurate, up-to-date, and
				actionable insights to help you navigate the complex world of finance.
			</p>
			<p class="text-gray-600">
				Whether you're a seasoned investor or just starting your financial journey, we're here to
				guide you every step of the way.
			</p>
		</div>

		<!-- Team Section -->
		<div class="mb-16 text-center">
			<h2 class="mb-8 text-3xl font-bold text-gray-800">Meet Our Team</h2>
			<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each teamMembers as member}
					<div
						class="team-card rounded-lg bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg"
					>
						<img
							src={member.imageUrl}
							alt={member.name}
							class="mx-auto mb-4 h-32 w-32 rounded-full"
						/>
						<h3 class="text-xl font-semibold text-gray-800">{member.name}</h3>
						<p class="mb-4 text-gray-600">{member.role}</p>
						<p class="text-sm text-gray-600">{member.bio}</p>
					</div>
				{/each}
			</div>
		</div>

		<!-- Call to Action -->
		<div class="text-center">
			<h2 class="mb-6 text-3xl font-bold text-gray-800">Join Our Community</h2>
			<p class="mb-8 text-gray-600">
				Stay updated with the latest financial insights and join thousands of readers who trust
				Finance Blub for their financial education.
			</p>
			<a
				href="/subscribe"
				class="rounded-full bg-blue-600 px-8 py-3 font-semibold text-white transition-colors duration-300 hover:bg-blue-700"
			>
				Subscribe Now
			</a>
		</div>
	</div>
</div>

<style>
	/* Custom styles for hover effects */
	.team-card:hover {
		transform: translateY(-10px);
		transition: transform 0.3s ease;
	}
</style>
