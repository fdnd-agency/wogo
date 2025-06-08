<script>
  import { Button, ArrowRight } from "$lib/index";
  export let hero;
  function scrollToHowItWorks(event) {
    event.preventDefault();
    const target = document.getElementById("how-it-works");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
            history.replaceState(null, '', window.location.pathname);
    }
  }
</script>

<div class="hero-gradient-overlay">yo</div>
<section>
  <video
    autoplay
    loop
    muted
    width="1280"
    height="1000"
    aria-hidden="true"
    poster="/hero-image-background.webp"
  >
    <source src={hero.asset.url} type="video/webm" />
    <source src={hero.asset.url} type="video/webm" />
    <source
      src="path/to/video-480p.mp4"
      type="video/mp4"
      media="(min-width: 480px)"
    />
    <source
      src="path/to/video-360p.mp4"
      type="video/mp4"
      media="(max-width: 1280px)"
    />
  </video>
  <div class="hero-content">
    <h1>
      {hero.title}
    </h1>
    <p>{hero.subtitle}</p>
    <div class="buttons-container">
      <a href="#how-it-works" on:click={scrollToHowItWorks}>
        <Button
          variant="mobile-header-filled"
          title="How it works"
          background-color="var(--hero-h1-text-color)"
          iconColor="var(--btn-primary-text-clr)"
          opacity="0.8"
          margin="1rem"
        /></a
      >
      <Button
        variant="mobile-header"
        title="Book now"
        icon={ArrowRight}
        iconColor="var(--hero-h1-text-color)"
      />
    </div>
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

  .hero-gradient-overlay {
    background: linear-gradient(
      180deg,
      rgba(3, 3, 3, 0.637) 0%,
      rgba(0, 0, 0, 0.272) 70%
    );
    height: 56vh;
    width: 100%;
    position: absolute;
    top: 5rem;
    z-index: 2;
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
    /* margin-top: 3rem; */
    font-weight: 700;
    color: var(--hero-h1-text-color);
    z-index: 3;
  }

  h1 {
    position: relative;
    display: inline-block;
    font-weight: 700;
    /* font-size: clamp(2.648rem, 6vw, 4.241rem); */
    font-size: clamp(30px, 5vw, 70px);

    /* letter-spacing: -1px; */
    filter: drop-shadow(0 0 0.4rem #000);
    /* animation: heading;
    animation-duration: 3s;
    animation-fill-mode: forwards; */
  }

  .buttons-container {
    display: flex;
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
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0.2rem;
    padding: 0.5rem;
    text-transform: lowercase;
    filter: drop-shadow(0 0 0.4rem #000);
    position: relative;
    /* animation-name: content;
    animation-duration: 3s; */
    animation-fill-mode: forwards;
    z-index: 3;
  }
  a {
    text-decoration: none;
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
      font-size: 50px;
    }
    .hero-gradient-overlay {
      height: 71vh;
    }
  }
</style>
