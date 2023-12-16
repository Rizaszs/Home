<script>
	import { base } from '$app/paths'
	import * as config from '$lib/config'

	export let data
	$: ({ nodes } = data)
	//$: console.log(nodes)
</script>

<section class="section-container">
	<div class="hero">
		<div class="hero-title">
			<div class="category-section">
				<div class="category-indicator" />
				<h1 class="category-title">Who am I ?</h1>
			</div>
			<div class="hero-indicator">
				<div class="hero-indicator-animate" />
				<p class="hero-indicator-title">available for work</p>
			</div>
		</div>
		<div class="hero-content">
			<div class="hero-container-img">
				<img
					src="https://framerusercontent.com/images/dDnqkzQfB3pmvEdrFSxAJSkAyyk.png"
					alt="avatar hero"
					srcset=""
				/>
			</div>
			<div class="hero-container-text">
				<h2><b>i'm {config.title}</b></h2>
				<div>
					<p>Front end developer from Tangerang, ID.</p>
					<p>Working freelance at Upwork.</p>
				</div>
				<div class="navbar-menu mt-3">
					<a href="https://wa.me/+6285813095235" class="button-contact">
						<iconify-icon icon="ic:baseline-whatsapp" />
						<p>contact me</p>
					</a>
				</div>
			</div>
		</div>
	</div>
	<div class="container-blog">
		<div class="category-section">
			<div class="category-indicator" />
			<h1 class="category-title">recent blog</h1>
		</div>
		<div class="container-card flex-col lg:flex-row">
			<!-- github-cms -->

			{#each nodes.slice(0, 3) as { title, number, bodyText, slug, createdAt, category, avatarUrl, resourcePath }}
				<div class="card-blog flex">
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

			<!-- github-cms -->
		</div>
	</div>
</section>
