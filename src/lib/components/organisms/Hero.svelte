<script>
  import { ButtonLink } from '$lib/index'
  export let items
</script>

<section>
  <video autoplay muted loop aria-label={items.backgroundAsset.title}>
    <source src={items.backgroundAsset.url} type="video/mp4" />
  </video>
  <div class="hero-content">
    <h1>{items.headline}<ButtonLink href="/" title={items.buttonText} /></h1>
    <p>{items.bodyText}</p>
  </div>
</section>

<style>
  section {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 1rem;
    height: 55vh;
  }

  video {
    position: absolute;
    object-fit: cover;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.8;
  }

  .hero-content {
    position: absolute;
    padding: 1rem;
    margin-top: 3rem;
    color: #fff;
    font-weight: 700;
  }

  h1 {
    display: inline;
    font-weight: 700;
    font-size: clamp(2.648rem, 6vw, 4.241rem);
    letter-spacing: -1px;
    filter: drop-shadow(0 0 0.4rem #000);
  }

  p {
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 0.2rem;
    filter: drop-shadow(0 0 0.4rem #000);
  }

  @media (min-width: 30em) {
    section {
      height: 70vh;
    }

    .hero-content {
      max-width: 700px;
    }

    h1 {
      font-size: 70px;
    }
  }
</style>
