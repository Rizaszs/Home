<script lang="ts">
	import '../app.postcss'
	import Header from '../components/header.svelte'
	import Footer from '../components/footer.svelte'
</script>

<div class="page-container">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>
