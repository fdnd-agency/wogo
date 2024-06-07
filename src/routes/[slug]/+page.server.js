import { error } from '@sveltejs/kit'
import contentfulFetch from '../../api/contentful-fetch.js'


export async function load({ params }) {
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
            cocktailDescription
            price
            image {
              ... on Asset {
                url
                title
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
  const itemCollection = data.itemCollection;
   


  if (!items || items.length === 0) {
    throw error(404, {
      message: 'Oops! This Page is Missing Like the Last Sip of a Great Cocktail!',
      hint: 'It seems this page is under construction, just like a cocktail in the making. Don’t worry, we’re mixing things up and it will be ready soon!',
    })
  }

  return {
      itemCollection: itemCollection,
      pageData: items,
      slug: params.slug
  };
}
