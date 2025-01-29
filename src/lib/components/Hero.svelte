<script lang="ts">
	import BlurFade from '$lib/components/ui/BlurFade.svelte';
	import elem from '$lib/assets/3delem.png';
</script>

<section class="bg-transparent py-20 text-center">
  <div class="hero-container flex flex-col items-center lg:flex-row px-6 md:px-12 lg:px-36">
    <div class="container mx-auto px-4 md:px-6 pt-10 text-center lg:text-right">
      <BlurFade delay={0.25}>
        <h1 class="mb-4 text-4xl sm:text-5xl font-bold tracking-tighter text-white lg:text-6xl xl:text-7xl">
          Finance & Investment Club
        </h1>
      </BlurFade>

      <BlurFade delay={0.5}>
        <p class="mb-8 text-lg sm:text-xl tracking-tighter text-white xl:text-3xl">NIT Silchar</p>
      </BlurFade>

      <BlurFade delay={0.75}>
        <a
          href="/About"
          class="rounded-full border px-6 sm:px-8 py-3 font-semibold text-white backdrop-blur-sm transition-colors hover:bg-gray-100 hover:text-black"
        >
          Learn More
        </a>
      </BlurFade>
    </div>
    <div class="img w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg hidden lg:block">
      <img src={elem} alt="elem-3d" class="w-full h-auto" />
    </div>
  </div>
</section>