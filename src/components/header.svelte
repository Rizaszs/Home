<script lang="ts">
	import { base } from '$app/paths'
	import * as config from '$lib/config'
</script>

<nav class="my-4 flex items-center justify-between text-white">
	<a href="{base}/">
		<b>{config.title}</b>
	</a>

	<ul class="flex gap-2">
		<li>
			<a href="{base}/showcase">showcase</a>
		</li>
		<li>
			<a href="{base}/blog">blog</a>
		</li>
		<li>
			<a href="{base}/about">about</a>
		</li>
	</ul>

	<button>contact</button>
</nav>
