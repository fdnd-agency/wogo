<script>
  export let cards
  
</script>

<section>
  <ul>
    <li class="card-list card-number">
      <div class="card-body" tabIndex="0">
          {#each cards as card, index}
          <div class="text-content">
            <div class="span-cirkel">
              <span aria-label="Step {index + 1}">{index + 1}</span>
              <h3>{card.title}</h3>
            </div>
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
    background-color: #ffd6c5;
  }
  .card-number:nth-child(2) .card-body {
    background-color: #ffd6c5;
  }
  .card-number:nth-child(3) .card-body {
    background-color: #ffd6c5;
  }
  .card-number:nth-child(4) .card-body {
    background-color: #ffd6c5;
  }

  .card-body {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 3.5rem;
    /* height: var(--cardHeight); */
    height: auto;
    padding: 2rem;
    border-radius: 20px;
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.3);
    transition: all 0.5s;
  }

  .text-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .span-cirkel {
    display: flex;
    flex-direction: row;
    gap: 1em;
  }

  h3 {
    display: inline-flex;
    align-items: center;
    text-transform: uppercase;
    gap: 0.5rem;
    font-size: 1.3rem;
  }

  p {
    font-size: 1.2rem;
  }

  span {
    width: 25px;
    height: 25px;
    line-height: 25px;
    border-radius: 50%;
    text-align: center;
    font-size: 16px;
    background-color: var(--page-bg-color);
    color: var(--accent2-quaternary);
  }

  @media (min-width: 48em) {
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
    }

    p {
      font-size: 1.5rem;
      width: 75%;
    }

    span {
      width: 45px;
      height: 45px;
      line-height: 45px;
      font-size: 20px;
    }
    .span-cirkel {
      flex-direction: column;
    }
  }

  @media (min-width: 55em) {
    .card-body {
      display: flex;
      flex-direction: row;
    }
    .text-content {
      max-width: calc(100% / 4);
      gap: 2em;
    }
    .span-cirkel {
      gap: 2em;
    }
  }
</style>
