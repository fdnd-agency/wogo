import { error } from '@sveltejs/kit'
import contentfulFetch from './src/api/contentful-fetch'

export async function load({ params }) {
  const query = `
  {
    pageCollection(where: {slug:"${params.slug}"}) {
      items {
        slug
        title
        componentsCollection(limit: 10) {
          items {
            ... on Hero {
              title
              subtitle
              label
              price
              location
              asset {
                url
                title
              }   
            }
          ... on ItemCollection {
            itemsCollection(limit: 4) {
              items {
                ... on Card{
                  title
                  textParagraph
                  price
                  slug
                }
              }
            }
          }
          }
        }
      }
    }
  }
  `

  const response = await contentfulFetch(query)

  const { data } = await response.json()
  const { items } = data.pageCollection

  if (!items || items.length === 0) {
    throw error(404, {
      message: 'Oops! This Page is Missing Like the Last Sip of a Great Cocktail!',
      hint: 'It seems this page is under construction, just like a cocktail in the making. Don’t worry, we’re mixing things up and it will be ready soon!',
    })
  }

  return {
    pageData: items,
    slug: params.slug,
  }
}
