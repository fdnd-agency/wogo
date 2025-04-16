<script>
  import { Button, ArrowRight, Image } from "$lib/index";
  export let items;

  let HeroText = items[0].componentsCollection.items[0];
  let ButtonText = items[0].componentsCollection.items[1];
  let BoekingsInfoL = items[1].componentsCollection.items;
  let BoekingsInfoR = items[2].componentsCollection.items;
</script>

<section>
  <video
    autoplay
    loop
    muted
    width="1280"
    height="1000"
    aria-hidden="true"
    poster={HeroText.asset.url}
  >
    <source src={HeroText.asset.url} type="video/webm" />
    <source src={HeroText.asset.url} type="video/webm" />
  </video>

  <h1>
    {HeroText.title}
  </h1>

  <div class="section-allContent">
    <article class="hero-content">
      <p class="hero-description">{HeroText.textParagraph}</p>
      <Button
        id="hero-button"
        variant="primary"
        title={ButtonText.title}
        icon={ArrowRight}
        iconColor="var(--btn-primary-text-clr)"
        size="lg"
        href={ButtonText.slug}
      />
    </article>
    <div class="overlay"></div>
    <section class="BoekingsInfo">
      <ul>
        {#each BoekingsInfoL as item}
          <li>
            <Image
              src={item.icon.url}
              alt={item.icon.title}
              width="30"
              height="30"
              loading="lazy"
            />{item.title}
          </li>
        {/each}
        {#each BoekingsInfoR as item}
          <li>
            <Image
              src={item.icon.url}
              alt={item.icon.title}
              width="30"
              height="30"
              loading="lazy"
            />{item.title}
          </li>
        {/each}
      </ul>
    </section>
  </div>
</section>

<style>
  section {
    padding: 1em;
    color: #fff;
    z-index: 2;
  }

  section:nth-of-type(1) {
    position: relative;
    overflow: hidden;
  }

  section:nth-of-type(2) {
    background-color: var(--accent1-secondary);
    padding-block: 2em;
  }

  section:nth-of-type(2) > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 90em;
    margin: auto;
    gap: 2em;
  }

  section:nth-of-type(2) > div > article {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  article > p {
    color: var(--txt-quaternary-clr);
    font-weight: 600;
    width: 34ch;
    line-height: 1.4;
  }

  .BoekingsInfo ul li {
    display: flex;
    gap: 0.5em;
    align-items: flex-end;
    margin: 0.5em 0;
  }

  section:nth-of-type(2) > div:first-of-type {
    margin-bottom: 1em;
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

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  .hero-content {
    font-weight: 700;
  }

  .BoekingsInfo {
    z-index: 2;
    background-color: #774f3d6c;
    backdrop-filter: blur(10px);
    border-radius: 1em;
    max-width: fit-content;
    max-height: fit-content;
    margin: 1em 0;
  }

  .hero-content > * {
    padding: 0.5em 0;
    z-index: 2;
  }

  h1 {
    position: relative;
    display: inline-block;
    text-align: center;
    width: 100%;
    color: #fff;
    margin: 0.5em 0;
    font-weight: 700;
    font-size: clamp(2.648rem, 6vw, 2rem);
    letter-spacing: -1px;
    filter: drop-shadow(0 0 0.4rem #000);
    z-index: 2;
  }

  @keyframes heading {
    0% {
      top: -100px;
    }
    100% {
      top: -2px;
    }
  }

  p {
    font-size: 1.2rem;
    font-weight: 700;
    position: relative;
  }

  @keyframes content {
    0% {
      left: -200px;
    }
    100% {
      left: 0px;
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    h1 {
      animation: heading 1.5s forwards;
    }
    p {
      animation: content 1.5s forwards;
    }
    section:nth-of-type(2) > div > article::before {
      animation: content 1.5s forwards;
    }
  }

  @media (min-width: 30em) {
    /* section:nth-of-type(1) {
      height: 70vh;
    } */

    .hero-description {
      max-width: 45rem;
    }
    .hero-description > p {
      max-width: 75%;
    }
  }

  @media (min-width: 44em) {
    section:nth-of-type(2) > div {
      flex-direction: row;
    }
    p {
      font-size: 1.5em;
    }
    section:nth-of-type(2) > div:first-of-type {
      margin-bottom: 0;
    }
    h1 {
      margin: 1em 0;
      color: #fff;
      z-index: 2;
      font-size: clamp(2.648rem, 6vw, 4.241rem);
    }
    .section-allContent {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media (min-width: 55em) {
    h1 {
      margin: 1em 0;
      color: #fff;
      z-index: 2;
      font-size: clamp(2.648rem, 6vw, 4.241rem);
    }

    .hero-content p {
      margin-bottom: 0.5em;
    }
  }
</style>
