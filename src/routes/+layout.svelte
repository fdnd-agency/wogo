<script>
  import { Navigation, Footer, TabBar, TicketInfoPage } from '$lib/index'
  export let data
</script>

<header>
  <Navigation navigationItems={data.navigation} />
</header>

<TicketInfoPage />

<main id="main">
  <slot />
</main>

<Footer footerItems={data.footer} />
<TabBar tabBarItems={data.tabBar} />
