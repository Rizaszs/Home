import fetcher from '../lib/fetcher'
import slugify from '@sindresorhus/slugify'

const query = `{
  repository(name:"zalwan.github.io", owner: "zalwan") {
    discussions(first:100, orderBy: {field: CREATED_AT, direction: DESC}) {
      nodes {
        author {
          avatarUrl
        }
        title
        number
        createdAt
        category {
          emojiHTML
          name
        }
      }
    }
  }
}`

async function load({ fetch }) {
	try {
		const {
			repository: {
				discussions: { nodes }
			}
		} = await fetcher(query, {}, fetch)

		const processedNodes = await Promise.all(
			nodes.map(async ({ author: { avatarUrl }, title, number, createdAt, category }) => {
				let emojiHTML = category?.emojiHTML || ''

				if (emojiHTML.startsWith('<div>') && emojiHTML.endsWith('</div>')) {
					emojiHTML = emojiHTML.slice(5, -6)
				}

				const date = new Date(createdAt)
				const monthNames = [
					'January',
					'February',
					'March',
					'April',
					'May',
					'June',
					'July',
					'August',
					'September',
					'October',
					'November',
					'December'
				]
				const formattedDate = `${
					monthNames[date.getMonth()]
				} ${date.getDate()}, ${date.getFullYear()}`

				return {
					title,
					number,
					createdAt: formattedDate,
					avatarUrl: avatarUrl || '',
					slug: slugify(title),
					category: category ? { emojiHTML, name: category.name } : null
				}
			})
		)

		return { nodes: processedNodes }
	} catch (error) {
		console.error('Error fetching data:', error)
		return { nodes: [] }
	}
}

export { load }
