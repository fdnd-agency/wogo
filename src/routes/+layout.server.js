 import { error } from '@sveltejs/kit'
import contentfulFetch from '../api/contentful-fetch'


const query = `
{
  navigationCollection(limit: 1) {
    items {
    navigationLinksCollection(limit: 5) {
        items {
          ... on TypeLink {
           title
          	slug
            subLinksCollection(limit: 5) {
              items {
                ... on TypeLink {
                  title
                  slug
                }
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
    const { items: navigationItems } = data.navigationCollection
    const { items: footerItems } = data.footerCollection
    // const { items: tabBarItems } = data.tabBarCollection
    
    
    return {
      navigation: navigationItems,
      footer: footerItems,
      // tabBar: tabBarItems,
    }
  }