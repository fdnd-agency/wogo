<script>
  import { Button, ArrowRight, Image } from '$lib/index'
  export let WhatWeDo
</script>

<section id="main">
  {#each WhatWeDo as item}
    <article>
      <Image
        src={item.asset.url}
        alt={item.icon.title}
        opacity="0.4"
        brdRadius="10px"
        loading="lazy"
      />
      <div class="content-inner">
        <h3>
          <span
            ><Image
              src={item.icon.url}
              alt={item.icon.title}
              width="30"
              height="30"
              loading="lazy"
            /></span
          >{item.title}
        </h3>
        <p>{item.textParagraph}</p>
        <Button
          variant="quaternary"
          href="/"
          title="Read More"
          icon={ArrowRight}
          iconColor="var(--accent2-primary)"
        />
      </div>
    </article>
  {/each}
</section>

<style>
  section {
    padding: 2rem;
  }

  article {
    margin-bottom: 3rem;
  }

  h3 {
    display: inline-flex;
    align-items: center;
    text-transform: uppercase;
    gap: 1rem;
    padding: 0.5rem 0;
    color: var(--accent2-tertiary);
    font-size: 1.2rem;
  }

  p {
    line-height: 1.4;
    max-width: 32rem;
    text-align: left;
    padding: 1rem 0;
    color: var(--txt-quaternary-clr);
  }

  @media (min-width: 55em) {
    h3 {
      font-size: 1.6rem;
    }

    p {
      font-size: 1.1rem;
    }

    article {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      align-items: center;
      justify-content: space-around;
      gap: 3rem;
      max-width: 80em;
      margin: 0 auto;
    }

    article:nth-child(even) {
      direction: rtl;
    }

    article:nth-child(even) > * {
      direction: ltr;
    }

    .content-inner {
      margin: 0 auto;
    }
  }

  /* SCROLL DRIVEN ANIMATION  */
  @keyframes reveal {
		from {
			opacity: 0;
			transform: translateY(50%);
		}
		40% {
			opacity: 1;
			transform: translateY(0);
		}
  }

  @media (prefers-reduced-motion: no-preference) {
    article {
      animation: reveal linear forwards;
      animation-timeline: view();
    }
  }
</style>
