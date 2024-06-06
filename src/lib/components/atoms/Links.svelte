<script>
  import { BaseButton } from '$lib/index'
  export let disabled = ''
  export let title = ''
  export let href = ''
  export let ariaLabel = ''
  export let color = ''
  export let size = ''
</script>

<BaseButton {disabled} {href} {title} {ariaLabel} {color} {size}>
  <slot></slot>
</BaseButton>
