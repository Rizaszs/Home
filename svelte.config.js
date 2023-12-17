import { vitePreprocess } from '@sveltejs/kit/vite'
import adapter from '@sveltejs/adapter-static'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: '200.html' // may differ from host to host
		}),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '' : ''
		},
		inlineStyleThreshold: Infinity
	},

	preprocess: [
		vitePreprocess({
			preserve: ['ld+json']
		})
	]
}

export default config
