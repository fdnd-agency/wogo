<script>
  export let alt = ''
  export let src = ''
  export let opacity = ''

  // Webp images
  export let smallWebp = '../header-image-small.webp'
  export let mediumWebp = '../header-image-medium.webp'
  export let largeWebp = '../header-image-large.webp'

  // Fallback images for support
  export let smallFallback = '../header-image-small.jpg'
  export let mediumFallback = '../header-image-medium.jpg'
  export let largeFallback = '../header-image-large.jpg'
</script>

<picture>
  <!-- Image small screens -->
  <source type="image/webp" media="(max-width: 375px)" srcset={smallWebp} />
  <source media="(max-width: 375px)" srcset={smallFallback} />

  <!-- Image medium screens -->
  <source type="image/webp" media="(max-width: 768px)" srcset={mediumWebp} />
  <source media="(max-width: 768px)" srcset={mediumFallback} />

  <!-- Image large screens -->
  <source type="image/webp" media="(max-width: 1024px)" srcset={largeWebp} />
  <source media="(max-width: 1024px)" srcset={largeFallback} />

  <!-- Standaard afbeelding voor andere gevallen -->
  <img {src} {alt} style={`opacity: ${opacity}`} />
</picture>

<style>
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
</style>
