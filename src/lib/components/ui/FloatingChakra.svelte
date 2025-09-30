<script lang="ts">
    import chakra from "$lib/assets/ashoka_chakra.svg";
    import { onMount } from "svelte";

    let rotation = 0;         
    let targetRotation = 0;   

    onMount(() => {
        const handleScroll = () => {
            targetRotation = window.scrollY * 0.1; 
        };

        window.addEventListener("scroll", handleScroll);

        const animate = () => {
            rotation += (targetRotation - rotation) * 0.05;
            requestAnimationFrame(animate);
        };
        animate();

        return () => window.removeEventListener("scroll", handleScroll);
    });
</script>

<div class="Chakra absolute lg:-translate-y-32 top-2/4 lg:top-1/4 -left-1/4 overflow-hidden">
    <img 
        src={chakra} 
        alt="Ashoka Chakra"
        class="w-3/4 md:w-1/2 opacity-30"
        style="transform: rotate({rotation}deg);" 
    />
</div>
