<script lang="ts">
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
</nav>
