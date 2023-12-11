<script>
	import { base } from '$app/paths'
	import * as config from '$lib/config'
	import Lingker from '../../public/lingker.svg?dataurl'

	export let data
	$: ({ nodes } = data)
	//$: console.log(nodes)
</script>

<section class="home-section">
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
		<div class="container-card">
			<!-- github-cms -->
			{#each nodes as { title, number, slug, createdAt, avatarUrl, category }}
				<div class="card-blog">
					<div class="max-w-lg">
						<a href="{base}/blog/{slug}-{number}" class="text-2xl font-semibold leading-relaxed">
							{title}
						</a>
						<p class="text-gray-300">
							<img src={avatarUrl} alt="Avatar" class="inline-block h-8 w-8 rounded-full" />
							{createdAt}
							{number}
							{#if category}
								<span>{category.emojiHTML}</span>
								{category.name}
							{/if}
						</p>
					</div>
				</div>
			{/each}

			<!-- github-cms -->
			<!-- post -->

			<!-- <div class="card-blog">
				<div class="">
					<img
						class=" h-48 w-full rounded-md object-contain object-center lg:w-48 lg:object-cover"
						src="https://awsimages.detik.net.id/community/media/visual/2022/05/25/neymar.jpeg?w=650&q=80"
						alt=""
					/>
				</div>
				<div class="max-w-lg">
					<h1 class=" text-2xl font-semibold leading-relaxed">Neymar adalah dribble terbaik</h1>
					<p class=" text-gray-300">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi autem veniam ex
						possimus quis laudantium explicabo totam fugit praesentium. Voluptatum minus ea cum!
						Ducimus optio dolores ut dignissimos ea eaque.
					</p>
				</div>
			</div> -->

			<!-- post -->
		</div>
	</div>
</section>
