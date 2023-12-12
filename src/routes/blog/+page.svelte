<script>
	import { base } from '$app/paths'
	import * as config from '$lib/config'
	export let data
	$: ({ nodes } = data)
	//$: console.log(nodes)
</script>

<section
	class="rounded-xl border border-[#2c2c2c] bg-[#212121] px-4 text-white shadow shadow-black/25"
>
	<div class="container-card flex-col">
		{#each nodes as { title, number, bodyText, slug, createdAt, category, avatarUrl, resourcePath }}
			<div class="card-blog">
				<div class="max-w-lg">
					<div class=" w-fit rounded-full bg-black/30 px-4 py-1">
						{#if category}
							<span>{category.emojiHTML}</span>
							{category.name}
						{/if}
					</div>
					<div class="mb-16 flex flex-col">
						<a href="{base}/blog/{slug}-{number}">
							<h3 class="line-clamp-2 text-xl font-semibold leading-relaxed">
								{title}
							</h3>
						</a>
						<p class=" line-clamp-4">
							{bodyText}
						</p>
					</div>

					<div class="flex items-center justify-start">
						<img src={avatarUrl} alt="Avatar" class="inline-block h-8 w-8 rounded-full" />
						<div class="ml-2">
							<p class=" text-sm font-semibold">{resourcePath}</p>
							<p class="text-sm text-gray-300">
								{createdAt}
							</p>
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>
