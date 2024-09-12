<script>
  export let color = ''
  export let href = ''
  export let title = ''
  export let icon = null
  export let iconWidth = '24px'
  export let iconHeight = '24px'
  export let iconColor = ''
  export let filter = ''
  export let fontSize = ''
</script>

<a
  data-sveltekit-reload
  {href}
  style="--clr: {color}; --font-size: {fontSize}; --filter: {filter};"
  {...$$restProps}
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
    gap: 0.5rem;
    text-decoration: none;
    color: var(--clr);
    font-size: var(--font-size);
    white-space: nowrap;
    filter: var(--filter);
  }

  span {
    display: flex;
    align-items: center;
  }
</style>
