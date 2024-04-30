import { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } from '$env/static/private'

  
const contentfulFetch = async query => {
return await fetch('https://graphql.contentful.com/content/v1/spaces/' + CONTENTFUL_SPACE_ID
  , {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + CONTENTFUL_ACCESS_TOKEN,
    },
    body: JSON.stringify({ query }),
  })
}

export default contentfulFetch
