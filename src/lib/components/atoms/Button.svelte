<script>
  export let variant = "";
  export let size = "";
  export let href = "";
  export let title = "";
  export let icon = "";
  export let iconColor = "";
</script>

{#if href}
  <a
    {href}
    data-sveltekit-preload-data
    class="btn btn-{variant} btn-{size}"
    {...$$restProps}
  >
    {title}
    {#if icon}
      <span class="btn-icon">
        <svelte:component this={icon} svgColor={iconColor} {...$$restProps} />
      </span>
    {/if}
    <slot></slot>
  </a>
{:else}
  <button class="btn btn-{variant} btn-{size}" {...$$restProps} on:click>
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
    padding: 0.7em 0.5em 0.7em 0.5em;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    text-align: center;
    border-radius: 0.4em;
    line-height: var(--lh-1);
    text-decoration: none;
    gap: 0.5rem;
    color: var(--accent2-primary);
    border: var(--accent2-primary);
    font-size: 14px;
    box-shadow: var(--box-shadow);
    cursor: pointer;
    transition:
      box-shadow 0.2s,
      transform 0.3s;
    &:hover,
    :focus {
      box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.25);
      transform: scale(1.1);
      & .btn-icon {
        transform: translateX(5px);
      }
    }
    &:focus {
      border: 2px solid var(--accent2-primary);
    }
  }

  .btn-primary {
    scale: 1.25;
    padding: 0.75em 1.5em;
    margin-left: 1em;
    border-radius: var(--btn-radius);
    background-color: var(--btn-primary-bg);
    color: var(--btn-primary-text-clr);
    box-shadow: var(--btn-shadow);
    border: 2px solid var(--btn-primary-bg);
    font-weight: 700;
    position: relative;
    z-index: 2;
  }

  .btn-secondary {
    border-radius: 0.4em;
    font-weight: 500;
    color: var(--page-bg-color);
    border: 1.5px solid var(--page-bg-color);
    @media (min-width: 768px) {
      padding: 0.7em 1.5em 0.7em 1.5em;
    }
  }

  .btn-tertiary {
    background: var(--page-bg-color);
    color: var(--accent2-quaternary);
    justify-content: center;
    @media (min-width: 768px) {
      padding: 0.7em 1.5em 0.7em 1.5em;
    }
  }

  .btn-quaternary {
    display: flex;
    border: 2px solid var(--accent2-primary);
  }

  .btn-icon {
    display: flex;
    align-items: center;
    width: 14px;
    height: 14px;
    transition: transform 0.3s ease;
  }
</style>
