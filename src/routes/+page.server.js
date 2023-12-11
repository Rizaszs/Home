import fetcher from '../lib/fetcher'
import slugify from '@sindresorhus/slugify'

function convertEmojiFromText(emojiText) {
	switch (emojiText) {
		case ':mega:':
			return '📣'
		case ':speech_balloon:':
			return '💬'
		case ':bulb:':
			return '💡'
		case ':ballot_box:':
			return '🗳️'
		case ':pray:':
			return '🙏'
		case ':raised_hands:':
			return '🙌'
		default:
			return emojiText
	}
}

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
          emoji
          name
        }
      }
    }
  }
}`

export async function load({ fetch }) {
	try {
		const {
			repository: {
				discussions: { nodes }
			}
		} = await fetcher(query, {}, fetch)

		const updatedNodes = nodes.map(
			({ author: { avatarUrl }, title, number, createdAt, category }) => ({
				title,
				number,
				createdAt,
				avatarUrl: avatarUrl || '',
				slug: slugify(title),
				category: category
					? {
							emoji: convertEmojiFromText(category.emoji),
							name: category.name
					  }
					: null
			})
		)

		return { nodes: updatedNodes }
	} catch (error) {
		console.error('Error fetching data:', error)
		return { nodes: [] }
	}
}
