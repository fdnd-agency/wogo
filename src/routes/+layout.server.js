import { error } from '@sveltejs/kit'
import contentfulFetch from '../api/contentful-fetch'


const query = `
{
  navigation(id: "4xhowg37MDjXP7okbSrx1b") {
    navigationLinksCollection {
      items {
         ... on TypeLink {
           title
           label
          	slug
            isMoreLink
            subLinksCollection(limit: 5) {
              items {
                ... on TypeLink {
                  title
                  slug
                  isMoreLink
                }
              }
            }
          }
        }
      }
    }

  footerCollection(limit: 1) {
    items {
      newsletterTitle
			newsLetterDescription
      placeholderText
      footerLinksCollection(limit: 5) {
        items {
          ... on TypeLink {
            title
            slug
          }
        }
      }
      socialMediaIconsCollection(limit: 3) {
        items {
          ... on TypeAssets {
            url
            assetCollection {
              items {
                title
                description
                url
              }
            }
          }
        }
      }
    }
  }
}
`;


  export async function load() {
    const response = await contentfulFetch(query)
  
    if (!response.ok) {
      throw error(response.status, {
        message: response.statusText,
      })
    }
    const { data } = await response.json()
    const { navigation } = data
    const { items: footerItems } = data.footerCollection
    
    return {
      navigation,
      footer: footerItems
    };
  }