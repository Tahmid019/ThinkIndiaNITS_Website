<!-- src/routes/+page.svelte -->
<script context="module" lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Timeline from '$lib/components/Timeline.svelte';
	import ImageCarousel from '$lib/components/ImageCarousel.svelte';

	import GradientAnimation from '$lib/components/ui/GradientAnimation.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import { seo } from '$lib/index.js';

	export const prerender = true;
	export const ssr = true;

	export const load = () => {
		return {
			title: seo.title + ' | Home',
			description: seo.description
		};
	}; 
</script>


<svelte:head>
	<title>{seo.title}</title>
	<meta name="description" content={seo.description} />
	<meta name="keywords" content={seo.keywords} />

	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "Organization",
		"name": "ThinkIndia NITS",
		"url": "https://thinkindianits.vercel.app/",
		"logo": "https://thinkindianits.vercel.app/favicon.png"
	}
	</script>

	<meta property="og:title" content={seo.title} />
	<meta property="og:description" content={seo.description} />
	<meta property="og:image" content={seo.image} />
	<meta property="og:site_name" content={seo.title} />
	<meta property="og:url" content={seo.url} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={seo.title} />
	<meta name="twitter:description" content={seo.description} />
	<meta name="twitter:image" content={seo.image} />
	<meta name="twitter:site" content="@thinkindianits" />

</svelte:head>

<GradientAnimation>
	<div class="home-container bg-brand-white">
		<Hero />
		<About />
		<!-- <Timeline /> -->
		<ImageCarousel />
	</div>
	<Footer />
</GradientAnimation >
