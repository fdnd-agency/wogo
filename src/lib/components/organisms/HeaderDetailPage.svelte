<script>
  import { HeaderContent, HeaderImage } from '$lib/index'
  export let items
  const items2 = items[0].componentsCollection.items[0]
</script>

<div class="header-container">
  <HeaderImage src={items2.asset.url} opacity="0.2" title={items2.asset.title.replace(/\s+/g, '-')} />
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
