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
				<a
					href={createLink(item.path)}
					class=" {routeId === item.path ? 'navbar-active' : 'navbar-item'} "
				>
					<iconify-icon icon={item.icon} />
					<p>{item.label}</p>
				</a>
			</li>
		{/each}
	</ul>

	<div class="navbar-menu">
		<!-- <button class="navbar-toggle">
			<iconify-icon icon="system-uicons:sun" />
		</button> -->

		<button class="button-hire">
			<iconify-icon icon="system-uicons:check-circle" />
			<p>hire me</p>
		</button>
	</div>
</nav>
