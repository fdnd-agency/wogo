<script>
  import { TicketCard, Link, ArrowRightShort, ArrowLeftShort, ArrowRight } from '$lib'
  import { onMount } from 'svelte'
  export let itemCollection
  // Functie voor het scrollen naar links of rechts binnen de carousel
  function scrollLeftOrRight(direction) {
    const carouselElement = document.querySelector('.carousel-inner')
    const offsetWidth = carouselElement.offsetWidth
    const scrollXBy = direction === 'left' ? -offsetWidth : offsetWidth
    const scrollWidth = carouselElement.scrollWidth
    const scrollLeft = carouselElement.scrollLeft
    // Controleer of de carousel helemaal naar links of rechts is gescrold
    if (direction === 'left' && scrollLeft === 0) {
      carouselElement.scrollTo({
        left: scrollWidth - offsetWidth,
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
    // Werk de actieve indicator bij
    updateActiveIndicator()
  }
  // Functie voor het bijwerken van de actieve indicator in de carousel
  function updateActiveIndicator() {
    const carouselElement = document.querySelector('.card-container')
    const scrollLeft = carouselElement.scrollLeft
    const offsetWidth = carouselElement.offsetWidth
    const activeIndex = Math.round(scrollLeft / offsetWidth)
    const indicators = document.querySelectorAll('.carousel-indicator-span-span')
    indicators.forEach((ind, index) => {
      if (index === activeIndex) {
        ind.classList.add('is-active')
      } else {
        ind.classList.remove('is-active')
      }
    })
  }
  function scrollToSlide(index) {
    const carouselElement = document.querySelector('.card-container')
    const offsetWidth = carouselElement.offsetWidth
    carouselElement.scrollTo({
      left: offsetWidth * index,
      behavior: 'smooth',
    })
    updateActiveIndicator()
  }
  // Functie die wordt uitgevoerd wanneer het component wordt gemonteerd
  onMount(() => {
    // Zorg ervoor dat de knoppen en indicatoren zichtbaar zijn bij als de browser JS heeft ingeschakeld
    const carouselElements = document.querySelectorAll('.carousel-button, .carousel-indicator')
    carouselElements.forEach(function (element) {
      element.hidden = false
    })
  })
  // Zorg ervoor dat de carousel informatie button niet zichtbaar is waneer JS ingeschakeld is
  onMount(() => {
    const carouselElements = document.querySelectorAll('.carousel-info-button')
    carouselElements.forEach(function (element) {
      element.style.display = 'none'
    })
  })
</script>

<div class="carousel-title">
  <h2>Explore Walks</h2>
  <Link
    href="/walks"
    title="See all Walks"
    icon={ArrowRight}
    iconColor="var(--txt-tertiary-clr)"
    color="var(--txt-tertiary-clr)"
    fontSize="var(--fs-md)"
  />
</div>

{#if itemCollection}
  <section>
    <button
      type="button"
      class="carousel-arrow carousel-arrow--prev"
      on:click={() => scrollLeftOrRight('left')}
      title="Vorige slide"
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
      title="Volgende slide"
      hidden
    >
      <ArrowRightShort />
    </button>

    <div class="carousel-indicator">
      <span class="carousel-indicator-span">
        {#each itemCollection.componentsCollection.items as item, index}
          <button
            class="carousel-indicator-span-span {index === 0 ? 'is-active' : ''}"
            on:click={() => scrollToSlide(index)}
          ></button>
        {/each}
      </span>
    </div>

    <div class="button-container">
      <button class="carousel-info-button"> Scroll voor de volgende slide </button>
    </div>
  </section>
{/if}

<style>
  .carousel-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }
  .carousel-title h2 {
    display: flex;
    color: var(--txt-tertiary-clr);
    font-weight: 600;
  }
  section {
    --arrow-size: 40px;
    width: 100%;
    position: relative;
  }

  .card-container {
    gap: 8px;
    width: 100%;
    display: flex;
    margin: 0 0 0 1rem;
    width: calc(100% - 16px);
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
      padding: 2rem;
    }
    .carousel-title h2 {
      font-size: var(--fs-xl);
    }
  }

  .carousel-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
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
    font-size: 3rem;
    cursor: pointer;
    opacity: 0.5;
    transition: opacity 100ms;
    z-index: 2;
  }

  .carousel-arrow:hover,
  .carousel-arrow:focus {
    opacity: 1;
  }

  .carousel-arrow--prev {
    left: 1%;
  }

  .carousel-arrow--next {
    right: 1%;
  }

  .carousel-indicator {
    --indicator-size: 15px;
    --max-indicators: 5;
    display: flex;
    justify-content: center;
    padding: 1rem;
    bottom: -5px;
    pointer-events: auto;
  }

  .carousel-indicator-span {
    display: flex;
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
</style>
