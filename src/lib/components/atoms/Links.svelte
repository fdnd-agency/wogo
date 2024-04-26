<script>
  export let ariaLabel
  export let href = ''
  export let target = '_blank'
  export let title = ''
</script>

<a class="link" aria-label={ariaLabel} {href} {target}>{title}</a>

<style>
  a {
    line-height: 1.3;
    text-decoration: none;
    color: var(--accent2-primary);
  }
</style>
