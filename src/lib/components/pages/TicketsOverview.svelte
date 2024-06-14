<script>
  import { Filter, TicketCard } from '$lib/index'
  export let itemCollection
  export let cities
</script>

<section>
  <section>
    <h1>Tickets</h1>
    <Filter {cities} />
  </section>

  <section>
    <TicketCard {itemCollection} />
  </section>
</section>

<svelte:head>
  <title></title>
</svelte:head>

<style>
  h1 {
    color: white;
    font-size: 3.5rem;
  }

  section:first-child {
    margin: 7rem 4rem 4rem 4rem;
  }

  section:first-child > section:last-child {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
  }
</style>
