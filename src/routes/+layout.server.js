 import { error } from '@sveltejs/kit'
import contentfulFetch from '../api/contentful-fetch'


const query = `
{
  navigationCollection(limit: 5) {
    items {
      logo {
        url
      }
      navigationLinksCollection(limit: 3) {
        items {
          ... on TypeLink {
            internalName
            url
            subLinksCollection(limit: 2) {
              items {
                ... on TypeLink {
                  internalName
                  url
                }
              }
            }
          }
        }
      }
    }
  }

  footerCollection(limit: 5) {
    items {
      formNewsletterTitle
      formLabel
      formPlaceholderText
      formButtonText
      logo {
        title
        description
        url
      }
      footerLinksCollection(limit: 20) {
        items {
          ... on TypeLink {
            internalName
            title
            url
          }
        }
      }
      socialMediaLinksCollection(limit: 3) {
        items {
          ... on TypeImage {
            mediaUrl
            mediaCollection {
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
    
    return {
      navigation: navigationItems,
      footer: footerItems,
    }
  }