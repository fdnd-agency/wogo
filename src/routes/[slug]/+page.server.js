import { error } from '@sveltejs/kit'
import contentfulFetch from '../../api/contentful-fetch.js'


export async function load({ params, url }) {
  const locatie = url.searchParams.get('locatie') || ''
  const query = `
  {
    pageCollection(where: {slug:"${params.slug}"}, limit: 10) {
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
                description
              }   
            }
            ... on TypeText {
                title
                textParagraph
                asset {
                url
                title
                description
              }
            }
            ... on ItemCollection {
              componentsCollection(limit: 4) {
                items {
                  ... on Card {
                    title
                    textParagraph
                    price
                    location
                    cocktailDescription
                    image {
                      ... on Asset {
                        url
                        title
                        description
                      }
                    }
                  }
                  ... on TypeText {
                    title
                    textParagraph
                    icon {
                      url
                      title
                      description
                    }
                    asset {
                      url
                      title
                      description
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    itemCollection(id: "6mW82qJLx8D57GMLFIOLmw") {
      componentsCollection {
        items {
          ... on Card {
            title
            textParagraph
            location
            slug
            cocktailDescription
            price
            image {
              ... on Asset {
                url
                title
              }
            }
						citysCollection(limit: 4) {
              items {
                ... on TypeFIlterItem {
                  location
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
  const itemCollection = data.itemCollection

  if (!items || items.length === 0) {
    throw error(404, {
      message: 'Oops! This Page is Missing Like the Last Sip of a Great Cocktail!',
      hint: 'It seems this page is under construction, just like a cocktail in the making. Don’t worry, we’re mixing things up and it will be ready soon!',
    })
  }

  // Extract cities from the citysCollection
  const cities = []
  itemCollection.componentsCollection.items.forEach((item) => {
    if (item.citysCollection) {
      item.citysCollection.items.forEach((city) => {
        cities.push(city.location)
      })
    }
  })

  // Remove duplicates
  const uniqueCities = [...new Set(cities)]

  // Filter items based on the selected city
  const filteredItems = locatie
    ? itemCollection.componentsCollection.items.filter((item) =>
        item.citysCollection.items.some((city) => city.location === locatie)
      )
    : itemCollection.componentsCollection.items

  return {
    itemCollection: { componentsCollection: { items: filteredItems } },
    pageData: items,
    slug: params.slug,
    cities: uniqueCities,
  }
}
