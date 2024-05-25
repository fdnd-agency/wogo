<script>
  export let ariaLabel = ''
  export let href = ''
  export let target = ''
  export let title = ''
  export let noHover = false
</script>

<a data-sveltekit-reload aria-label={ariaLabel} {href} {target} class:no-hover={noHover}>
  {title}
  <slot></slot>
</a>

<style>
  a {
    --link-color: var(--accent2-tertiary);
    --link-hover-color: var(--accent2-secondary);
    line-height: 1.4;
    text-decoration: none;
    color: var(--link-color);
    filter: drop-shadow(0 0 0.4rem #000);
  }
  .no-hover:hover,
  .no-hover:focus {
    color: var(--accent2-secondary);
    text-decoration: none;
  }
</style>
