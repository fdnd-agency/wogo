<script>
  import { TicketInfoPage } from '$lib/index'
  export let data

  const componentMap = {
    home: HomePage,
    'ticket-information': TicketInfoPage,
  }
  const items = data.pageData.find((pageDataItem) => pageDataItem.slug === data.slug)
    .componentsCollection.items

  const Component = componentMap[data.slug] || TicketInfoPage
</script>

<svelte:component this={Component} {items} />

<style>
</style>
