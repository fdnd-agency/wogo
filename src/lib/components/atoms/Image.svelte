<script>
  export let width = ''
  export let height = ''
  export let alt = ''
  export let src = ''
  export let color = ''
  export let opacity = ''
  export let srcset = ''
  export let brdRadius = ''
</script>

<img
  {srcset}
  {src}
  {alt}
  fill={color}
  style={`width: ${width}px; height: ${height}px; opacity: ${opacity}; border-radius: ${brdRadius};`}
/>

<style>
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    display: block;
  }
</style>
