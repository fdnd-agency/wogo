<script>
  import { Image, RouteIcon, CocktailIcon } from '$lib/index'
  export let itemCollection
  const items = itemCollection.componentsCollection.items
  // console.log(items, 'test items')
</script>

{#each items as item}
  <a href="/">
    <article>
      <div>
        <h3>{item.title}</h3>
        <Image alt="Currywurst museum in Berlin" />
        <p></p>
      </div>

      <div class="content">
        <p>
          <span>
            <RouteIcon width="30" height="30" fill="var(--page-bg-color)" />
          </span>
        </p>
        <p>
          <span><CocktailIcon width="30" height="30" fill="var(--page-bg-color)" /></span>
        </p>
        <div class="btn-container"></div>
      </div>
    </article></a
  >
{/each}

<style>
  a {
    text-decoration: none;
    border-radius: var(--radius-lg);
  }

  article {
    min-width: 300px;
    max-width: 400px;
    width: calc((100vw - 350px) / 2 + 350px);
    position: relative;
    border-radius: 0.8rem;
    margin: 0;
    padding: 0;
    background-color: var(--accent2-quaternary);
  }

  div:first-of-type {
    position: relative;
  }

  h3 {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0;
    padding: 0.5rem 0rem;
    font-size: 2.5em;
    line-height: 1em;
    color: white;
  }

  /* geld */
  div:first-of-type p {
    position: absolute;
    left: 1em;
    top: 1em;
    line-height: 2em;
    margin: 0;
    padding: 0 0.5em;
    font-weight: bold;
    color: white;
    border-radius: 0.8rem;
    background-color: var(--accent2-primary);
  }

  p {
    display: flex;
    gap: 1rem;
    color: var(--page-bg-color);
  }

  div:last-of-type p {
    line-height: 1.75em;
  }

  .content {
    padding: 1rem;
  }

  /* icons voor de paragrafen */
  div:last-of-type p::before {
    float: left;
    font-size: 1.5em;
    margin: 0 0.125em 0 0;
  }

  .btn-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
