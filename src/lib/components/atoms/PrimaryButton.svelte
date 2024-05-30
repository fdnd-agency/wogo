<script>
  import { BaseButton, ArrowRight } from '$lib/index'
  export let disabled = ''
  export let type = ''
  export let title = 'button'
  export let href = ''
  export let icon = ''
  export let size = ''
  export let ariaLabel = ''
  export let iconWidth = ''
  export let iconHeight = ''
</script>

<BaseButton
  {type}
  {href}
  {title}
  {disabled}
  {ariaLabel}
  {icon}
  {iconWidth}
  {iconHeight}
  btnSize={size}
  backgroundColor="var(--btn-primary-bg)"
  color="var(--btn-primary-text-clr)"
  hoverBorder="1.5px solid var(--btn-primary-bg)"
  focusBorder="1.5px solid var(--btn-primary-bg)"
  boxShadow="0px 2px 3px 0px rgba(0, 0, 0, 0.25)"
  hoverBoxShadow="0 0 rgba(0, 0, 0, 0)"
  focusBoxShadow="0 0 rgba(0, 0, 0, 0)"
  on:click
/>
