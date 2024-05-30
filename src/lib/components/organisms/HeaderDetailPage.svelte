<script>
  import HeaderContent from '../molecules/HeaderContent.svelte'
  import Image from '../atoms/Image.svelte'
  export let items
</script>

<div class="header-container">
  <picture>
    <Image src={items[0].componentsCollection.items[0].asset.url} opacity="0.2" />
  </picture>
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

  /* Grote schermen */
  @media screen and (min-width: 48em) {
    .header-text {
      top: 0;
    }
  }
</style>
