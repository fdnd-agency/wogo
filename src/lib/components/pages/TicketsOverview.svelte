<script>
  export let items
  console.log(items[0].title)
</script>

<h1>{items[0].title}</h1>

<!-- {#each items[1].componentsCollection.items as item}
  <div class="container-card">
    <h2>{item.title}</h2>
    <a href="/tickets/{item.slug}">Koop een ticket!</a>
  </div>
{/each} -->

<svelte:head>
  <title></title>
</svelte:head>

<style>
  h1 {
    color: red;
  }
</style>
