<script>
  import { Filter, TicketCard } from '$lib/index'
  export let itemCollection
  export let cities
</script>

<h1>All walks</h1>

<Filter {cities} />

<section>
  <TicketCard {itemCollection} />
</section>

<svelte:head>
  <title></title>
</svelte:head>

<style>
  h1 {
    color: red;
  }

  section {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
  }
</style>
