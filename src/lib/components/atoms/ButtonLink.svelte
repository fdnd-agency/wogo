<script>
  import { SvgArrowRight } from '$lib/index.js'
  export let href = ''
  export let title = ''
</script>

<a {href} style="margin-right: 8px;"
  >{title}
  <SvgArrowRight width="20px" height="20px" />
</a>

<style>
  /* a {
    width: fit-content;
    height: 48px;
    padding: 12px 20px;
    gap: 12px;
    color: rgb(255, 255, 255);
    background-color: transparent;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    outline: none;
    border-radius: 24px;
  } */
  a {
    display: inline-flex;
    vertical-align: middle;
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
    text-decoration: none;
    border-radius: 24px;
    border: none;
    cursor: pointer;
  }

  a:hover,
  a:focus {
    transform: scale(1.1);
    background-color: var(--accent2-tertiary);
  }

  a:hover :global(.svg-arrow-right),
  a:focus :global(.svg-arrow-right) {
    transform: translateX(4px);
    transition: transform 0.3s ease-out;
  }
</style>
