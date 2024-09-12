<script>
  import { Image, RouteIcon, CocktailIcon, Button } from '$lib/index'
  export let itemCollection
  const items = itemCollection.componentsCollection.items
</script>

{#each items as item}
  <article class="ticket-card">
    <div>
      <h3>{item.title}</h3>
      <Image
        src={item.image.url}
        alt={item.image.title}
        brdRadius="var(--radius-lg)"
        opacity="0.6"
        loading="lazy"
      />
      <p>{item.price}</p>
    </div>

    <div>
      <p>
        <span><RouteIcon width="25" height="25" fill="var(--page-bg-color)" /></span>
        {item.location}
      </p>

      <p>
        <span><CocktailIcon width="25" height="25" fill="var(--page-bg-color)" /></span>
        {item.cocktailDescription}
      </p>

      <div>
        <Button type="button" variant="primary" title="Book Now" size="m" />
        <Button href="/home/{item.slug}" variant="secondary" title="Read More" size="m" />
      </div>
    </div>
  </article>
{/each}

<style>
  article {
    min-width: 320px;
    height: 400px;
    border-radius: var(--radius-lg);
    background-color: var(--accent2-quaternary);
    scroll-snap-align: start;
    scroll-snap-align: center;
  }

  div:nth-of-type(1) {
    position: relative;
    background: linear-gradient(137deg, rgba(206, 101, 56, 1) 0%, rgba(32, 22, 17, 1) 0%);
  }

  div:nth-of-type(2) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1em;
  }

  h3 {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0;
    padding: 0.5rem 0.4rem;
    font-size: var(--fs-md);
    line-height: 1em;
    color: var(--txt-quaternary-clr);
    z-index: 1;
  }

  div:first-of-type p {
    position: absolute;
    left: 1em;
    top: 1em;
    padding: 0.5rem;
    font-weight: 600;
    border-radius: var(--radius-lg);
    color: var(--btn-primary-text-clr);
    background-color: var(--btn-secondary-bg);
  }
  p {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: var(--fs-md);
    color: var(--txt-dark-clr);
  }

  div:nth-of-type(2) > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: none;
    gap: 0.2em;
    padding: 0.9rem 0;
  }

  @media screen and (min-width: 48em) {
    article {
      min-width: 500px;
      height: 550px;
    }

    div:nth-of-type(2) {
      padding: 1em 2em;
    }

    h3 {
      font-size: var(--fs-xl);
    }

    p {
      font-size: var(--fs-lg);
    }
  }
</style>
