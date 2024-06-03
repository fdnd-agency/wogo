<script>
  import { Header } from '$lib/index'
  export let data
</script>

<Header navigationItems={data.navigation} />

<main id="main">
  <slot />
</main>
