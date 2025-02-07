const redirects = [
  {
    source: '/',
    destination: '/home',
  },
  {
    source: '/form',
    destination: '/foo',
  },
]

/**
 * Processes incoming events with potential redirects.
 *
 * This asynchronous function checks if the incoming event's URL pathname matches a defined redirect.
 * If a matching redirect is found, it immediately returns a Response with a 301 status code and a Location header
 * pointing to the redirect destination. If no redirect is applicable, it proceeds to process the event using the provided
 * resolve function.
 *
 * @param {object} param0 - An object containing the event and resolve function.
 * @param {Request} param0.event - The event object containing properties such as the URL to be checked for redirects.
 * @param {Function} param0.resolve - A function that processes the event and returns a Response if no redirect is applicable.
 * @returns {Promise<Response>} A promise that resolves to a Response, either a 301 redirect response or the result of processing the event.
 */
export async function handle({ event, resolve }) {
  const redirect = redirects.find((item) => event.url.pathname === item.source)

  if (redirect) {
    
    return new Response('', { status: 301, headers: { Location: redirect.destination } })
  }

  const response = await resolve(event)
  return response
}
