<script>
  export let width = ''
  export let height = ''
  export let color = 'var(--btn-primary-text-clr)'
</script>

<svg {width} {height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M6 12h12m0 0-5-5m5 5-5 5"
    stroke={color}
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  /></svg
>
