<script>
  import { onMount } from "svelte";
  export let reviews;

  // Track the current slide and interval for auto-sliding
  let currentIndex = 0;
  let interval;

  // Check if there are reviews to display
  const hasReviews = reviews?.length > 0;

  // Change the current slide manually and reset the auto-slide timer
  const changeSlide = (index) => {
    currentIndex = index;
    resetAutoSlide();
  };

  let carouselRef;

const scrollToSlide = (index) => {
  const slideWidth = carouselRef.offsetWidth;
  carouselRef.scrollTo({
    left: slideWidth * index,
    behavior: 'smooth',
  });
  currentIndex = index;
};

const nextSlide = () => {
  if (currentIndex < reviews.length - 1) {
    scrollToSlide(currentIndex + 1);
  }
};

const prevSlide = () => {
  if (currentIndex > 0) {
    scrollToSlide(currentIndex - 1);
  }
};

</script>

<!-- Render reviews section only if reviews exist -->

{#if hasReviews}
  <section class="reviews-section">
    <!-- Carousel: Display reviews horizontally -->
    <div class="button-section">
     <button on:click={prevSlide}>
  <img src="Vector-navigation-icon-left.svg" alt="left icon" />
</button>

     <button on:click={nextSlide}>
  <img src="Vector-navigation-icon-right.svg" alt="right icon" />
</button>

    </div>
    <div  bind:this={carouselRef}  class="carousel-wrapper">
      {#each reviews as item, index}
        <article
          class="review-card {currentIndex === index ? 'active' : ''}"
        
        >
          <h3>{item.title}</h3>

          <!-- Star rating system: Display 5 stars -->
          <div class="star-rating">
            {#each Array(5) as _, i}
              <span class="star">&#9733;</span> <!-- Unicode star -->
            {/each}
          </div>

          <!-- Display review text -->
          <blockquote>
            <p>{item.textParagraph}</p>
          </blockquote>
        </article>
      {/each}
    </div>

    <!-- Carousel controls: Dots for navigation -->
    <div class="controls" aria-label="Carousel navigation">
      {#each reviews as _, index}
        <button
    class="dot {currentIndex === index ? 'active' : ''}"
    on:click={() => scrollToSlide(index)}
    aria-label="Go to slide {index + 1}"
  ></button>
      {/each}
    </div>
  </section>
{/if}

<style>
  :root {
    --star-color: hsla(9, 72%, 45%, 1);
    --text-align: center;
    --text-max-width: 600px;
  }

  /* Main section styles */
  .reviews-section {
    position: relative;

    width: 20rem;

    background-color: var(--accent2-tertiary);
    border-radius: 10px;
    text-align: var(--text-align); /* Center align all text */
  }

  /* Carousel wrapper: Keeps all cards in a horizontal line */
  .carousel-wrapper {
    display: flex;
    transition: transform 0.5s ease;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
  }

  /* no scrollbar */
  .carousel-wrapper::-webkit-scrollbar {
    display: none;
  }

  /* Individual review card styles */
  .review-card {
    flex: 0 0 100%; /* Full width per card */
    border-radius: 10px;
    padding: 1.5rem;
    display: flex; 
    flex-direction: column;
    align-items: center;
    scroll-snap-align: start; 
  }

  /* Review text (textParagraph) styles */
  blockquote {
    margin: 0 auto; 
    font-size: 1.1rem;
    font-style: italic;
    color: var(--primary-color);
    max-width: var(--text-max-width); 
    line-height: 1.4;
    text-align: left;
  }

  blockquote p {
    margin: 0;
    padding: 0.5rem 1rem;
  }

  /* Star rating system styles */
  .star-rating {
    display: flex;
    justify-content: center;
    gap: 0.25rem; 
    margin-bottom: 1rem;
  }

  .star {
    font-size: 1.2rem; 
    color: var(--star-color); /* Star color */
  }

  /* Buttons that navigate through the reviews */
  .button-section {
    display: flex;
    justify-content: space-between;
    position: relative;
    top: 8rem;
  }

  button {
    background: none;
    border: none;
    cursor: pointer; 
    padding: 0.5rem;
  }

  /* Controls for navigating between slides */
  .controls {
    display: flex;
    justify-content: center;
    gap: 0.5rem; 

    display: none;
  }

  /* Dots representing each slide */
  .dot {
    border-radius: 50%;
    background: var(--accent1-secondary);
    border: none;
    cursor: pointer;
    margin-right: 3px;
    transition: background 0.3s; 
  }

  /* Active state for dots */
  .dot.active {
    background: var(--accent1-tertiary);
  }

  .dot:focus {
    outline: 2px solid var(--accent1-tertiary);
  }

  /* Responsive styles for smaller screens */
  @media (max-width: 768px) {
    .review-card {
      padding: 0 1rem; 
    }

    blockquote {
      font-size: 1rem; 
  }
}

  /* Container queries for fine-tuned responsiveness */
  @container (max-width: 600px) {
    blockquote {
      max-width: 90%; 
      text-align: center;
    }
    .controls {
      display: block;
  
    }
  }

  @media (min-width: 600px) {
    .controls {
      display: block;
      margin-bottom: 1rem ;
    }
    .reviews-section {
      width: 30rem;
      margin-bottom:2rem;
    }
    .review-card {
      padding: 0 1rem;
    }
  }

  /* Reduced motion preferences for better accessibility */
  @media (prefers-reduced-motion: reduce) {
    .carousel-wrapper {
      transition: none;
    }

    .review-card {
      transition: none;
    }
  }
</style>
