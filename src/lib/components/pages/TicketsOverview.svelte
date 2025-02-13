<script>
  import { TicketCard } from "$lib/index";

  import { onMount } from "svelte";
  export let itemCollection;
  let selectedCity = null;

  // console.log("ItemCollection:", itemCollection.componentsCollection.items);

  // itemCollection.componentsCollection.items.forEach(itemC => {
  //   console.log("city item:", itemC.citysCollection.items);
  // });

  let cityCollection = ["Amsterdam", "Rotterdam", "Londen"];

  const CitySelect = (city) => {
    selectedCity = city;
  };
</script>

<section class="tours-city">
  <h1>Tours</h1>
  <ul>
    {#each cityCollection as city}
      <li
        class="cityNames"
        class:active={selectedCity === city}
        on:click={() => CitySelect(city)}
      >
        {city}
      </li>
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
    @container (min-width: 768px) {
      font-size: 16px;
    }
  }

  li {
    color: var(--accent2-quaternary);
    cursor: pointer;
    padding: 0.5em 1em 0 2em;
    &:hover {
      color: var(--accent2-primary);
    }
  }

  .tours-city ul li::after {
    content: "";
    width: 0%;
    height: 2px;
    background: var(--accent2-primary);
    display: block;
    margin: auto;
    transition: 0.5s;
  }

  .tours-city ul li:hover::after,
  .tours-city ul li.active::after {
    width: 100%;
  }

  .tours-cards {
    width: 100%;
    min-width: 300px;
    margin: 0 auto;
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
