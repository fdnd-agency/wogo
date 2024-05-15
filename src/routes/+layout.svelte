<script>
  import { Navigation, Footer, TabBar } from '$lib/index'
  export let data
</script>

<header>
  <Navigation navigationItems={data.navigation} />
</header>

<main id="main">
  
  <slot />

</main>

<Footer footerItems={data.footer} />
<TabBar tabBarItems={data.tabBar} />
