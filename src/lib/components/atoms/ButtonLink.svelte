<script>
  export let href = ''
  export let title = ''
</script>

<a {href}
  >{title}
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M1 5h12m0 0L9 1m4 4L9 9"
    />
  </svg></a
>

<style>
  a {
    display: inline;
    vertical-align: middle;
    align-items: center;
    justify-content: center;
    background-color: var(--accent2-primary);
    color: var(--page-bg-color);
    margin-left: 8px;
    padding: 0.625rem 1.25rem;
    font-size: 1rem;
    font-weight: 700;
    text-decoration: none;
    border-radius: 50px;
    border: none;
    cursor: pointer;
  }

  a:hover,
  a:focus {
    transform: scale(1.1);
    background-color: var(--accent2-tertiary);
  }

  a svg {
    margin-left: 8px;
    width: 14px;
    height: 14px;
  }

  a:hover svg,
  a:focus svg {
    transform: translateX(4px);
    transition: transform 0.3s ease-out;
  }
</style>
