<script>
  import { Header, Footer } from '$lib/index'
  export let data
</script>

<Header navigation={data.navigation} />

<main id="content">
  <slot />
</main>

<Footer footerItems={data.footer} />
