<script>
  import { SvgArrowRight } from '$lib/index.js'
  export let title = ''
</script>

<button type=""
  >{title}
  <SvgArrowRight width="24px" height="24px" />
</button>

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

  button:hover :global(.svg-arrow-right),
  button:focus :global(.svg-arrow-right) {
    transform: translateX(4px);
    transition: transform 0.3s ease-out;
  }
</style>
