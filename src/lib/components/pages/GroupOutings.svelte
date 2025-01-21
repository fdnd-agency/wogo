<script>
  import { Hero2, BookingsForm } from '$lib/index';
  export let items
  export let success;
</script>

<svelte:head>
  <title></title>
</svelte:head>

  <Hero2 {items} />
  <BookingsForm {items} {success} />

<style></style>
