<script>
  // HTML props
  export let type = 'button'
  export let href = ''
  export let icon = ''
  export let title = ''
  export let ariaLabel = ''
  export let btnDisabled = 'false'

  // Styling props
  export let backgroundColor = ''
  export let color = ''
  export let border = ''
  export let boxShadow = ''
  export let size = 'default'
  export let iconWidth = ''
  export let iconHeight = ''
  export let iconColor = ''
</script>

{#if href}
  <a
    data-sveltekit-preload-data
    class="btn"
    style="--bgc: {backgroundColor}; --clr: {color}; --border: {border}; --box-shadow: {boxShadow};  --btn-size: {size}; --btn-disabled: {btnDisabled};"
    {href}
    aria-disabled={btnDisabled === 'true'}
    aria-label={ariaLabel}
  >
    {title}
    {#if icon}
      <span class="btn-icon">
        <svelte:component this={icon} class="btn-icon" width={iconWidth} height={iconHeight} />
      </span>
    {/if}
    <slot></slot>
  </a>
{:else}
  <button
    class="btn"
    style="--bgc: {backgroundColor}; --clr: {color}; --border: {border};  --btn-size: {size}; --btn-disabled: {btnDisabled}; svgColor={iconColor}  "
    {type}
    aria-disabled={btnDisabled === 'true'}
    aria-label={ariaLabel}
    disabled={btnDisabled === 'true'}
    on:click
  >
    {title}
    {#if icon}
      <span class="btn-icon">
        <svelte:component
          this={icon}
          class="btn-icon"
          width={iconWidth}
          height={iconHeight}
          svgColor={iconColor}
        />
      </span>
    {/if}
    <slot></slot>
  </button>
{/if}

<style>
  .btn {
    --btn-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.25);

    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    justify-content: center;
    gap: 0.5rem;
    border-radius: 50em;
    text-align: center;
    letter-spacing: 1px;
    line-height: var(--lh-1);
    font-weight: 700;
    text-decoration: none;
    border: 0;
    background-color: var(--bgc);
    color: var(--clr);
    border: var(--border);
    font-size: calc(var(--scale, 1) * 1rem);
    padding: var(--btn-padding);
    box-shadow: var(--box-shadow);
    cursor: pointer;
    transition:
      box-shadow 0.2s,
      transform 0.3s;
  }

  .btn-icon {
    display: flex;
    align-items: center;
    transition: transform 0.3s ease;
  }

  .btn:hover .btn-icon {
    transform: translateX(5px);
  }

  .btn:disabled,
  .btn[aria-disabled='true'] {
    cursor: not-allowed;
    opacity: 0.5;
  }

  .btn[style*='--btn-size: xs;'] {
    --scale: 0.75;
    --btn-padding: 0.25em 0.75em;
  }

  .btn[style*='--btn-size: sm;'] {
    --scale: 0.875;
    --btn-padding: 0.375em 1em;
  }

  .btn[style*='--btn-size: m;'] {
    --scale: 0.975;
    --btn-padding: 0.8em 1em;
  }

  .btn[style*='--btn-size: lg;'] {
    --scale: 1.25;
    --btn-padding: 0.75em 1.5em;
  }

  .btn[style*='--btn-size: xl;'] {
    --scale: 1.5;
    --btn-padding: 1em 2em;
  }

  @media (min-width: 48em) {
    .btn[style*='--btn-size: m;'] {
      --scale: 1.5;
      --btn-padding: 0.8em 1.4em;
    }
  }
</style>
