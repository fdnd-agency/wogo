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

export async function handle({ event, resolve }) {
  const redirect = redirects.find((item) => event.url.pathname === item.source)

  if (redirect) {
    return new Response('', { status: 301, headers: { Location: redirect.destination } })
  }

  const response = await resolve(event)
  return response
}
