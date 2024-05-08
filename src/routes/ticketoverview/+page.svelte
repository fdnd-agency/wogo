<script>
  import { Card, Dropdown } from '$lib/index'
  let listItemsGiftcards = ['Redeem', 'Buy a giftcard']
  let listItemsVenues = ['Amsterdam', 'Utrecht', 'London']
  export let data
  console.log(data)
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
  <Card
    price="25,95"
    title="COCKTAIL WALK KINGSDAY"
    url="/ticketoverview"
    locationDescription="Amsterdam"
    buttonText="Info"
  />

  <Card
    price="25,95"
    title="COCKTAIL WALK KINGSNIGHT"
    url="/ticketoverview"
    locationDescription="Amsterdam"
    buttonText="Info"
  />

  <Card
    price="25,95"
    title="REGULIERE COCKTAILWANDELING"
    url="/ticketoverview"
    locationDescription="Amsterdam"
    buttonText="Info"
  />

  <Card
    price="25,95"
    title="PREMIUM COCKTAILWANDELING"
    url="/ticketoverview"
    locationDescription="Amsterdam"
    buttonText="Info"
  />

  <Card
    price="25,95"
    title="BOLSEXPERIENCE COCKTAILWANDELING"
    url="/ticketoverview"
    locationDescription="Amsterdam"
    buttonText="Info"
  />
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
