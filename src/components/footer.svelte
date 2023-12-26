<script lang="ts">
	import * as config from '$lib/config'

	// Define a type for menu items
	interface MenuItem {
		path: string
		icon: string
		label: string
	}

	// Define your menu as an array of objects with the MenuItem type
	const menuItems: MenuItem[] = [
		{
			path: 'https://www.instagram.com/diaryizals/',
			icon: 'iconoir:instagram',
			label: 'instagram'
		},
		{ path: 'https://github.com/zalwan', icon: 'iconoir:github', label: 'github' },
		{ path: 'https://www.youtube.com/@diaryizals3297', icon: 'iconoir:youtube', label: 'youtube' },
		{
			path: 'https://www.linkedin.com/in/rizal-suryawan-471138185/',
			icon: 'iconoir:linkedin',
			label: 'linkedln'
		}
	]
</script>

<footer class="footer">
	<div class="flex flex-col items-center justify-center p-11 text-center">
		<h2 class="text-xl font-semibold capitalize">"fortis fortuna adiuvat"</h2>
		<p class="italic text-gray-400">by John wick</p>
	</div>
	<div class="footer-social">
		<div class="category-text">
			<div class="category-indicator" />
			<h1 class="category-title">follow me</h1>
		</div>
		<ul class="footer-menu">
			{#each menuItems as item (item.path)}
				<li>
					<a href={item.path} class="footer-item">
						<iconify-icon icon={item.icon} />
						<!-- <p>{item.label}</p> -->
					</a>
				</li>
			{/each}
		</ul>
	</div>
	<ul class="footer-copyright">
		<li class="text-sm capitalize text-gray-400">
			&copy; {new Date().getFullYear()} SvelteKit -
			<span class="">
				{config.description}
			</span>
		</li>
		<li class=" text-gray-400">
			by <span class=" animate-pulse capitalize text-white underline">
				{config.creator}
			</span>
		</li>
	</ul>
</footer>
