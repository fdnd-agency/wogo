<script>
  export let ariaLabel
  export let href = ''
  export let target = '_blank'
  export let title = ''
</script>

<a aria-label={ariaLabel} {href} {target}
  >{title}
  <slot></slot>
</a>

<style>
  a {
    line-height: 1.4;
    text-decoration: none;
    color: var(--accent2-tertiary);
  }
</style>
