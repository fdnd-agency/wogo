<script>
  import { HeaderContent, HeaderImage } from '$lib/index'
  export let items
</script>

<div class="header-container">
  <HeaderImage src={'../header-image-large.webp'} opacity="0.2" alt="cocktail" />
  <div class="header-text">
    <HeaderContent items={items[0].componentsCollection.items[0]} />
  </div>
</div>

<style>
  .header-container {
    position: relative;
    width: 100vw;
    height: calc(100vh - 3rem);
  }

  .header-text {
    position: absolute;
    bottom: 0;
    left: 0;
  }

  /* Large screens */
  @media screen and (min-width: 48em) {
    .header-text {
      top: 0;
    }
  }
</style>
