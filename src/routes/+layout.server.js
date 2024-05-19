 import { error } from '@sveltejs/kit'
import contentfulFetch from '../api/contentful-fetch'


const query = `
{
  navigationCollection(limit: 1) {
    items {
      logo {
        url
      }
      navigationLinksCollection(limit: 5) {
        items {
          ... on TypeLink {
            internalName
            url
            subLinksCollection(limit: 5) {
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

  pageCollection {
    items {
      slug 
    }
  }

  tabBarCollection(limit: 1) {
    items {
      tabBarItemsCollection(limit: 4) {
        items {
          ... on IsButtonLink {
            title
            url
            icon {
              ... on TypeImage {
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
  }

  footerCollection(limit: 1) {
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
    const { items: tabBarItems } = data.tabBarCollection
    const { items: pageItems } = data.pageCollection
    
    
    return {
      navigation: navigationItems,
      page: pageItems,
      footer: footerItems,
      tabBar: tabBarItems,
    }
  }