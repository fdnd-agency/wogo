<script>
  import { transformImageUrl } from '../../../api/contentful-images-fetch'

  export let src = ''
  export let width = ''
  export let height = ''
  export let alt = ''
  export let opacity = ''
  export let brdRadius = ''
  export let loading = ''

  // Dynamische URL's voor verschillende formaten
  const smallWebp = transformImageUrl(src, { w: 375, fm: 'webp' })
  const mediumWebp = transformImageUrl(src, { w: 768, fm: 'webp' })
  const largeWebp = transformImageUrl(src, { w: 1024, fm: 'webp' })
  const smallFallback = transformImageUrl(src, { w: 375 })
  const mediumFallback = transformImageUrl(src, { w: 768 })
  const largeFallback = transformImageUrl(src, { w: 1024 })
</script>

<picture>
  <source type="image/webp" media="(max-width: 375px)" srcset={smallWebp} />
  <source media="(max-width: 375px)" srcset={smallFallback} />
  <source type="image/webp" media="(max-width: 768px)" srcset={mediumWebp} />
  <source media="(max-width: 768px)" srcset={mediumFallback} />
  <source type="image/webp" media="(max-width: 1024px)" srcset={largeWebp} />
  <source media="(max-width: 1024px)" srcset={largeFallback} />
  <img
    src={largeFallback}
    {alt}
    {loading}
    style={`width: ${width}px; height: ${height}px; border-radius: ${brdRadius}; opacity: ${opacity};`}
  />
</picture>

<style>
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    display: block;
  }
</style>
