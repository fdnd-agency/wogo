<script>
  import { WorkWithUs, HomePage, GroupOutings, FrequentlyAsked, TicketsOverview, AboutUs } from '$lib/index'
  export let data

  const componentMap = {
    home: HomePage,
    'tour-overview': TicketsOverview,
    'work-with-us': WorkWithUs,
    'group-bookings': GroupOutings,
    'about-us': AboutUs,
    'faq': FrequentlyAsked,
  };

  const items = data.pageData.find(
    (pageDataItem) => pageDataItem.slug === data.slug
  ).componentsCollection.items;
  const itemCollection = data.itemCollection;
  const cities = data.cities;

  const Component = componentMap[data.slug] || HomePage;
</script>

<svelte:component this={Component} {items} {itemCollection} {cities} />