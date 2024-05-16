<script>
  import { Navigation, Footer, TabBar, DetailPage } from '$lib/index'
  export let data
</script>

<header>
  <Navigation navigationItems={data.navigation} />
</header>

<DetailPage />

<main id="main">
  <slot />
</main>

<Footer footerItems={data.footer} />
<TabBar tabBarItems={data.tabBar} />
