<script>
  import { Navigation, Footer } from '$lib/index'
  export let data
</script>

<header>
  <Navigation navigationItems={data.navigation} />
</header>
<main id="main">
  <slot />
</main>
<Footer footerItems={data.footer} />

<style global>
  @import './global.css';
</style>
