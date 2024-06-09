<script>
  import { Image, RouteIcon, CocktailIcon, PrimaryButton, SecondaryButton } from '$lib/index'
  export let itemCollection
  const items = itemCollection.componentsCollection.items
</script>

{#each items as item}
  <a href="/">
    <article>
      <div>
        <h3>{item.title}</h3>
        <Image src={item.image.url} alt={item.image.title} />
        <p>{item.price}</p>
      </div>
      <div class="content">
        <p>
          <span>
            <RouteIcon width="25" height="25" fill="var(--page-bg-color)" />
          </span>
          {item.location}
        </p>
        <p>
          <span><CocktailIcon width="25" height="25" fill="var(--page-bg-color)" /></span>
          {item.cocktailDescription}
        </p>
        <div class="btn-container">
          <PrimaryButton title="Book Now" type="button" size="lg" />
          <SecondaryButton title="Read More" href="/home/{item.slug}" size="lg" />
        </div>
      </div>
    </article>
  </a>
{/each}

<style>
  a {
    text-decoration: none;
  }

  article {
    overflow: hidden;
    min-width: 300px;
    max-width: 400px;
    width: calc((100vw - 350px) / 2 + 350px);
    position: relative;
    border-radius: var(--radius-lg);
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
    padding: 0.5rem 0.4rem;
    font-size: 2em;
    line-height: 1em;
    color: var(--txt-quaternary-clr);
  }

  div:first-of-type p {
    position: absolute;
    left: 1em;
    top: 1em;
    margin: 0;
    padding: 0.2rem 0.5rem;
    font-weight: bold;
    border-radius: var(--radius-lg);
    color: var(--txt-quaternary-clr);
    background-color: var(--accent2-primary);
  }

  p {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.5em;
    color: var(--txt-dark-clr);
  }

  .content {
    padding: 1rem;
  }

  .btn-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;
  }
</style>
