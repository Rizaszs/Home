<script lang="ts">
	export let data
	$: ({ discussion } = data)
</script>

<section class="section-container">
	<div class=" flex flex-col items-center justify-center pb-8 pt-5 text-center">
		<h1 class="mb-2 max-w-xl text-4xl font-bold text-amber-600">
			{discussion.title}
		</h1>
		<div class=" flex items-center gap-2">
			<div class="flex items-center gap-2">
				<img
					class=" h-8 w-8 rounded-full"
					src={discussion.author.avatarUrl}
					alt={discussion.author.login}
				/>
				<p class=" text-lg font-semibold">
					{discussion.author.login}
				</p>
			</div>

			<p>
				{discussion.createdAt}
			</p>
		</div>
	</div>
	<p>
		{@html discussion.bodyHTML}
	</p>
</section>
