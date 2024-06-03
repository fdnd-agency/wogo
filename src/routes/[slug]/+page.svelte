<script>
  import { WorkWithUs, HomePage, GroupOutings, TicketsOverview } from '$lib/index'
  export let data
  export let mockdata // Voeg mockdata toe als prop

  const componentMap = {
    home: HomePage,
    'work-with-us': WorkWithUs,
    'group-outings': GroupOutings,
    'walks-overview': TicketsOverview,
  }

  const items = data.pageData.find((pageDataItem) => pageDataItem.slug === data.slug)
    .componentsCollection.items

  const Component = componentMap[data.slug] || HomePage
</script>

<svelte:component this={Component} {items} {mockdata} />

<!-- Geef mockdata prop door -->

<style>
  /* Voeg stijlen toe zoals nodig */
</style>
