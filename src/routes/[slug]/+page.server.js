export function load({ params }) {
  console.log(params.slug)
  let data = { slug: params.slug }
  // Laad aan de hand hiervan de juiste pagina in en return de data

  return data
}
