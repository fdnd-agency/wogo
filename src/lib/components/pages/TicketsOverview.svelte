<script>
  import { TicketCard } from "$lib/index";
  export let itemCollection;

  let allCities = [];
  let selectedCity = '';

  // Verzamel alle unieke steden
  itemCollection.componentsCollection.items.forEach(item => {
    item.citysCollection.items.forEach(city => {
      if (!allCities.includes(city.location)) {
        allCities.push(city.location);
      }
    });
  });

  // Filter de items op basis van de geselecteerde stad
  let filteredItems = itemCollection.componentsCollection.items;

  // Functie voor het bijwerken van de geselecteerde stad
  function selectCity(city) {
    if (selectedCity === city) {
      selectedCity = ''; // Reset naar geen stad als je de geselecteerde stad opnieuw klikt
    } else {
      selectedCity = city; // Stel de geselecteerde stad in
    }

    // Update de filteredItems op basis van de geselecteerde stad
    filteredItems = selectedCity
      ? itemCollection.componentsCollection.items.filter(item =>
          item.citysCollection.items.some(city => city.location === selectedCity)
        )
      : itemCollection.componentsCollection.items;
  }
</script>

<section class="tours-city">
  <h1>Tours</h1>
  <ul>
    {#each allCities as city}
      <li>
        <button 
          class:selected={selectedCity === city} 
          on:click={() => selectCity(city)}
          on:keydown={(e) => { 
            if (e.key === 'Enter' || e.key === ' ') selectCity(city); 
          }}
          role="button"
          tabindex="0">
          {city}
        </button>
      </li>
    {/each}
  </ul>
</section>

<section class="tours-cards">
  <!-- Hier wordt filteredItems gebruikt om de gefilterde kaarten weer te geven -->
  {#each filteredItems as item}
    <TicketCard {item} />
  {/each}
</section>

<style>
  .tours-city {
    padding: 2em;
    width: 100%;
    background-color: var(--accent1-tertiary);
    & h1 {
      text-align: center;
      color: var(--accent2-primary);
      font-size: 3.5rem;
    }
  }

  ul {
    display: flex;
    list-style: none;
    justify-content: center;
    padding-top: 0.5em;
    padding-right: 2em;
    font-size: 14px;
  }

  li {
    padding: 0.5em 1em 0 2em;
  }

  button.selected {
    background-color: var(--accent2-primary);
    transform: scale(1.15);
  }

  button {
    scale: 1.25;
    padding: 0.75em 1.5em;
    margin-left: 1em;
    border-radius: 4px;
    background-color: var(--btn-primary-bg);
    color: var(--btn-primary-text-clr);
    box-shadow: var(--btn-shadow);
    border: none;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      background-color: var(--accent2-secondary);
    }
    &:focus {
      box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.25);
      & .btn-icon {
        transform: translateX(5px);
      }
    }
  }

  .tours-cards {
    width: 100%;
    min-width: 300px;
    margin: 0 auto;
    margin: 2rem 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: var(--margin);
  }
</style>
