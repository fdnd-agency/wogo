<script>
  export let href = ''
  export let title = ''
</script>

<a {href}>{title}</a>

<style>
  a {
    line-height: 1.3;
    text-decoration: none;
    color: var(--accent2-primary);
  }
  a:focus,
  a:hover {
    transform: scale(1.2);
  }
</style>
