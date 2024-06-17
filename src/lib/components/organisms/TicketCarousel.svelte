<script>
  import { TicketCard, Link, ArrowRightShort, ArrowLeftShort, ArrowRight, Button } from '$lib'
  import { onMount } from 'svelte'
  export let itemCollection

  let activeInd = 0

  function scrollLeftOrRight(direction) {
    const carouselElement = document.querySelector('.card-container')
    const cardElement = document.querySelector('.ticket-card')
    const offsetWidth = activeInd >= 3 ? carouselElement.offsetWidth : cardElement.offsetWidth
    const scrollXBy = direction === 'left' ? -300 : 300
    const scrollWidth = carouselElement.scrollWidth
    const scrollLeft = carouselElement.scrollLeft

    if (direction === 'left' && scrollLeft === 0) {
      carouselElement.scrollTo({
        left: activeInd === 0 ? scrollWidth - carouselElement.offsetWidth : scrollXBy,
        behavior: 'smooth',
      })
    } else if (direction === 'right' && Math.abs(scrollWidth - (scrollLeft + offsetWidth)) <= 1) {
      carouselElement.scrollTo({
        left: 0,
        behavior: 'smooth',
      })
    } else {
      carouselElement.scrollBy({
        left: scrollXBy,
        behavior: 'smooth',
      })
    }
    updateActiveIndicator(direction)
    updateIndicators()
  }

  function updateActiveIndicator(direction) {
    if (direction === 'right') {
      activeInd = activeInd >= 3 ? 0 : activeInd + 1
    } else {
      activeInd = activeInd === 0 ? 3 : activeInd - 1
    }
  }

  function scrollToSlide(index) {
    activeInd = index
    const carouselElement = document.querySelector('.card-container')
    const offsetWidth = carouselElement.offsetWidth
    carouselElement.scrollTo({
      left: offsetWidth * index,
      behavior: 'smooth',
    })

    updateIndicators()
  }

  function updateIndicators() {
    const indicators = document.querySelectorAll('.carousel-indicator')
    indicators.forEach((indicator, index) => {
      if (index === activeInd) {
        indicator.classList.add('active')
      } else {
        indicator.classList.remove('active')
      }
    })
  }

  onMount(() => {
    // Zorg ervoor dat de knoppen en indicatoren zichtbaar zijn als de browser JS heeft ingeschakeld
    const carouselElements = document.querySelectorAll('.carousel-arrow, .carousel-indicator')
    carouselElements.forEach(function (element) {
      element.hidden = false
    })

    // Verberg de info-button als JS ingeschakeld is
    const infoButtons = document.querySelectorAll('.button-container')
    infoButtons.forEach(function (element) {
      element.style.display = 'none'
    })
  })
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

{#if itemCollection}
  <section>
    <button
      type="button"
      class="carousel-arrow carousel-arrow--prev"
      on:click={() => scrollLeftOrRight('left')}
      title="prev slide"
      hidden
    >
      <ArrowLeftShort />
    </button>

    <div class="card-container">
      <TicketCard {itemCollection} />
    </div>

    <button
      class="carousel-arrow carousel-arrow--next"
      on:click={() => scrollLeftOrRight('right')}
      title="next slide"
      hidden
    >
      <ArrowRightShort />
    </button>

    <div class="carousel-indicator">
      <span class="carousel-indicator-span">
        {#each itemCollection.componentsCollection.items as item, index}
          <button
            class="carousel-indicator-span-span {index === activeInd ? 'is-active' : ''}"
            on:click={() => scrollToSlide(index)}
          ></button>
        {/each}
      </span>
    </div>

    <div class="button-container">
      <Button
        aria-label="slide to next"
        variant="secondary"
        title="swipe right to see more slides"
        size="m"
        icon={ArrowRight}
        iconColor="var(--accent2-primary)"
      />
    </div>
  </section>
{/if}

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

  .card-container {
    gap: 8px;
    width: 100%;
    display: flex;
    margin: 0 0 0 2rem;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
  }

  .card-container::-webkit-scrollbar {
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

  .carousel-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    justify-content: center;
    top: 0;
    bottom: 64px;
    background-color: var(--accent2-quaternary);
    color: var(--txt-dark-clr);
    margin-block: auto;
    height: fit-content;
    width: 48px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0.5;
    transition: opacity 100ms;
    z-index: 2;
    cursor: pointer;
  }

  .carousel-arrow:hover,
  .carousel-arrow:focus {
    opacity: 1;
  }

  .carousel-arrow--prev {
    left: 3%;
  }

  .carousel-arrow--next {
    right: 1%;
  }

  .carousel-indicator {
    --indicator-size: 20px;
    --max-indicators: 5;
    text-align: center;
    padding: 1rem;
    pointer-events: auto;
  }

  .carousel-indicator-span {
    display: inline-flex;
    gap: calc(var(--indicator-size) / 2);
    height: var(--indicator-size);
  }

  .carousel-indicator-span-span {
    flex: 0 0 var(--indicator-size);
    width: var(--indicator-size);
    height: var(--indicator-size);
    border-radius: 50%;
    background: var(--accent2-secondary);
    opacity: 0.5;
    transition: 0.2s ease-out opacity;
    border: none;
    cursor: pointer;
  }

  .carousel-indicator-span-span.is-active {
    opacity: 1;
  }

  .button-container {
    display: flex;
    justify-content: center;
    padding: 1rem 0;
  }
</style>
