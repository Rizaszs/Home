<script lang="ts">
	import { base } from '$app/paths'
	import { page } from '$app/stores' // Assuming this store provides route information

	// Define a type for menu items
	interface MenuItem {
		path: string
		icon: string
		label: string
	}

	// Define your menu as an array of objects with the MenuItem type
	const menuItems: MenuItem[] = [
		{ path: '/', icon: 'system-uicons:mail-remove', label: 'Home' },
		{ path: '/showcase', icon: 'system-uicons:briefcase', label: 'Showcase' },
		{ path: '/blog', icon: 'system-uicons:document-stack', label: 'Blog' },
		{ path: '/about', icon: 'system-uicons:user-male', label: 'About' }
	]

	// Function to combine the base URL with the path
	const createLink = (path: string) => `${base}${path}`

	// function createLink(path: string): string {
	// 	return `${base}${path}`
	// }

	// Get the routeId from the page store
	let routeId: string | null

	$: {
		routeId = $page.route.id
	}
</script>

<nav class="navbar">
	<ul class="navbar-menu">
		{#each menuItems as item (item.path)}
			<li>
				<a href={createLink(item.path)} class="navbar-item {routeId === item.path ? 'active' : ''}">
					<iconify-icon icon={item.icon} />
					<p>{item.label}</p>
				</a>
			</li>
		{/each}
	</ul>

	<div class="navbar-menu">
		<button class="navbar-toggle">
			<iconify-icon icon="system-uicons:sun" />
		</button>

		<button class="button-hire">
			<iconify-icon icon="system-uicons:check-circle" />
			<p>hire me</p>
		</button>
	</div>
</nav>

<!-- <script lang="ts">
	import { base } from '$app/paths'
</script>

<nav class="navbar">
	<ul class="navbar-menu">
		<li>
			<a href="{base}/" class="navbar-item">
				<iconify-icon icon="system-uicons:mail-remove" />
				<p>Home</p>
			</a>
		</li>
		<li>
			<a href="{base}/showcase" class="navbar-item"
				><iconify-icon icon="system-uicons:briefcase" />
				<p>showcase</p></a
			>
		</li>
		<li>
			<a href="{base}/blog" class="navbar-item">
				<iconify-icon icon="system-uicons:document-stack" />
				<p>blog</p></a
			>
		</li>
		<li>
			<a href="{base}/about" class="navbar-item">
				<iconify-icon icon="system-uicons:user-male" />
				<p>about</p></a
			>
		</li>
	</ul>

	<div class="navbar-menu">
		<button class="navbar-toggle">
			<iconify-icon icon="system-uicons:sun" />
		</button>

		<button class="button-hire">
			<iconify-icon icon="system-uicons:check-circle" />
			<p>hire me</p>
		</button>
	</div>
</nav> -->

<style>
	.active {
		color: black;
		background-color: aqua;
	}
</style>
