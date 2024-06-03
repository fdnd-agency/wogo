<script>
  import { WorkWithUs, HomePage, GroupOutings, OverviewPage, TicketCard } from '$lib/index'
  export let data
  // console.log(data, 'test page file')

  const componentMap = {
    home: HomePage,
    walks: OverviewPage,
    'work-with-us': WorkWithUs,
    'group-outings': GroupOutings,
  }

  const items = data.pageData.find((pageDataItem) => pageDataItem.slug === data.slug)
    .componentsCollection.items
  const itemCollection = data.itemCollection
  // console.log(itemCollection, 'test item')

  const Component = componentMap[data.slug] || HomePage
</script>

<svelte:component this={Component} {items} {itemCollection} />

<!-- <TicketCard {itemCollection} /> -->
