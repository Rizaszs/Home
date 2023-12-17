<script>
	import { base } from '$app/paths'
	import { onMount, afterUpdate } from 'svelte'

	export let data

	// Variabel-variabel pagination
	let currentPage = 1
	const itemsPerPage = 3 // Ubah sesuai kebutuhan Anda
	let nodes = []
	let totalPages = 1
	let paginatedData = []

	// Fungsi untuk memfilter data sesuai dengan halaman saat ini
	function getPaginatedData() {
		const startIndex = (currentPage - 1) * itemsPerPage
		const endIndex = startIndex + itemsPerPage
		return nodes.slice(startIndex, endIndex)
	}

	// Fungsi untuk perbarui data ketika halaman berubah
	function goToPage(page) {
		currentPage = page
		paginatedData = getPaginatedData()
	}

	// Fungsi untuk navigasi ke halaman selanjutnya atau sebelumnya
	function next() {
		if (currentPage < totalPages) {
			goToPage(currentPage + 1)
		}
	}

	function previous() {
		if (currentPage > 1) {
			goToPage(currentPage - 1)
		}
	}

	// Ambil atau inisialisasi data pada saat komponen dimuat
	onMount(() => {
		if (data) {
			;({ nodes } = data) // Ambil nodes dari properti data
			totalPages = Math.ceil(nodes.length / itemsPerPage)
			paginatedData = getPaginatedData()
		}
	})

	// Perbarui data ketika currentPage atau nodes berubah
	afterUpdate(() => {
		paginatedData = getPaginatedData()
	})
</script>

<section class="section-container">
	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
		{#each paginatedData as { title, number, bodyText, slug, createdAt, category, avatarUrl, resourcePath }}
			<div class="card-blog">
				<div class="flex max-w-lg flex-col justify-between">
					<!-- content card -->
					<div class="flex flex-col">
						<div class="">
							<div class="w-fit rounded-full bg-black/30 px-4 py-1">
								{#if category}
									<span>{category.emojiHTML}</span>
									{category.name}
								{/if}
							</div>
							<div class="mb-16 mt-2 flex flex-col">
								<a href="{base}/blog/{slug}-{number}">
									<h3 class="line-clamp-2 text-xl font-semibold">
										{title}
									</h3>
								</a>
								<p class="line-clamp-4">
									{bodyText}
								</p>
							</div>
						</div>
					</div>
					<!-- content card -->
					<!-- footer card -->
					<div class="flex items-center justify-start">
						<img src={avatarUrl} alt="Avatar" class="inline-block h-8 w-8 rounded-full" />
						<div class="ml-2">
							<p class="text-sm font-semibold">{resourcePath}</p>
							<p class="text-sm text-gray-300">
								{createdAt}
							</p>
						</div>
					</div>
					<!-- footer card -->
				</div>
			</div>
		{/each}
	</div>
</section>

<!-- Tautan atau tombol navigasi -->
<div class="mt-4 flex justify-center">
	<button
		class="mx-2 rounded bg-gray-800 px-3 py-1 text-white"
		on:click={previous}
		disabled={currentPage === 1}>Previous</button
	>
	<button
		class="mx-2 rounded bg-gray-800 px-3 py-1 text-white"
		on:click={next}
		disabled={currentPage === totalPages}>Next</button
	>
</div>
