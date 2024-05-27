<script>
  import { Card } from '$lib/index'
  export let items
</script>

{#each items[1].itemsCollection.items as item}
  <div class="container-card">
    <h2>{item.title}</h2>
    <a href="/tickets/{item.slug}">Koop een ticket!</a>
  </div>
{/each}

<!-- <Card />
<a href="/tickets/regulair">Regulair ticket</a> -->

<svelte:head>
  <title></title>
</svelte:head>

<style>
  h2 {
    color: red;
  }
</style>
