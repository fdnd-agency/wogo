import { error } from '@sveltejs/kit'
import contentfulFetch from './src/api/contentful-fetch'

const query = `
  {
      carrousel(id: "1Xke6DTJ4mzPAwsF6xfybv") {
        carrouselCollection {
          items {
            ... on CardComponent {
              title
              cardNumber
              price
              description
              locationDescription
              buttonText
              icon {
                title
                url
              }
            }
          }
        }
      }
    }
`

export async function load() {
  const response = await contentfulFetch(query)

  if (!response.ok) {
    throw error(response.status, {
      message: response.statusText,
    })
  }
  const { data } = await response.json()
  const { items } = data.carrousel.carrouselCollection

  return {
    cardsItems: items,
  }
}
