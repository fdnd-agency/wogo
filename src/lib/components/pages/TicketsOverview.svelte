<script>
  import { Filter, TicketCard } from '$lib/index'
  export let itemCollection
  export let cities
</script>

<section class="body">
  <section>
    <h1>Tickets</h1>
    <Filter {cities} />
  </section>

  <section class="cards">
    <TicketCard {itemCollection} />
  </section>
</section>

<svelte:head>
  <title></title>
</svelte:head>

<style>
  h1 {
    color: white;
    font-weight: 700;
    font-size: 3.5rem;
  }

  .body {
    margin: 5rem 2rem;
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
  }
</style>
