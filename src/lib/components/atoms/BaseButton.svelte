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
  export let hoverBorder = ''
  export let focusBorder = ''
  export let hoverBoxShadow = ''
  export let focusBoxShadow = ''
  export let btnSize = 'default'
  export let iconWidth = ''
  export let IconHeight = ''
</script>

{#if href}
  <a
    class="btn"
    style="--bgc: {backgroundColor}; --clr: {color}; --border: {border}; --box-shadow: {boxShadow}; --hover-border: {hoverBorder}; --focus-border: {focusBorder}; --hover-box-shadow: {hoverBoxShadow}; --focus-box-shadow: {focusBoxShadow}; --btn-size: {btnSize}; --btn-disabled: {btnDisabled};"
    {href}
    aria-disabled={btnDisabled === 'true'}
    aria-label={ariaLabel}
  >
    {title}
    {#if icon}
      <span class="btn-icon">
        <svelte:component this={icon} class="btn-icon" width={iconWidth} height={IconHeight} />
      </span>
    {/if}
  </a>
{:else}
  <button
    class="btn"
    style="--bgc: {backgroundColor}; --clr: {color}; --border: {border}; --box-shadow: {boxShadow}; --hover-border: {hoverBorder}; --focus-border: {focusBorder}; --hover-box-shadow: {hoverBoxShadow}; --focus-box-shadow: {focusBoxShadow}; --btn-size: {btnSize}; --btn-disabled: {btnDisabled};"
    {type}
    aria-disabled={btnDisabled === 'true'}
    aria-label={ariaLabel}
    disabled={btnDisabled === 'true'}
    on:click
  >
    {title}
    {#if icon}
      <span class="btn-icon">
        <svelte:component this={icon} class="btn-icon" width={iconWidth} height={IconHeight} />
      </span>
    {/if}
  </button>
{/if}

<style>
  .btn {
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
    border-radius: 50em;
    text-align: center;
    text-decoration: none;
    letter-spacing: 1px;
    line-height: 1;
    outline: none;
    border: 0;
    transition:
      box-shadow 0.2s,
      transform 0.3s;
    background-color: var(--bgc);
    color: var(--clr);
    border: var(--border);
    font-size: calc(var(--scale, 1) * 1rem);
    padding: var(--btn-padding, 0.5em 1.25em);
    box-shadow: var(--box-shadow, 0px 2px 3px 0px rgba(0, 0, 0, 0.25));
    font-weight: 700;
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

  .btn:hover {
    border: var(--hover-border);
    box-shadow: var(--hover-box-shadow);
  }

  .btn:focus {
    border: var(--focus-border);
    box-shadow: var(--focus-box-shadow);
  }

  .btn[style*='--btn-size: xs;'] {
    --scale: 0.75;
    --btn-padding: 0.25em 0.75em;
  }

  .btn[style*='--btn-size: sm;'] {
    --scale: 0.875;
    --btn-padding: 0.375em 1em;
  }

  .btn[style*='--btn-size: lg;'] {
    --scale: 1.25;
    --btn-padding: 0.75em 1.5em;
  }

  .btn[style*='--btn-size: xl;'] {
    --scale: 1.5;
    --btn-padding: 1em 2em;
  }
</style>
