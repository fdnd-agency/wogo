<script>
  import HeaderContent from '../molecules/HeaderContent.svelte'
</script>

<section>
  <div class="header-container">
    <img class="header-image" src="Test-image.jpg" alt="cocktail" />
    <div class="header-text">
      <HeaderContent />
    </div>
  </div>
</section>

<style>
  .header-container {
    position: relative;
    width: 100vw;
    height: calc(100vh - 3rem);
  }

  .header-image {
    width: 100%;
    object-fit: cover;
    height: 100%;
    opacity: 0.2;
  }

  .header-text {
    position: absolute;
    bottom: 0;
    left: 0;
  }

  @media screen and (min-width: 768px) {
    .header-text {
      top: 0;
    }
  }
</style>
