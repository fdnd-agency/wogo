<script>
  export let cards;
</script>

<section >
  <ul>
    <li class="card-list card-number">
      <div class="card-body" tabIndex="0">
        {#each cards as card, index}
          <div class="text-content" >
            <!-- <div class="span-cirkel"> -->
            <p class="number-text" aria-label="Step {index + 1}">{index + 1}</p>
            <h3>{card.title}</h3>
            <!-- </div> -->
            <p>{card.textParagraph}</p>
          </div>
        {/each}
      </div>
    </li>
  </ul>
</section>

<style>
  section {
    --cards: 4;
    --cardHeight: 87vh;
    --cardTopPadding: 1.5em;
    --cardMargin: 4vw;
    width: 100%;
    margin: 0 auto;
    padding-inline: 2em;
  }

  ul {
    display: flex;
    list-style: none;
    padding-left: 0;
    gap: var(--cardMargin);
    margin-bottom: var(--cardMargin);
  }

  .card-list {
    padding-top: calc(var(--index) * var(--cardTopPadding));
  }

  .card-number:nth-child(1) .card-body {
    background-color: var(--how-it-works-card-bg-color);
  }

  .card-body {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 3.5rem;

    height: auto;
    padding: 2rem;
    border-radius: 20px;
    transition: all 0.5s;
    border: 4px solid var(--how-it-works-card-line-color);
  }
  .number-text {
    font-size: 2.5rem;
    color: var(--how-it-works-card-line-color);
    font-weight: 800;
    text-align: center;
  }

  .text-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: var(--how-it-works-card-text-color);
  }

  /* .span-cirkel {
    display: flex;
    flex-direction: row;
    gap: 1em;
  } */

  h3 {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    gap: 0.5rem;
    font-size: 1.2rem;
  }

  p {
    font-size: 1rem;
  }

  @media (min-width: 750px) {
    .card-body {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      padding: 3rem;
      height: 100%;
    }

    .text-content {
      height: 100%;
      justify-content: space-between;
    }

    h3 {
      font-size: 2rem;
      color: var(--how-it-works-card-text-color);
    }

    p {
      font-size: 1.5rem;
      width: 75%;
    }

  }

  @media (min-width: 950px) {
    .card-body {
      display: flex;
      flex-direction: row;
    }
    .text-content {
      max-width: calc(100% / 4);
      gap: 1em;
    }
    .number-text {
      font-size: 3rem;
      color: var(--how-it-works-card-line-color);
      font-weight: 800;
      text-align: center;
    }
    .span-cirkel {
      gap: 2em;
    }
  }
</style>
