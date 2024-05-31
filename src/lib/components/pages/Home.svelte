<script>
  import { Hero, TicketCarrousel, AnimationCard, TicketCard } from '$lib/index'
  export let items
  export let itemCollection
</script>

<svelte:head>
  <title>{items[0].title}</title>
</svelte:head>

<Hero {items} />

<TicketCarrousel {itemCollection} />

<AnimationCard {items} />
