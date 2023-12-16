<script>
	import { base } from '$app/paths'

	export let data
	let nodes = []
	let visibleNodes = []

	// Logika untuk inisialisasi data nodes
	$: ({ nodes } = data)
	$: visibleNodes = nodes.slice(0, 6) // Menampilkan 6 card pertama

	const cardsPerPage = 3 // Jumlah card per halaman

	function loadMore() {
		const currentLength = visibleNodes.length
		const nextSlice = nodes.slice(currentLength, currentLength + cardsPerPage)
		visibleNodes = [...visibleNodes, ...nextSlice]

		// Nonaktifkan tombol "Load More" ketika semua data telah dimuat
		if (visibleNodes.length >= nodes.length) {
			isAllDataLoaded = true
		}
	}

	let isAllDataLoaded = false // Variabel untuk melacak apakah semua data telah dimuat
</script>

<!-- Bagian yang sudah ditampilkan -->
<section class="section-container">
	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
		{#each visibleNodes as { title, number, bodyText, slug, createdAt, category, avatarUrl, resourcePath }}
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
	<div class="mt-4 text-center">
		<button
			on:click={loadMore}
			class="rounded px-4 py-2 font-bold text-white
               {isAllDataLoaded ? 'bg-gray-400' : 'bg-blue-500'}
               {isAllDataLoaded ? '' : 'hover:bg-blue-700'}"
			disabled={isAllDataLoaded}
		>
			{#if isAllDataLoaded}
				All Data Loaded
			{:else}
				Load More
			{/if}
		</button>
	</div>
</section>
