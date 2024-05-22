<script>
  export let width = ''
  export let height = ''
  export let alt = ''
  export let src = ''
</script>

<img {src} {alt} style={`width: ${width}px; height: ${height}px;`} />

<style>
  img {
    width: 100%;
    height: 100%;
    display: block;
  }
</style>
