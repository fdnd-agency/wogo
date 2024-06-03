<script>
  import { Hero, TicketCarrousel, AnimationCard, TicketCard } from '$lib/index'
  export let items
  export let itemCollection
</script>

{#each items[1].componentsCollection.items as item}
  <div class="container-card">
    <h2>{item.title}</h2>
    <a href="/home/{item.slug}">Koop een ticket!</a>
  </div>
{/each}

<svelte:head>
  <title>{items[0].title}</title>
</svelte:head>

<Hero {items} />

<TicketCarrousel {itemCollection} />

<AnimationCard {items} />
