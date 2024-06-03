<script>
  import { WorkWithUs, HomePage, GroupOutings, TicketsOverview, OverviewPage, TicketCard } from '$lib/index'
  export let data
  export let mockdata // Voeg mockdata toe als prop

  const componentMap = {
    home: HomePage,
    walks: OverviewPage,
    'work-with-us': WorkWithUs,
    'group-outings': GroupOutings,
    'walks-overview': TicketsOverview,
  }

  const items = data.pageData.find((pageDataItem) => pageDataItem.slug === data.slug)
    .componentsCollection.items
  const itemCollection = data.itemCollection
  // console.log(itemCollection, 'test item')

  const Component = componentMap[data.slug] || HomePage
</script>

<svelte:component this={Component} {items} {mockdata} {itemCollection} />

<!-- Geef mockdata prop door -->

