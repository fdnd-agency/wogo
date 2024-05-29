<script>
  import { BaseButton, ArrowRight } from '$lib/index'
  export let disabled = ''
  export let type = ''
  export let title = 'button'
  export let size = ''
  export let href = ''
  export let ariaLabel = ''
</script>

<BaseButton
  {type}
  {size}
  {disabled}
  {href}
  {title}
  variant="primary"
  icon={ArrowRight}
  {ariaLabel}
  on:click
/>
