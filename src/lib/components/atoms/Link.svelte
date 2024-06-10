<script>
  export let fontSize = ''
  export let color = ''
  export let href = ''
  export let title = ''
  export let ariaLabel = ''
  export let icon = null
  export let iconWidth = '24px'
  export let iconHeight = '24px'
  export let iconColor = ''
</script>

<a
  {href}
  data-sveltekit-preload-data
  style="--clr: {color}; --font-size: {fontSize}"
  aria-label={ariaLabel}
>
  {title}
  {#if icon}
    <span>
      <svelte:component this={icon} width={iconWidth} height={iconHeight} svgColor={iconColor} />
    </span>
  {/if}
  <slot></slot>
</a>

<style>
  a {
    display: flex;
    align-items: center;
    vertical-align: middle;
    gap: 0.5rem;
    text-decoration: none;
    color: var(--clr);
    font-size: var(--font-size);
    white-space: nowrap;
  }

  span {
    display: flex;
    align-items: center;
  }
</style>
