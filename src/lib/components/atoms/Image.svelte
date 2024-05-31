<script>
  export let width = ''
  export let height = ''
  export let alt = ''
  export let src = ''
</script>

<img {src} {alt} style={`width: ${width}px; height: ${height}px;`} />

<style>
  img {
    fill: var(--color, var(--accent2-primary));
    width: 100%;
    height: au;
    display: block;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 100%;
  }
</style>
