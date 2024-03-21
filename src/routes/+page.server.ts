import contentfulFetch from '../api/contentful-fetch'

const query = `
{
	navigationCollection{
    items{
      name,
      jobTitle
      startDate
      photo {
        url(transform: {
          format: AVIF
        })
        description
      }
    }
  }
}
`

export async function load() {
  const response = await contentfulFetch(query)


  const { data } = await response.json()
  const { items } = data.employeeCollection

  console.log(data)
  return {
    employees: items.map((e) => {
      const options = { month: 'long', year: 'numeric' }
      const date = new Date(e.startDate)
      const formattedStartDate = new Intl.DateTimeFormat('en-US', options).format(date)

      return {
        ...e,
        startDate: formattedStartDate,
      }
    }),
  }
}
