<script>
	import '@unocss/reset/tailwind.css';
	import 'unocss';
	import '../global.css';

	import Header from '$lib/components/header.svelte';
</script>

<Header />

<main class="h-full">
	<slot />
</main>

<style uno:preflights uno:safelist global></style>
