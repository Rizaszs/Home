<script>
	import { base } from '$app/paths'

	export let data
	$: ({ nodes } = data)
	//$: console.log(nodes)
</script>

<section class="section-container">
	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
		{#each nodes as { title, number, bodyText, slug, createdAt, category, avatarUrl, resourcePath }}
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
