<script>
  import { BaseButton } from '$lib/index'
  export let disabled = ''
  export let type = ''
  export let title = ''
  export let size = ''
  export let href = ''
  export let ariaLabel = ''
</script>

<BaseButton {type} {size} {disabled} {href} {title} variant="secondary" {ariaLabel} on:click />
