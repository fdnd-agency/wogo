import { error } from '@sveltejs/kit'
import contentfulFetch from '../api/contentful-fetch'


const query = ` {
  navigationCollection {
    items {
     logo {
      url
      description
      }
      navigationLinksCollection(limit: 5) { # Beperkt het aantal navigatielinks
        items {
          internalName
          url
          subLinksCollection(limit: 5) { # Beperkt het aantal sublinks
            items {
              internalName
              url
            }
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
    const { items } = data.navigationCollection

    return {
      navigation: items,
    }
  }