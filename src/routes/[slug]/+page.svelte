<script>
  import { WorkWithUs, HomePage, GroupOutings } from '$lib/index'
  export let data

  const componentMap = {
    home: HomePage,
    'work-with-us': WorkWithUs,
    'group-outings': GroupOutings,
  }

  const Component = componentMap[data.slug] || HomePage
</script>

<Component />

<!-- <WorkWithUs />

<HomePage /> -->

<!-- if(parentSlug) {
  <kruimelpad parentSlug />
} -->

<div>Dit is een slug!!!!</div>

<style>
  div {
    color: red;
  }
</style>
