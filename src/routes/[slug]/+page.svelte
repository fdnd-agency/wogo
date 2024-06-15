<script>
  import { WorkWithUs, HomePage, GroupOutings, TicketsOverview } from '$lib/index'
  export let data

  const componentMap = {
    home: HomePage,
    'walks-overview': TicketsOverview,
    'work-with-us': WorkWithUs,
    'group-outings': GroupOutings,
  }

  const items = data.pageData.find((pageDataItem) => pageDataItem.slug === data.slug)
    .componentsCollection.items
  const itemCollection = data.itemCollection
  const cities = data.cities

  const Component = componentMap[data.slug] || HomePage
</script>

<svelte:component this={Component} {items} {itemCollection} {cities} />

<!-- Geef mockdata prop door -->
