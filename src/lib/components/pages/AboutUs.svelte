<script>
  import InfiniteCarrousel from '../organisms/InfiniteCarrousel.svelte'
  import Canvas from '../organisms/Canvas.svelte';
  import Title from '../atoms/Title.svelte'
  
  export let items
  let WoGoContent = items[3].componentsCollection.items
</script>

<svelte:head>
  <title>WoGo | Over ons</title>
</svelte:head>

<section id="about">
  <article>
    <Title 
      headertype='h1'
      content='{items[0].title}' 
      color='brand' />
    <blockquote class="initial">{items[0].textParagraph}</blockquote>
  </article>
  <picture>
    <source srcset="/images/Scenery.webp">
    <img src="/images/Scenery.png" alt="Two people toasting" >
  </picture>
</section>

<section id="mission">
  <Title 
    headertype='h2'
    content='{items[1].title}' 
    color='brand' />
  <p class="initial">{items[1].textParagraph}</p>
</section>

<section id="partners">
  <Title 
    headertype='h2'
    content='{items[2].title}' 
    color='black' />
  <InfiniteCarrousel />
</section>

<section id="getuigenissen">
  <Title 
    headertype='h2'
    content='{WoGoContent[0].title}' 
    color='brand' />
  <p>{WoGoContent[0].textParagraph}</p>
  <span>{WoGoContent[1].textParagraph}</span>
  <Canvas />
</section>

<section id="information">
  {#each items[4].componentsCollection.items as item}
    <article>
      <Title 
        headertype='h3'
        content='{item.title}' 
        color='black' />
      <p class="initial">{item.textParagraph}</p>
    </article>
  {/each}
</section>

<style>
  /* Global Styling */
  * {
    line-height: 1.4;
    text-transform: uppercase;
  }
  .initial {
    text-transform: initial;
  }
  section {
    width: 100vw;
    height: 100vh;
		display: flex;
    position: relative;
		align-items: center;
		flex-direction: column;
		justify-content: center;
  }
  p:not(#information p),
  blockquote {
    font-size: 1.1em;
    font-weight: 600;
    color: var(--txt-quaternary-clr);
    max-width: 72ch;
  }
  blockquote {
    font-style: italic;
  }

  /* 'Over ons' section */
  #about {
    flex-direction: row;

    @media (max-width: 768px) {
      flex-direction: column;

      & picture {
        width: 100%;
        margin: var(--margin) 0;
      }
    }
    
    & picture, article {
      width: 50%;
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    & picture img {
        max-width: 50%;
        aspect-ratio: 1;
        object-fit: cover;
        background: white;

        @media (max-width: 768px) {
          max-width: 100%;
        }
    }
  }

  /* 'Onze missie' section */
  #mission {
    background: var(--accent1-tertiary);

    & p {
      font-weight: 400 !important;
      margin: 0 var(--margin);
    }
  }

  /* 'Partners' section */
  #partners {
    text-align: center;
    height: fit-content;
    align-items: inherit;
    background: var(--accent2-primary);

    & h2 {
      margin: var(--margin) 0;
    }
  }

  /* 'Getuigenissen' section */
  #getuigenissen {
    text-align: center;
    font-weight: bold;
    overflow: hidden;

    & p {
      margin: 0 var(--margin);
    }
    & span {
      margin: var(--margin);
      color: var(--accent2-primary);
    }
    & img {
      position: absolute;
      bottom: 0;
    }
  }

  /* 'Informatie' section */
  #information {
    background: var(--accent2-primary);
    flex-direction: row;
    flex-wrap: wrap;
    height: 70vh;

    & article {
      width: 25%;
      margin: 0 calc(var(--margin) * 2);

      @media (max-width: 768px) {
        width: 100%;
        margin: 0 calc(var(--margin) - 0.75rem);
      }

      & p {
        max-width: 38ch;
        color: var(--btn-primary-text-clr);
      }
    }
  }
</style>