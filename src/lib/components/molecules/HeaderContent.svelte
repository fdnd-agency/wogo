<script>
  import IconLocation from '../atoms/IconLocation.svelte'
  export let items
  console.log(items[0].componentsCollection)
</script>

{#each items as item}
  <section class="content-container">
    <!-- First content row -->
    <div class="title-label">
      <h1>{item.title}</h1>
      <span class="label" aria-hidden="true">{item.label}</span>
    </div>

    <!-- Second content row -->
    <h2 class="subtitle">
      {item.subtitle}
    </h2>

    <!-- Last content row -->
    <div class="location-price">
      <IconLocation width="15" height="15" color="hsl(21.23, 100%, 87.25%)" />
      <p class="location">{item.location}</p>
      <p class="price">{item.price}</p>
    </div>
  </section>
{/each}

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
