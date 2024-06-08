<script>
  import { Header, Footer } from '$lib/index'
  export let data
  console.log(data)
</script>

<Header navigation={data.navigation} />

<main id="main">
  <slot />
</main>

<Footer footerItems={data.footer} />
