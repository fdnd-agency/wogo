<script>
  import IconLocation from '../atoms/IconLocation.svelte'

  // Mockdata voor de header text
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

<section class="content-container">
  <!-- First content row -->
  <div class="title-label">
    <h1>{mockData[0].title}</h1>
    <span class="label" aria-hidden="true">{mockData[0].label}</span>
  </div>

  <!-- Second content row -->
  <h1 class="subtitle">{mockData[0].subtitle}</h1>

  <!-- Last content row -->
  <div class="location-price">
    <IconLocation width="15" height="15" color="hsl(21.23, 100%, 87.25%)" />
    <p class="location">{mockData[0].location}</p>
    <p class="price">{mockData[0].price}</p>
  </div>
</section>

<style>
  .content-container {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    margin: 5rem 2rem;
  }

  /* First content row */
  h1 {
    display: flex;
    align-items: center;
    font-size: 2rem;
    text-transform: uppercase;
    color: white;
  }

  .title-label {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .label {
    padding: 0.3rem 0.5rem;
    border: 1px solid var(--accent2-tertiary);
    border-radius: 3rem;
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
    color: var(--accent2-tertiary);
  }

  /* Second content row */
  .subtitle {
    font-size: 2rem;
    text-transform: uppercase;
    color: white;
  }

  /* Last content row */
  .location-price {
    display: flex;
    align-items: center;
  }

  .location {
    margin: 0 1rem 0 0.5rem;
    color: var(--accent2-tertiary);
  }

  .price {
    font-weight: 600;
    color: var(--accent2-primary);
  }

  /* Large screens */
  @media screen and (min-width: 768px) {
    .content-container {
      margin: 8rem 8rem;
    }

    h1 {
      font-size: 3rem;
    }

    .label {
      padding: 0.5rem 0.8rem;
      font-size: 1.3rem;
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
  }
</style>
