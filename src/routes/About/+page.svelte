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
        name: "John Doe",
        role: "Founder & CEO",
        imageUrl: "https://via.placeholder.com/150",
        bio: "John is a seasoned financial expert with over 10 years of experience in investment banking and portfolio management.",
      },
      {
        name: "Jane Smith",
        role: "Chief Analyst",
        imageUrl: "https://via.placeholder.com/150",
        bio: "Jane specializes in market analysis and has a proven track record of identifying profitable investment opportunities.",
      },
      {
        name: "Alex Johnson",
        role: "Content Strategist",
        imageUrl: "https://via.placeholder.com/150",
        bio: "Alex is passionate about simplifying complex financial concepts for our readers.",
      },
    ];
  </script>
  
  <style>
    /* Custom styles for hover effects */
    .team-card:hover {
      transform: translateY(-10px);
      transition: transform 0.3s ease;
    }
  </style>
  
  <!-- Main About Page -->
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20">
    <div class="container mx-auto px-4">
      <!-- Page Header -->
      <div class="text-center mb-16">
        <h1 class="text-5xl font-bold text-gray-800 mb-4">About Us</h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Welcome to <span class="font-semibold text-blue-600">Finance Blub</span>, your trusted source for insightful financial analysis, investment strategies, and market trends. Our mission is to empower you with the knowledge to make informed financial decisions.
        </p>
      </div>
  
      <!-- Mission Section -->
      <div class="bg-white p-8 rounded-lg shadow-lg mb-16">
        <h2 class="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
        <p class="text-gray-600 mb-4">
          At Finance Blub, we believe that financial literacy is the key to achieving financial freedom. Our team of experts is dedicated to providing you with accurate, up-to-date, and actionable insights to help you navigate the complex world of finance.
        </p>
        <p class="text-gray-600">
          Whether you're a seasoned investor or just starting your financial journey, we're here to guide you every step of the way.
        </p>
      </div>
  
      <!-- Team Section -->
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold text-gray-800 mb-8">Meet Our Team</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {#each teamMembers as member}
            <div class="team-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <img
                src={member.imageUrl}
                alt={member.name}
                class="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 class="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p class="text-gray-600 mb-4">{member.role}</p>
              <p class="text-gray-600 text-sm">{member.bio}</p>
            </div>
          {/each}
        </div>
      </div>
  
      <!-- Call to Action -->
      <div class="text-center">
        <h2 class="text-3xl font-bold text-gray-800 mb-6">Join Our Community</h2>
        <p class="text-gray-600 mb-8">
          Stay updated with the latest financial insights and join thousands of readers who trust Finance Blub for their financial education.
        </p>
        <a
          href="/subscribe"
          class="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300"
        >
          Subscribe Now
        </a>
      </div>
    </div>
  </div>