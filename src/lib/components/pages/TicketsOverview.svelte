<script>
  import { TicketCard } from "$lib/index";
  import { onMount } from "svelte";

  export let itemCollection;
  let selectedCity = null;
  const citiesList = ["Amsterdam", "Rotterdam", "Londen"];

  // Als de waarde van city gelijk is aan "All", dan wordt selectedCity ingesteld op null.
  // Anders wordt selectedCity ingesteld op de waarde van city (de stad die is geselecteerd).

  const selectCity = (city) => {
  if (city === "All") {
    selectedCity = null;
  } else {
    selectedCity = city;
  }
};

</script>

<section class="tours-city">
  <h1>Tours</h1>
  <ul>
    <button class:active={!selectedCity} 
    on:click={() => selectCity("All")}>
    All</button> <!-- selected city word null  -->
    {#each citiesList as city}
      <button class:active={selectedCity === city}
       on:click={() => selectCity(city)}
       tabindex="0">
        {city}
  </button>
    {/each}
  </ul>
</section>

<section class="tours-cards">
  <TicketCard {itemCollection} />
</section>

<style>
  .tours-city {
    margin-top: 8em;
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

  @container (min-width: 768px) {
    ul {
      font-size: 16px;
    }
  }

  button {
    color: var(--accent2-quaternary);
    cursor: pointer;
    padding: 0.5em 1em 0 2em;
    background:none;
    border: none;
  }

  button:hover {
    color: var(--accent2-primary);
  }

  button::after {
    content: "";
    width: 0%;
    height: 2px;
    background: var(--accent2-primary);
    display: block;
    margin: auto;
    transition: 0.5s;
  }

  button:hover::after, 
  button.active::after {
    width: 100%;
  }

  .tours-cards {
    width: 100%;
    min-width: 300px;
    margin: 2rem 0;
    display: flex;
    overflow-x: auto;
    align-items: center;
    gap: var(--margin);
  }

  .tours-cards::-webkit-scrollbar {
    display: none;
  }

  .active {
    color: var(--accent2-primary);
  }
</style>
