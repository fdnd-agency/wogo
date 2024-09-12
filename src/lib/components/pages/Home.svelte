<script>
  import { Hero, TicketCarousel, HowItWorks, HeadLine, WhatWeDo, GiftCard } from '$lib/index'
  export let items
  export let itemCollection
</script>

<svelte:head>
  <title>{items[0].title}</title>
</svelte:head>

<Hero {items} />
<TicketCarousel {itemCollection} />
<HeadLine title="How It Works" />
<HowItWorks {items} />
<HeadLine title="What We Do" />
<WhatWeDo {items} />
<GiftCard items={items[3]} />
