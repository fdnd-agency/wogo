<script>
  export let width = ''
  export let height = ''
  export let alt = ''
  export let src = ''
  export let color = ''
  export let opacity = ''
  export let srcset = ''
</script>

<img
  {srcset}
  {src}
  {alt}
  fill={color}
  style={`width: ${width}px; height: ${height}px; opacity: ${opacity};`}
/>

<style>
  img {
   object-fit: cover;
    width: 100%;
    height: au;
    display: block;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 100%;
  }
</style>
