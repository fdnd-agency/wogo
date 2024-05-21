<script>
  import { WorkWithUs, HomePage, GroupOutings } from '$lib/index'
  export let data
  // console.log(data)

  const componentMap = {
    home: HomePage,
    'work-with-us': WorkWithUs,
    'group-outings': GroupOutings,
  }
  const items = data.pageData.find((pageDataItem) => pageDataItem.slug === data.slug)
    .componentsCollection.items

  const Component = componentMap[data.slug] || HomePage
</script>


<svelte:component this={Component} {items} />

<style>
</style>