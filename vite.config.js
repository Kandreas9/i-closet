import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import UnoCSS from 'unocss/vite';

export default defineConfig({
	ssr: {
		noExternal: ['three', 'troika-three-text']
	},
	vite: {
		server: {
			watch: {
				usePolling: true
			}
		}
	},
	plugins: [
		UnoCSS({
			mode: 'svelte-scoped'
		}),
		sveltekit()
	]
});
