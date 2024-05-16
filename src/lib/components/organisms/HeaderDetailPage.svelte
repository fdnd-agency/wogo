<script>
  import HeaderContent from '../molecules/HeaderContent.svelte'
</script>

<section>
  <div class="header-container">
    <img class="header-image" src="Mock-image.jpg" alt="cocktail" />
    <div class="header-text">
      <HeaderContent />
    </div>
  </div>
</section>

<style>
  .header-container {
    position: relative;
  }

  .header-image {
    width: 100%;
    height: auto;
    opacity: 0.6;
  }

  .header-text {
    position: absolute;
    bottom: 0;
    left: 0;
  }
</style>
