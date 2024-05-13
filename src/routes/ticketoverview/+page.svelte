<script>
  import { Card, Dropdown } from '$lib/index'
  let listItemsGiftcards = ['Redeem', 'Buy a giftcard']
  let listItemsVenues = ['Amsterdam', 'Utrecht', 'London']
  export let data
  console.log(data.cards)
</script>

<section class="top-title">
  <h1>Tickets</h1>
  <section class="top-title-giftcard-dropdown">
    <Dropdown title="Giftcards" items={listItemsGiftcards} />
  </section>
</section>
<section class="top-filter">
  <Dropdown title="venues" items={listItemsVenues} />
</section>
<section class="tickets">
  {#each data.cardsItems as card}
    <Card
      price={card.price}
      title={card.title}
      url={card.icon.url}
      locationDescription={card.locationDescription}
      buttonText={card.buttonText}
    />
  {/each}
</section>

<style>
  .top-title {
    display: flex;
    justify-content: space-between;
    padding: 10vh 1.5rem 1rem 1.5rem;
  }

  .top-title h1 {
    color: #fff;
    font-size: 3.375rem;
  }

  .top-filter {
    padding: 1rem 1.5rem;
  }

  .tickets {
    min-height: 100vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30em, 1fr));
    grid-gap: 2rem;
    padding: 1rem 1.5rem;
  }
</style>
