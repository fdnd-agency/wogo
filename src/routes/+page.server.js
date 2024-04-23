import { error } from '@sveltejs/kit'
import contentfulFetch from '../api/contentful-fetch'


const query = `
  {
    landingPageCollection {
      items {
        sectionCollection(limit: 5) {
          items {
            ... on HeroBanner {
              headline
              bodyText
              buttonText
              backgroundAsset {
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
`;

  export async function load() {
    const response = await contentfulFetch(query)
  
    if (!response.ok) {
      throw error(response.status, {
        message: response.statusText,
      })
    }
    const { data } = await response.json()
    const { items } = data.landingPageCollection
    

    return {
       landingPage: items 
    };
  }