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
</style>
