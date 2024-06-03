<script>
  import { BaseButton } from '$lib/index'
  export let disabled = ''
  export let type = ''
  export let title = ''
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
  {ariaLabel}
  backgroundColor="var(--btn-secondary-bg)"
  color="var(--tex-mid-color)"
  border="1.5px solid var(--btn-primary-bg)"
  hoverBorder="1.5px solid var(--btn-secondary-border)"
  focusBorder="1.5px solid var(--btn-secondary-border)"
  focusBtnColor
  boxShadow="none"
  hoverBoxShadow="0 0 rgba(0, 0, 0, 0)"
  focusBoxShadow="0 0 rgba(0, 0, 0, 0)"
/>
