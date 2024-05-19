import { error } from '@sveltejs/kit'
import contentfulFetch from './src/api/contentful-fetch'

export async function load({ params }) {
  const query = `
  {
    pageCollection(where: {slug:"${params.slug}"}) {
      items {
        slug 
        title 
      }
    }
  }
  `;
  
  const response = await contentfulFetch(query);
  
  if (!response.ok) {
    throw error(404, {
      message: response.statusText,
    });
  }

  const { data } = await response.json();
  const { items } = data.pageCollection;

  return {
      pageData: items,
      slug: params.slug
  };
}

// 1 export function load({ params }) {
// 2  console.log(params.slug)
// 4  Laad aan de hand hiervan de juiste pagina in en return de data


