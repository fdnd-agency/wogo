<script>
  import { TicketCard, Link, ArrowRight, Button } from "$lib";
  export let itemCollection;
</script>

<div class="carousel-title">
  <h2>Explore Cocktail Walks</h2>
  <Link
    href="/walks-overview"
    title="see all walks"
    size="m"
    fontSize="var(--fs-lg)"
    color="var(--accent2-tertiary)"
    icon={ArrowRight}
    iconColor="var(--txt-tertiary-clr)"
  />
</div>

<section class="cards-container">
  <TicketCard {itemCollection} />
</section>

<style>
  .carousel-title {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 3rem 2rem;
  }
  .carousel-title h2 {
    display: flex;
    padding-bottom: 0.5rem;
    color: var(--txt-tertiary-clr);
    text-transform: uppercase;
  }
  section {
    --arrow-size: 40px;
    width: 100%;
    position: relative;
    overflow: hidden;
  }

  .cards-container {
    /* gap: 8px;
    width: 100%;
    display: flex;
    margin: 0 0 0 2rem;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth; */
    width: 100%;
    max-width: 100vw;
    min-width: 300px;
    margin: 0 auto;
    margin-top: 2em;
    margin-bottom: 2em;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  .cards-container::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 55em) {
    .carousel-title {
      padding: 3rem 2rem;
    }
    .carousel-title h2 {
      font-size: var(--fs-xl);
    }
  }
</style>
