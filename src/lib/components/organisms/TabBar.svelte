<!-- <script>
  import { Image } from '$lib/index'
  export let tabBarItems
</script>

<nav>
  {#each tabBarItems[0].tabBarItemsCollection.items as item}
    {#if item.url}
      <a href={item.url} aria-label={item.icon.mediaCollection.items[0].title}
        ><Image
          src={item.icon.mediaCollection.items[0].url}
          alt={item.icon.mediaCollection?.items[0].description}
          width="40"
          height="40"
        />{item.title}</a
      >
    {:else}
      <button type="button" aria-label={item.icon.mediaCollection?.items[0].title}
        ><Image
          src={item.icon.mediaCollection?.items[0].url}
          alt={item.icon.mediaCollection?.items[0].description}
          width="40"
          height="40"
        />{item.title}</button
      >
    {/if}
  {/each}
</nav>

<style>
  nav {
    display: flex;
    justify-content: space-around;
    gap: 1em;
    padding: 1rem;
    background-color: var(--accent1-tertiary);
    color: var(--accent2-tertiary);
  }

  a,
  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    gap: 1rem;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    background: none;
    color: inherit;
    border: none;
  }

  @media (min-width: 48em) {
    nav {
      display: none;
    }
  }
</style> -->
