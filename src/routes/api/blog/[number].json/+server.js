import fetcher from '$lib/fetcher'
import { json } from '@sveltejs/kit'

const query = `query GetDiscussion($number: Int!){
  repository (name:"zalwan.github.io", owner: "zalwan") {
   discussion(number: $number) {
    bodyHTML
    title
	author {
		login
		avatarUrl
	}
	createdAt
  }
	}
}`

export const GET = async ({ params: { number }, fetch, setHeaders }) => {
	const variables = {
		number: parseInt(number)
	}
	try {
		const {
			repository: { discussion }
		} = await fetcher(query, variables, fetch)

		setHeaders({
			'cache-control': 'max-age=600'
		})

		const date = new Date(discussion.createdAt)
		const options = { year: 'numeric', month: 'long', day: 'numeric' }
		discussion.createdAt = date.toLocaleDateString('en-US', options)

		return json(discussion)
	} catch (error) {
		console.log(error)
	}
}
