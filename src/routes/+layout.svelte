<script lang="ts">
	import '../app.postcss'
	import Header from '../components/header.svelte'
	import Footer from '../components/footer.svelte'
</script>

<div class="page-container">
	<Header />

	<main class="">
		<slot />
	</main>

	<Footer />
</div>

<!-- <style lang="postcss">
	.fuck {
		@apply flex flex-col lg:flex-row;
	}
</style> -->
