<script>
    import { onMount } from 'svelte';
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
  
    // Reset the auto-slide interval when user interacts
    const resetAutoSlide = () => {
      clearInterval(interval);
      startAutoSlide();
    };
  
    // Start auto-sliding through the reviews every 5 seconds
    const startAutoSlide = () => {
      if (hasReviews) {
        interval = setInterval(() => {
          currentIndex = (currentIndex + 1) % reviews.length;
        }, 5000); // Change slide every 5 seconds
      }
    };
  
    // Start the auto-slide on component mount, clean up on destroy
    onMount(() => {
      if (hasReviews) startAutoSlide();
      return () => clearInterval(interval); // Clean up interval on component destroy
    });
  </script>
  
  <!-- Render reviews section only if reviews exist -->
  {#if hasReviews}
  <section class="reviews-section">
    <!-- Carousel: Display reviews horizontally -->
    <div class="carousel-wrapper">
      {#each reviews as item, index}
        <article
          class="review-card {currentIndex === index ? 'active' : ''}"
          style="transform: translateX(calc((var(--index, 0) - {currentIndex}) * 100%));"
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
          on:click={() => changeSlide(index)}
          aria-label="Go to slide {index + 1}"
        ></button>
      {/each}
    </div>
  </section>
  {/if}
  
  <style>
    :root {
      --star-color: #FFC107;
      --text-align: center;
      --text-max-width: 600px; 
    }
  
    /* Main section styles */
    .reviews-section {
      position: relative;
      overflow: hidden;
      background-color: var(--accent2-tertiary);
      padding: 2rem 0;
      text-align: var(--text-align); /* Center align all text */
    }
  
    /* Carousel wrapper: Keeps all cards in a horizontal line */
    .carousel-wrapper {
      display: flex;
      transition: transform 0.5s ease; /* Smooth slide transition */
    }
  
    /* Individual review card styles */
    .review-card {
      flex: 0 0 100%; /* Full width per card */
      max-width: 100%;
      border-radius: 0.5rem;
      padding: 1.5rem;
      transition: opacity 0.5s ease; /* Fade effect when changing slides */
      display: flex; /* Flexbox to align content inside */
      flex-direction: column;
      align-items: center;
    }
  
    /* Review text (textParagraph) styles */
    blockquote {
      margin: 0 auto; /* Center the text content */
      font-size: 1.1rem;
      font-style: italic;
      color: var(--primary-color);
      max-width: var(--text-max-width); /* Limit the width of text */
      line-height: 1.6; /* Improve readability */
      text-align: left; /* Align the text left within the limited width */
    }
  
    blockquote p {
      margin: 0; /* Remove default paragraph margin */
    }
  
    /* Star rating system styles */
    .star-rating {
      display: flex;
      justify-content: center;
      gap: 0.25rem; /* Space between stars */
      margin-bottom: 1rem;
    }
  
    .star {
      font-size: 1.2rem; /* Adjust size of stars */
      color: var(--star-color); /* Star color */
    }
  
    /* Controls for navigating between slides */
    .controls {
      display: flex;
      justify-content: center;
      gap: 0.5rem; /* Space between dots */
      margin-top: 1rem;
    }
  
    /* Dots representing each slide */
    .dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: var(--accent2-quaternary);
      border: none;
      cursor: pointer;
      transition: background 0.3s; /* Smooth background color change */
    }
  
    /* Active state for dots */
    .dot.active {
      background: var(--primary-color);
    }
  
    .dot:focus {
      outline: 2px solid var(--primary-color); /* Accessibility focus outline */
    }
  
    /* Responsive styles for smaller screens */
    @media (max-width: 768px) {
      .review-card {
        padding: 1rem; /* Reduce padding on smaller screens */
      }
  
      blockquote {
        font-size: 1rem; /* Slightly smaller text for smaller screens */
      }
    }
  
    /* Container queries for fine-tuned responsiveness */
    @container (max-width: 600px) {
      blockquote {
        max-width: 90%; /* Reduce max-width to 90% of container width */
        text-align: center; /* Center-align for very narrow containers */
      }
    }
  
    /* Reduced motion preferences for better accessibility */
    @media (prefers-reduced-motion: reduce) {
      .carousel-wrapper {
        transition: none; /* Disable smooth slide transition */
      }
  
      .review-card {
        transition: none; /* Disable fade effect */
      }
    }
  </style>
  