<script lang="ts">
  import { Motion, AnimatePresence } from "svelte-motion";
  import { writable } from "svelte/store";
  import { cn } from "$lib/utils.js";

  export let url: string | undefined;
  export let name: string | undefined;
  export let position: string | undefined;
  export let facebook: string | undefined;
  export let instagram: string | undefined;
  export let linkedin: string | undefined;

  let ref: HTMLDivElement;
  const direction = writable("left");

  function handleMouseEnter(event: MouseEvent) {
    if (!ref) return;

    const directionValue = getDirection(event, ref);
    console.log("direction", directionValue);

    switch (directionValue) {
      case 0:
        direction.set("top");
        break;
      case 1:
        direction.set("right");
        break;
      case 2:
        direction.set("bottom");
        break;
      case 3:
        direction.set("left");
        break;
      default:
        direction.set("left");
        break;
    }
  }

  function getDirection(ev: MouseEvent, obj: HTMLDivElement) {
    const { width: w, height: h, left, top } = obj.getBoundingClientRect();
    const x = ev.clientX - left - (w / 2) * (w > h ? h / w : 1);
    const y = ev.clientY - top - (h / 2) * (h > w ? w / h : 1);
    const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
    return d;
  }

  const variants = {
    initial: { x: 0 },
    exit: { x: 0, y: 0 },
    top: { y: 20 },
    bottom: { y: -20 },
    left: { x: 20 },
    right: { x: -20 },
  };

  const textVariants = {
    initial: { y: 0, x: 0, opacity: 0 },
    exit: { y: 0, x: 0, opacity: 0 },
    top: { y: -20, opacity: 1 },
    bottom: { y: 2, opacity: 1 },
    left: { x: -2, opacity: 1 },
    right: { x: 20, opacity: 1 },
  };
</script>

<div class="profile-card bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
  <Motion let:motion>
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
      use:motion
      class={cn("relative h-48 w-full overflow-hidden", "group/card")}
      bind:this={ref}
      on:mouseenter={handleMouseEnter}
    >
      <AnimatePresence let:item list={[{ key: "s" }]}>
        <Motion
          initial="initial"
          whileHover={$direction}
          exit="exit"
          let:motion
        >
          <div class="relative h-full w-full" use:motion>
            <div class="group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-700"></div>
            <Motion
              transition={{ duration: 0.2, ease: "easeOut" }}
              {variants}
              let:motion
            >
              <div use:motion class="h-full w-full relative">
                <img
                  src={url}
                  alt={`${name}'s profile`}
                  class="w-full h-full object-cover scale-[1.15] "
                />
              </div>
            </Motion>
            <Motion
              transition={{ duration: 0.5, ease: "easeOut" }}
              variants={textVariants}
              let:motion
            >
              <div
                use:motion
                class="text-white absolute bottom-4 left-4 z-40"
              >
                <h3 class="text-xl font-bold">{name}</h3>
                <p class="text-sm">{position}</p>
              </div>
            </Motion>
          </div>
        </Motion>
      </AnimatePresence>
    </div>
  </Motion>

  <div class="caption p-6 text-center">
    <h3 class="text-xl font-bold text-gray-800 mb-2">{name}</h3>
    <p class="text-sm text-gray-600 mb-4">{position}</p>
    <div class="social-links flex justify-center space-x-4">
      {#if facebook}
        <a
          href={facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook profile"
          class="text-gray-600 hover:text-blue-500 transition duration-300"
        >
          <i class="fab fa-facebook text-2xl"></i>
        </a>
      {/if}
      {#if instagram}
        <a
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram profile"
          class="text-gray-600 hover:text-pink-500 transition duration-300"
        >
          <i class="fab fa-instagram text-2xl"></i>
        </a>
      {/if}
      {#if linkedin}
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          class="text-gray-600 hover:text-blue-600 transition duration-300"
        >
          <i class="fab fa-linkedin text-2xl"></i>
        </a>
      {/if}
    </div>
  </div>
</div>

<style>
  .profile-card {
    max-width: 200px;
    
    margin: 0 auto;
  }
</style>