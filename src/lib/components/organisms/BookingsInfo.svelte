<script>
  import { Button, ArrowRight, Image } from '$lib/index'
  export let items

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
  <div class="overlay"></div>
  <article class="hero-content">
    <h1>
      {HeroText.title}
    </h1>
    <div class="hero-description">
      <p>{HeroText.textParagraph}</p>
      <Button
        variant="primary"
        title={ButtonText.title}
        icon={ArrowRight}
        iconColor="var(--btn-primary-text-clr)"
        size="lg"
        href={ButtonText.slug}
      />
    </div>
  </article>
</section>

<section>
  <div>
    <article>
      {#each BoekingsInfoL as item}
        <p><Image
          src={item.icon.url}
          alt={item.icon.title}
          width="30"
          height="30"
          loading="lazy"
        />{item.title}</p>
      {/each}
    </article>
    <article>
      {#each BoekingsInfoR as item}
        <p><Image
          src={item.icon.url}
          alt={item.icon.title}
          width="30"
          height="30"
          loading="lazy"
        />{item.title}</p>
      {/each}
    </article>
  </div>
</section>

<style>
  section {
    padding-inline: 2em;
  }

  section:nth-of-type(1) {
    display: grid;
    position: relative;
    height: 55vh;
    overflow: hidden;
    align-items: center;
  }
  section:nth-of-type(1) > article {
    max-width: 90em;
    margin: auto;
    width: 100%;
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
  
  section:nth-of-type(2) > div > article::before {
    content: '';
    display: block;
    position: relative;
    width: 100%;
    height: 4px;
    background-color: #FFAA81;
    border-radius: 4px;
    margin-bottom: 4px;
    box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
  }
  
  article > p {
    color: var(--txt-quaternary-clr);
    font-weight: 600;
  }
  
  article > p {
    display: flex;
    gap: 0.5em;
    align-items: flex-end;
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
    color: #fff;
    z-index: 1;
  }

  .hero-description > p {
    padding: 0.5em;
  }

  h1 {
    position: relative;
    display: inline-block;
    text-align: center;
    width: 100%;
    margin-bottom: 2em;
    font-weight: 700;
    font-size: clamp(2.648rem, 6vw, 4.241rem);
    letter-spacing: -1px;
    filter: drop-shadow(0 0 0.4rem #000);
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
    section:nth-of-type(1) {
      height: 70vh;
    }

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
  }

  @media (min-width: 55em) {
    section {
      padding-inline: 8em;
    }
  }
</style>
