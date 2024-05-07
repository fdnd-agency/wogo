<script>
  import { Card } from '$lib/index'
</script>

<section class="top-title">
  <h1>Tickets</h1>
  <section class="top-title-giftcard-dropdown">
    <h2>Giftcards</h2>
    <li>
      <ul>Redeem a giftcard</ul>
      <ul>Buy a giftcard</ul>
    </li>
  </section>
</section>
<section class="top-filter"></section>
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
    padding-top: 10vh;
    display: flex;
    justify-content: space-between;
    padding: 1rem 1.5rem;
  }

  .top-title-giftcard-dropdown li {
    display: none;
    background-color: var(--accent2-primary);
    margin-right: 1.5rem;
    position: absolute;
    z-index: 1;
  }

  .top-title-giftcard-dropdown:hover li {
    display: block;
  }

  .top-title h1 {
    color: #fff;
    font-size: 3.375rem;
  }

  .top-title h2 {
    color: var(--accent2-primary);
    text-decoration: underline;
  }

  .tickets {
    min-height: 100vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30em, 1fr));
    grid-gap: 2rem;
    padding: 1rem 1.5rem;
  }
</style>
