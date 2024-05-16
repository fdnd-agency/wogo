<script>
  import IconLocation from '../atoms/IconLocation.svelte'

  const mockData = [
    {
      title: 'Regular',
      subtitle: 'cocktail walk',
      label: 'route 1',
      location: 'Center, West',
      price: '€25,95',
    },
    {
      title: 'Premium',
      subtitle: 'cocktail walk',
      label: 'route 2',
      location: 'Center, West',
      price: '€26,95',
    },
    {
      title: 'Bols',
      subtitle: 'cocktail walk',
      label: 'route 3',
      location: 'Center, West',
      price: '€29,95',
    },
  ]
</script>

<div class="content-container">
  <div class="title-label">
    <h1>{mockData[0].title}</h1>
    <span class="label" aria-hidden="true">{mockData[0].label}</span>
  </div>

  <h1 class="subtitle">{mockData[0].subtitle}</h1>

  <div class="location-price">
    <IconLocation width="15" height="15" color="hsl(21.23, 100%, 87.25%)" />
    <p class="location">{mockData[0].location}</p>
    <p class="price">{mockData[0].price}</p>
  </div>
</div>

<style>
  .content-container {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    margin: 5rem 2rem;
  }

  .title-label {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .label {
    color: var(--accent2-tertiary);
    font-size: 1rem;
    text-align: center;
    padding: 0.3rem 0.5rem;
    border: 1px solid var(--accent2-tertiary);
    font-weight: 600;
    border-radius: 3rem;
  }

  .subtitle {
    text-transform: uppercase;
    font-size: 2rem;
    color: white;
  }

  .location-price {
    display: flex;
    align-items: center;
  }

  .location {
    color: var(--accent2-tertiary);
    margin-right: 1rem;
    margin-left: 0.5rem;
  }

  .price {
    color: var(--accent2-primary);
    font-weight: 600;
  }

  h1 {
    display: flex;
    align-items: center;
    text-transform: uppercase;
    font-size: 2rem;
    color: white;
  }

  @media screen and (min-width: 768px) {
    .content-container {
      margin: 8rem 8rem;
    }

    h1 {
      font-size: 3rem;
    }

    .subtitle {
      font-size: 3rem;
    }

    .location {
      font-size: 1.3rem;
    }

    .price {
      font-size: 1.3rem;
    }

    .label {
      font-size: 1.3rem;
      padding: 0.5rem 0.8rem;
    }
  }
</style>
