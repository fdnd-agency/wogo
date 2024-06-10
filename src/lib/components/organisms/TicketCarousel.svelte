<script>
  import { TicketCard, ArrowRightShort, ArrowLeftShort, Link, ArrowRight } from '$lib'
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
    const carouselElement = document.querySelector('.carousel-inner')
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
    const carouselElement = document.querySelector('.carousel-inner')
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

<!-- 
{#if itemCollection}
  <section>
    <button
      type="button"
      class="carousel-button left-arrow"
      on:click={() => scrollLeftOrRight('left')}
      title="Vorige slide"
      hidden
    >
      <ArrowLeftShort />
    </button>

    <div class="carousel-inner">
      <TicketCard {itemCollection} />
    </div>

    <button
      class="carousel-button right-arrow"
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
{/if} -->

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
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    margin: 0 0 0 1rem;
    gap: 1rem;
    overflow: auto;
  }

  .carousel-inner {
    --white-space: clamp(1rem, 5vw, 2rem);
    display: grid;
    grid-auto-flow: column;
    gap: 1rem;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
    scroll-behavior: smooth;
  }

  .carousel-inner::-webkit-scrollbar {
    display: none;
  }

  .carousel-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    border: none;
    color: #000;
    font-size: 20px;
    z-index: 2;
    border-radius: 50%;
    background-color: var(--accent2-quaternary);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.686);
    margin: 0 -33px;
  }

  .carousel-button.left-arrow {
    left: 5%;
  }

  .carousel-button.right-arrow {
    right: 5%;
  }

  .carousel-indicator {
    --indicator-size: 15px;
    --max-indicators: 5;
    position: absolute;
    padding: 1rem;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    max-width: calc(
      var(--max-indicators) * var(--indicator-size) + (var(--max-indicators) - 1) *
        var(--indicator-size) / 2
    );
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

  @media (min-width: 55em) {
    .carousel-title {
      padding: 2rem;
    }
    .carousel-title h2 {
      font-size: var(--fs-xl);
    }
  }
</style>
