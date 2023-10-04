<script>
	import { base } from '$app/paths'
	import Lingker from '../../public/lingker.svg?dataurl'
</script>

<section class=" flex h-fit w-full items-center justify-between py-28">
	<div class="text-white">
		<h1 class=" mb-2 text-6xl font-bold">
			Hi, I'm <span class=" text-blue-700">Suryawan</span>
		</h1>

		<div class="flex">
			<div class="">
				<img src={Lingker} alt="Lingker" />
			</div>
			<div class=" ml-9 mt-8">
				<p class="max-w-lg text-base text-gray-400">
					With experience 3 years as programmer in the world, i buld app with many technology like
					nextjs,flutter,react native and electron.
				</p>
				<a id="blank" href="#blank" class=" mt-3 flex items-center text-lg text-yellow-500">
					<p class=" mr-3 capitalize">Let's collaborate</p>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="h-6 w-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
						/>
					</svg>
				</a>
			</div>
		</div>
	</div>
	<div class=" flex flex-col items-center justify-center">
		<div class=" h-36 w-0.5 bg-red-700" />
		<div class="flex flex-col gap-3 py-3">
			<a href="https://www.instagram.com/diaryizals/" class=" text-[2rem] text-red-600">
				<i class="uil uil-instagram" />
			</a>
			<a
				href="https://www.linkedin.com/in/rizal-suryawan-471138185"
				class=" text-[2rem] text-red-600"
			>
				<i class="uil uil-linkedin" />
			</a>
			<a href="https://github.com/zalwan" class=" text-[2rem] text-red-600">
				<i class="uil uil-github" />
			</a>
		</div>
		<div class=" h-36 w-0.5 bg-red-700" />
	</div>
</section>
