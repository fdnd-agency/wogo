<script>
  export let className = ''
  export let styles = ''
  export let size = 'default'
  export let type = 'button'
  export let href = undefined
  export let disabled = false
  export let backgroundColor = ''
  export let color = ''
  export let icon = ''
  export let title = ''
  export let variant = ''
  export let onHover = 'false'
  export let ariaLabel = ''

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  $: className = classNames(
    styles,
    'btn',
    `btn-${size}`,
    `btn-${variant}`,
    disabled ? 'disabled' : ''
  )
</script>

{#if href}
  <a
    style="--bgc: {backgroundColor}; --clr: {color}"
    {href}
    class={className}
    {disabled}
    {onHover}
    {ariaLabel}
  >
    {title}
    {#if icon}
      <span class="btn-icon"
        ><svelte:component this={icon} class="btn-icon" width="24px" height="24px" /></span
      >
    {/if}
  </a>
{:else}
  <button
    style="--bgc: {backgroundColor}; --clr: {color};"
    {type}
    class={className}
    {disabled}
    {onHover}
    {ariaLabel}
    on:click
  >
    {title}
    {#if icon}
      <span class="btn-icon"
        ><svelte:component this={icon} class="btn-icon" width="24px" height="24px" /></span
      >
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
    outline: none;
    border: 0;
    transition: box-shadow 0.2s;
    background-color: var(--bgc);
    color: var(--clr);
    font-size: calc(var(--scale, 1) * 1rem);
    padding: 0.5em 1.25em;
  }

  .btn-icon {
    display: flex;
    align-items: center;
    transition: transform 0.3s ease;
  }

  .btn:hover .btn-icon {
    transform: translateX(5px);
  }

  .btn:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  .btn:focus {
    transform: scale(1.1);
  }

  .btn-xs {
    --scale: var(--btn-scale-xs);
  }
  .btn-sm {
    --scale: var(--btn-scale-sm);
  }
  .btn-lg {
    --scale: var(--btn-scale-lg);
  }
  .btn-xl {
    --scale: var(--btn-scale-xl);
  }
  /*button variants*/
  .btn-primary {
    background-color: var(--btn-primary-bg);
    --primary-text-clr: hsl(20, 31%, 10%);
    color: var(--btn-primary-text-clr);
    font-weight: 600;
    line-height: 1;
    transition: 0.3s;
    box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.25);
  }

  .btn-primary:is(:hover, :focus) {
    border: 1.5px solid var(--btn-primary-bg);
    box-shadow: 0 0 rgba(0, 0, 0, 0);
  }

  .btn-secondary {
    background: transparent;
    border: 1.5px solid var(--btn-primary-bg);
  }

  .btn-secondary:is(:hover, :focus) {
    background: var(--btn-secondary-bg);
    color: hsl(20, 31%, 10%);
    border-color: var(--btn-secondary-border);
    box-shadow: 0 0 rgba(0, 0, 0, 0);
  }
</style>
