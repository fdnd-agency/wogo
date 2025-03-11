<script>
  import { BookingsInfo, BookingsForm } from '$lib/index';
  export let items
  export let success;
</script>

<svelte:head>
  <title></title>
</svelte:head>

  <BookingsInfo {items} />
  <BookingsForm {items} {success} />

<style></style>
