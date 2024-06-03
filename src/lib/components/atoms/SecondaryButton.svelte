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
  {disabled}
  {href}
  {title}
  {ariaLabel}
  {size}
  border-radius="var(--btn-radius)"
  color="var(--txt-primary-clr)"
  border="1.5px solid var(--btn-primary-bg)"
  boxShadow="var(--btn-shadow)"
/>
