<script>
  import HeaderContent from '../molecules/HeaderContent.svelte'
</script>

<div class="header-container">
  <img class="header-image" src="Test-image.jpg" alt="cocktail" />
  <div class="header-text">
    <HeaderContent />
  </div>
</div>

<style>
  .header-container {
    position: relative;
    width: 100vw;
    height: calc(100vh - 3rem);
  }

  .header-image {
    object-fit: cover;
    width: 100%;
    height: 100%;
    opacity: 0.2;
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
