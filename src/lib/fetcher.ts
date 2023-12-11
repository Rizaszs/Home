import { VERY_SECRET } from '$env/static/private'

type FetcherResponse = {
	data?: any
	errors?: any[]
}

const fetcher = async (query: string, variables: any, fetch: any): Promise<any> => {
	try {
		const res = await fetch('https://api.github.com/graphql', {
			method: 'POST',
			headers: {
				Authorization: `bearer ${VERY_SECRET}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ query, variables })
		})

		const { data }: FetcherResponse = await res.json()
		return data
	} catch (error: any) {
		console.log(error)
		throw error
	}
}

export default fetcher
