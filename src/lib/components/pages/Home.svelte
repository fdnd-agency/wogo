<script>
  import { Hero, Reviews, TicketCarousel, HowItWorks, HeadLine, WhatWeDo, GiftCard } from '$lib/index'
  export let items
  export let itemCollection
</script>

<svelte:head>
  <title>{items[0].title}</title>
</svelte:head>

<Hero hero={items[0]} />
<TicketCarousel {itemCollection} />
<HeadLine title="How It Works" />
<HowItWorks cards={items[1].componentsCollection.items} />
<Reviews reviews={items[4].componentsCollection.items} />
<GiftCard items={items[3]} />