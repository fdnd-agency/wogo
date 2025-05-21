<script>
  import {
    RouteIcon,
    CocktailIcon,
    ArrowRightShort,
    IconLocationThin,
    BookIcon,
    Button,
  } from "$lib/index";
  export let itemCollection;
  const items = itemCollection.componentsCollection.items;
</script>

{#each items as item}
  <article class="ticket-card">
    <div class="card-header">
      <!-- <p>
        <span class="location-icon">
          <IconLocationThin
            width="13"
            height="13"
            fill="var(--txt-dark-clr)"
          /></span
        >
        {item.location}
      </p> -->
    
    </div>
    <img style="{`view-transition-name:${item.image.title.replace(/\s+/g, "-")}`}"
      src={item.image.url}
      alt={item.image.title}
      loading="lazy"
      width="450"
      height="321"
      title={item.image.title.replace(/\s+/g, "-")}
    />
    <h2 class="cardTitle">{item.title}</h2>
    <ul class="card-description">
      <li>
        <span
          ><RouteIcon
            width="20"
            height="20"
            fill="var(--page-bg-color)"
          /></span
        >
        {item.location}
      </li>
      <li>
        <span
          ><CocktailIcon
            width="20"
            height="20"
            fill="var(--page-bg-color)"
          /></span
        >
        {item.cocktailDescription}
      </li>
      <li>
          <p class="cocktail-price">{item.price}</p>
      </li>
    </ul>
    <div class="card-buttons">
      <Button
        variant="tertiary"
        title="Boek nu"
        icon={BookIcon}
        iconColor="var(--txt-quaternary-clr)"
        size="s"
      />
      <Button
        href="/home/{item.slug}"
        variant="secondary"
        title="Lees Meer"
        icon={ArrowRightShort}
        size="s"
      />
    </div>
  </article>
{/each}

<style>
  .card-header {
    display: flex;
    justify-content: space-between;
    /* padding: 0.5em; */
    & p {
      padding-top: 0.3em;
    }
  }

  

  .cocktail-price {
    font-weight: 600;
    padding: 0.6em;
  }

  article {
    display: block;
    width: 100%;
    max-width: 350px;
    border-radius: 8px;
    background-color: var(--txt-quaternary-clr);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    position: relative;
    flex-direction: column;
    & h2 {
      padding-left: 0.5em;
      padding-top: 0.5em;
      font-size: 20px;
      letter-spacing: 1px;
    }

    @media (min-width: 768px) {
      width: 80%;
      max-width: 350px;
    }
  }
  .cardTitle {
    color: var(--txt-quaternary-clr);
    /* bottom: 74px; */
    position: absolute;
    top: 18px;
    /* z-index: 2; */
    @media (min-width: 768px) {
      font-size: 27px;
   

    }
  }

  article img {
    position: relative;
    display: block;
    object-fit: cover;
    width: 350px;
    height: 250px;
    filter: brightness(0.8);
  
    @media (max-width: 768px) {
      max-width: 316px;
    }
  }

  .card-description {
    padding-left: 0.5em;
    & li {
      padding-top: 0.4em;
      list-style: none;
    }
    & p:first-child {
      padding-top: 0.3em;
    }
    & span {
      padding-left: 0.5em;
    }
  }

  .card-buttons {
    width: 100%;
    display: flex;
    flex-direction: column;
    transform: scale(0.9);
    margin: 1em 1.5em 1em 0;
    gap: 1em;
    @media (min-width: 768px) {
      flex-direction: unset;
      transform: none;
      margin: 1em 1.6em 1em 1.6em;
      padding-right: 15px;
      gap: 2em;
    }
  }
</style>
