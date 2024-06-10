<script>
  import { Hero, TicketCarousel, AnimationCard, HeadLine, WhatWeDo } from '$lib/index'
  export let items
  export let itemCollection
</script>

<svelte:head>
  <title>{items[0].title}</title>
</svelte:head>

<Hero {items} />
<TicketCarousel {itemCollection} />
<HeadLine title="How It Works" />
<AnimationCard {items} />
<HeadLine title="What We Do" />
<WhatWeDo {items} />

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
