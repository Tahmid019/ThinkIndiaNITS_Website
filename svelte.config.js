import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Use both preprocessors
	preprocess: [sveltePreprocess(), vitePreprocess()],

	kit: {
		// Using the Vercel adapter
		adapter: adapter()
	}
};

export default config;
