<script>
  // HTML props
  export let ariaLabel = ''
  export let href = ''
  export let target = ''
  export let title = ''

  // Styling props
  export let filter = ''
  export let fontSize = ''
  export let backgroundColor = ''
  export let color = ''
  export let border = ''
  export let boxShadow = ''
  export let hoverBorder = ''
  export let focusBorder = ''
  export let hoverBoxShadow = ''
  export let focusBoxShadow = ''
  export let icon = ''
  export let iconWidth = ''
  export let IconHeight = ''
</script>

<a
  class="btn"
  style="--bgc: {backgroundColor}; --clr: {color}; --border: {border}; --box-shadow: {boxShadow}; --hover-border: {hoverBorder}; --focus-border: {focusBorder}; --hover-box-shadow: {hoverBoxShadow}; --focus-box-shadow: {focusBoxShadow}; --font-size: {fontSize}; --filter{filter}"
  {href}
  {target}
  aria-label={ariaLabel}
>
  {title}
  {#if icon}
    <span class="btn-icon">
      <svelte:component this={icon} class="btn-icon" width={iconWidth} height={IconHeight} />
    </span>
  {/if}
</a>

<style>
  a {
    line-height: 1.4;
    text-decoration: none;
    background-color: var(--bgc);
    color: var(--clr);
    border: var(--border);
    font-size: var(--font-size);
    box-shadow: var(--box-shadow);
    filter: (--filter);
  }

  a:hover {
    border: var(--hover-border);
    box-shadow: var(--hover-box-shadow);
  }

  a:focus {
    border: var(--focus-border);
    box-shadow: var(--focus-box-shadow);
  }

  .btn-icon {
    display: flex;
    align-items: center;
    transition: transform 0.3s ease;
  }
</style>
