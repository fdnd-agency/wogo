<script lang="ts">
  export let href: string = ''
  export let title: string = ''
</script>

<a {href} target="_self">{title}</a>

<style>
  a {
    text-decoration: none;
    color: var(--accent2-primary);
  }
</style>
