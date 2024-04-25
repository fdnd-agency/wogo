<script>
  import { Card, SvgArrowRight } from '$lib'
  import { onMount } from 'svelte'
  export let items
  console.log(items)

  let carousel
  let activeIndex = 0
  // const numCards = 5

  function scroll(direction) {
    const scrollAmount = 200
    carousel.scrollBy({ left: direction * scrollAmount })
  }

  function updateActiveIndex() {
    const cardWidth = carousel.firstChild.offsetWidth
    activeIndex = Math.round(carousel.scrollLeft / cardWidth)
  }

  function disableJSFeature() {}

  onMount(() => {
    disableJSFeature()

    carousel.addEventListener('scroll', updateActiveIndex)

    return () => {
      carousel.removeEventListener('scroll', updateActiveIndex)
    }
  })
</script>

<section>
  <div class="btn-container disable-js">
    <button on:click={() => scroll(1)}>
      <SvgArrowRight width="20px" height="20px" />
    </button>
    <button on:click={() => scroll(-1)}>
      <SvgArrowRight width="20px" height="20px" />
    </button>
  </div>

  <div bind:this={carousel} class="carrousel-container">
    {#each items as item}
      <Card
        title={item.title}
        price={item.price}
        buttonText={item.buttonText}
        icon={item.icon}
        locationDescription={item.locationDescription}
      />
    {/each}
  </div>

  <nav>
    <ul>
      <li></li>
    </ul>
  </nav>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: clamp(1rem, 5vw, 2rem);
    gap: 1rem;
  }

  .btn-container {
    display: flex;
    align-self: flex-end;
    gap: 0.5rem;
  }

  button {
    display: inline-block;
    background-color: var(--accent2-tertiary);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
  }
  .carrousel-container {
    --white-space: clamp(1rem, 5vw, 2rem);
    display: grid;
    grid-auto-flow: column;
    gap: calc(var(--white-space) * 0.5);
    overflow-x: auto;
    /* padding: calc(var(--white-space) * 0.5) calc(var(--white-space) * 1)
      calc(var(--white-space) * 1); */
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    scrollbar-width: none; /* scrollbars onzichtbaar maken */
    overscroll-behavior-x: contain;
    /* .centerCarousel::-webkit-scrollbar { display: none; } */
  }

  nav {
    --sc-dot-size: 0.5rem;
    --max-indicatos: 5;
    max-width: calc(
      var(--max-indicators) * var(--sc-dot-size) + (var(--max-indicators) - 1) * var(--sc-dot-size) /
        2
    );
    position: absolute;
    width: 100%;
    overflow: hidden;
    overflow: clip;
    pointer-events: none;
  }

  nav ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: calc(var(--sc-dot-size) / 1);
    list-style: none;
  }

  nav li {
    width: var(--sc-dot-size);
    height: var(--sc-dot-size);
    border-radius: 50%;
    background: #0a0505;
    opacity: 0.5;
    transition: 0.2s ease-out opacity;
  }

  nav li.is-active {
    opacity: 1;
  }
</style>
