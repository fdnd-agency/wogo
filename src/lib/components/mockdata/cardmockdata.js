const mockdata = {
  pageData: [
    {
      slug: 'mock-page',
      title: 'Mock Page',
      componentsCollection: {
        items: [
          {
            __typename: 'Hero',
            title: 'Hero Title',
            subtitle: 'Hero Subtitle',
            label: 'Hero Label',
            price: '100',
            location: 'Hero Location',
            asset: {
              url: 'https://example.com/hero.jpg',
              title: 'Hero Image',
            },
          },
          {
            __typename: 'ItemCollection',
            componentsCollection: {
              items: [
                {
                  __typename: 'Card',
                  title: 'Mock Card 1',
                  textParagraph: 'This is a description for Mock Card 1.',
                  price: '50',
                  slug: 'mock-card-1',
                  city: 'Amsterdam',
                },
                {
                  __typename: 'Card',
                  title: 'Mock Card 2',
                  textParagraph: 'This is a description for Mock Card 2.',
                  price: '75',
                  slug: 'mock-card-2',
                  city: 'Rotterdam',
                },
                {
                  __typename: 'Card',
                  title: 'Mock Card 3',
                  textParagraph: 'This is a description for Mock Card 3.',
                  price: '60',
                  slug: 'mock-card-3',
                  city: 'Utrecht',
                },
              ],
            },
          },
        ],
      },
    },
  ],
}

export default mockdata
