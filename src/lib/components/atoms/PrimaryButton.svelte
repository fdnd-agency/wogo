<script>
  import { BaseButton } from '$lib/index'
  export let disabled = ''
  export let type = ''
  export let title = 'button'
  export let icon = ''
  export let size = ''
  export let ariaLabel = ''
  export let iconWidth = '24px'
  export let iconHeight = '24px'
</script>

<BaseButton
  {type}
  {title}
  {disabled}
  {ariaLabel}
  {icon}
  {iconWidth}
  {iconHeight}
  {size}
  border-radius="var(--btn-radius)"
  backgroundColor="var(--btn-primary-bg)"
  color="var(--btn-primary-text-clr)"
  boxShadow="var(--btn-shadow)"
  on:click
/>
