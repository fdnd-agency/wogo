<script>
  import { BaseButton } from '$lib/index'
  export let disabled = ''
  export let type = ''
  export let title = ''
  export let size = ''
  export let href = ''
  export let ariaLabel = ''
  export let icon = ''
  export let iconWidth = '24px'
  export let iconHeight = '24px'
</script>

<BaseButton
  {type}
  {disabled}
  {href}
  {title}
  {icon}
  {iconWidth}
  {iconHeight}
  {ariaLabel}
  {size}
  iconColor="var(--accent2-primary)"
  border-radius="var(--btn-radius)"
  color="var(--txt-primary-clr)"
  border="1.5px solid var(--btn-primary-bg)"
>
  <slot />
</BaseButton>
