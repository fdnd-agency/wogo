<script>
  export let title = ''
</script>

<button type="button"
  >{title}
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M1 5h12m0 0L9 1m4 4L9 9"
    />
  </svg>
</button>

<style>
  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
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

  button svg {
    margin-left: 8px;
    width: 14px;
    height: 14px;
  }

  button:hover svg,
  button:focus svg {
    transform: translateX(4px);
    transition: transform 0.3s ease-out;
  }
</style>
