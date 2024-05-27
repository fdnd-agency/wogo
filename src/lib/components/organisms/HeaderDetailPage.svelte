<script>
  import HeaderContent from '../molecules/HeaderContent.svelte'
  import HeaderImage from '../atoms/HeaderImage.svelte'
  export let items
  console.log(items)
</script>

<div class="header-container">
  <HeaderImage src="" opacity="0.2" alt="cocktail" />
  <div class="header-text">
    <HeaderContent {items} />
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
