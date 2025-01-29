<script lang="ts">
    const year: number = new Date().getFullYear();
  
    const socialLinks = [
      { name: "Facebook", icon: "fa-facebook", url: "https://facebook.com" },
      { name: "Instagram", icon: "fa-instagram", url: "https://instagram.com" },
      { name: "LinkedIn", icon: "fa-linkedin", url: "https://linkedin.com" }
    ];
  </script>
  
  <footer class="bg-slate-800/25 backdrop-blur-md hover:bg-slate-800/35 transition-all duration-300 text-white py-8 px-6">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Contact Section -->
      <div>
        <h2 class="text-lg font-semibold">Contact Us</h2>
        <p class="mt-2 text-gray-400">Email: tahmif786.com</p>
        <p class="text-gray-400">Phone: +91 99547 22871</p>
      </div>
  
      <!-- Quick Links -->
      <div>
        <h2 class="text-lg font-semibold">Quick Links</h2>
        <ul class="mt-2">
          <li><a href="/About" class="text-gray-400 hover:text-white transition">About Us</a></li>
          <li><a href="/Blog" class="text-gray-400 hover:text-white transition">Services</a></li>
          <li><a href="/" class="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
        </ul>
      </div>
  
      <!-- Social Media -->
      <div>
        <h2 class="text-lg font-semibold">Follow Us</h2>
        <div class="flex gap-4 mt-2">
          {#each socialLinks as { name, icon, url }}
            <a
              href={url}
              target="_blank"
              aria-label={name}
              class="text-gray-400 hover:text-white text-2xl transition"
            >
              <i class={`fab ${icon}`}></i>
            </a>
          {/each}
        </div>
      </div>
    </div>
  
    <!-- Bottom Section -->
    <div class="mt-6 text-center  pt-4">
      <p class="text-gray-500">&copy; {year} Finance & Investment Club, NITS. All rights reserved.</p>
    </div>
  </footer>
  
  <style>
    @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');
  </style>
  