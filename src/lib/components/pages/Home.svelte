<script>
  export let items
</script>

{#each items[1].componentsCollection.items as item}
  <div class="container-card">
    <h2>{item.title}</h2>
    <a href="/home/{item.slug}">Koop een ticket!</a>
  </div>
{/each}

<svelte:head>
  <title></title>
</svelte:head>

<style>
  h2 {
    color: red;
  }
</style>
