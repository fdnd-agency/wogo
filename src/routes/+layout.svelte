<script>
  import { Header, Footer } from '$lib/index'
  export let data
</script>

<Header navigationItems={data.navigation} />

<main id="main">
  <slot />
</main>

<!-- <Footer footerItems={data.footer} /> -->
<!-- <TabBar tabBarItems={data.tabBar} /> -->
