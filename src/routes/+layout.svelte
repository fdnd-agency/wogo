<script>
  import { Navigation } from '$lib'
  export let data
  console.log(data)
</script>

<header>
  <Navigation items={data.navigation[0].navigationLinksCollection.items} />
</header>

<main id="main">
  <slot />
</main>

<style global>
  @import './global.css';
</style>
