<script>
  import { PrimaryButton, ArrowRight } from '$lib/index'
  export let items
</script>

<section>
  <video
    autoplay
    loop
    muted
    width="1280"
    height="700"
    aria-label={items.description}
    aria-hidden="true"
    poster="/hero-image-background.webp"
  >
    <source src={items[0].asset.url} type="video/webm" />
    <source src={items[0].asset.url.replace('.webm', '.mp4')} type="video/mp4" />
  </video>
  <div class="hero-content">
    <h1>
      {items[0].title}
      <PrimaryButton title="Book a Walk" icon={ArrowRight} size="lg" type="button" on:click />
    </h1>
    <p></p>
  </div>
</section>

<style>
  section {
    display: grid;
    place-items: center;
    position: relative;
    height: 55vh;
    overflow: hidden;
  }

  video {
    position: absolute;
    top: 50%;
    left: 50%;
    width: auto;
    height: 100%;
    transform: translate(-50%, -50%);
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
    opacity: 0.8;
  }

  .hero-content {
    padding: 1rem;
    margin-top: 3rem;
    font-weight: 700;
    color: #fff;
  }

  h1 {
    position: relative;
    display: inline-block;
    font-weight: 700;
    font-size: clamp(2.648rem, 6vw, 4.241rem);
    letter-spacing: -1px;
    filter: drop-shadow(0 0 0.4rem #000);
    animation: heading;
    animation-duration: 3s;
    animation-fill-mode: forwards;
  }

  @keyframes heading {
    0% {
      top: -200px;
    }
    100% {
      top: -2px;
    }
  }

  p {
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 0.2rem;
    padding: 0.5rem;
    filter: drop-shadow(0 0 0.4rem #000);
    position: relative;
    animation-name: content;
    animation-duration: 3s;
    animation-fill-mode: forwards;
  }

  @keyframes content {
    0% {
      left: -1000px;
    }
    100% {
      left: 0px;
    }
  }

  @media (min-width: 30em) {
    section {
      height: 70vh;
    }

    .hero-content {
      max-width: 45rem;
    }

    h1 {
      font-size: 70px;
    }
  }
</style>
