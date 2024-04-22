<script>
  import { ButtonLink } from '$lib/index'
  export let items
</script>

<section>
  <video autoplay muted loop aria-label={items.backgroundAsset.title}>
    <source src={items.backgroundAsset.url} type="video/mp4" />
  </video>
  <div class="hero-content">
    <h1>{items.headline}</h1>
    <ButtonLink href="/" title="Book a Walk" />
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
    width: 100vw;
    height: 50vh;
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
    width: clamp(15rem, 100vw, 40rem);
    color: #fff;
    font-weight: 700;
  }

  h1 {
    display: inline;
    align-items: center;
    font-size: clamp(2.3rem, 5vw, 4rem);
    font-weight: 700;
    filter: drop-shadow(0 0 0.4rem #000);
  }

  p {
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 0.2rem;
    /* font-size: clamp(1rem, 100vw, 1.5rem); */
    filter: drop-shadow(0 0 0.4rem #000);
  }
</style>
