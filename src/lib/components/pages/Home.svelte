<script>
  import { Hero, TicketCarousel, AnimationCard, HeadLine } from '$lib/index'
  export let items
  export let itemCollection
</script>

<svelte:head>
  <title>{items[0].title}</title>
</svelte:head>

<Hero {items} />
<div>
  <h2>Cocktail Walk Tickets</h2>
  <a href="/" aria-label="">see all walks</a>
</div>
<TicketCarousel {itemCollection} />
<HeadLine title="How It Works" />
<AnimationCard {items} />
<HeadLine title="What We Do" />

<style>
  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem;
    color: red;
  }
</style>
