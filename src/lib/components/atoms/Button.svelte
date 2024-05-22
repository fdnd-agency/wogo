<script>
  export let title = ''
</script>

<button type="">{title} </button>

<style>
  button {
    display: inline-flex;
    align-items: center;
    width: fit-content;
    white-space: nowrap;
    height: 48px;
    gap: 0.5rem;
    background-color: var(--accent2-primary);
    color: var(--page-bg-color);
    padding: 0.625rem 1.25rem;
    font-size: 1rem;
    font-weight: 700;
    border-radius: 50px;
    border: none;
    cursor: pointer;
  }

  button:hover,
  button:focus {
    transform: scale(1.1);
    background-color: var(--accent2-tertiary);
  }
</style>
