<script>
  export let type
  export let variant = ''
  export let size = ''
  export let href = ''
  export let title = ''
  export let icon = ''
  export let iconColor = ''
</script>

{#if href}
  <a {href} data-sveltekit-preload-data class="btn btn-{variant} btn-{size}" {...$$restProps}>
    {title}
    {#if icon}
      <span class="btn-icon">
        <svelte:component this={icon} svgColor={iconColor} {...$$restProps} />
      </span>
    {/if}
    <slot></slot>
  </a>
{:else}
  <button {type} class="btn btn-{variant} btn-{size}" {...$$restProps} on:click>
    {title}
    {#if icon}
      <span class="btn-icon">
        <svelte:component this={icon} svgColor={iconColor} {...$$restProps} />
      </span>
    {/if}
    <slot></slot>
  </button>
{/if}

<style>
  .btn {
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    justify-content: center;
    text-align: center;
    letter-spacing: 1px;
    line-height: var(--lh-1);
    font-weight: 700;
    text-decoration: none;
    gap: 0.5rem;
    border: 0;
    background-color: var(--bgc);
    color: var(--clr);
    border: var(--border);
    padding: var(--btn-padding);
    font-size: calc(var(--scale, 1) * 1rem);
    box-shadow: var(--box-shadow);
    cursor: pointer;
    transition:
      box-shadow 0.2s,
      transform 0.3s;
  }

  .btn-primary {
    border-radius: var(--btn-radius);
    background-color: var(--btn-primary-bg);
    color: var(--btn-primary-text-clr);
    box-shadow: var(--btn-shadow);
    border: 2px solid var(--btn-primary-bg);
  }

  .btn-secondary {
    border-radius: var(--btn-radius);
    color: var(--txt-primary-clr);
    border: 2px solid var(--btn-primary-bg);
  }

  .btn-secondary,
  .btn-primary {
    transition:
      box-shadow 0.2s,
      transform 0.3s;
  }

  .btn-secondary:hover,
  .btn-secondary:focus,
  .btn-primary:hover,
  .btn-primary:focus {
    box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.25);
    transform: scale(1.1);
  }

  .btn-icon {
    display: flex;
    align-items: center;
    width: 24px;
    height: 24px;
    transition: transform 0.3s ease;
  }

  .btn:hover .btn-icon,
  .btn:focus .btn-icon {
    transform: translateX(5px);
  }

  .btn-xs {
    --scale: 0.75;
    --btn-padding: 0.25em 0.75em;
  }

  .btn-sm {
    --scale: 0.875;
    --btn-padding: 0.375em 1em;
  }

  .btn-m {
    --scale: 0.975;
    --btn-padding: 0.8em 1em;
  }

  .btn-lg {
    --scale: 1.25;
    --btn-padding: 0.75em 1.5em;
  }

  .btn-xl {
    --scale: 1.5;
    --btn-padding: 1em 2em;
  }

  @media (min-width: 48em) {
    .btn-m {
      --scale: 1.5;
      --btn-padding: 0.8em 1.4em;
    }
  }
</style>
