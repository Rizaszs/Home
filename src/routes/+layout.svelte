<script lang="ts">
	import '../app.postcss'
	import Header from '../components/header.svelte'
	import Footer from '../components/footer.svelte'
</script>

<div class="layout">
	<Header />

	<main class=" flex flex-col lg:flex-row">
		<slot />
	</main>

	<Footer />
</div>

<!-- <style lang="postcss">
	.fuck {
		@apply flex flex-col lg:flex-row;
	}
</style> -->
