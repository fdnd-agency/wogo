<script>
  import { Hero, TicketCarrousel, AnimationCard, HeadLine } from '$lib/index'
  export let items
  export let itemCollection
</script>

<svelte:head>
  <title>{items[0].title}</title>
</svelte:head>

<Hero {items} />
<TicketCarrousel {itemCollection} />
<HeadLine title="How It Works" />
<AnimationCard {items} />
<HeadLine title="What We Do" />
