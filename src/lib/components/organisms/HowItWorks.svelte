<script>
  import { Image } from '$lib/index.js'
  export let items
</script>

<section>
  <ul>
    {#each items[1].componentsCollection.items as item, index}
      <li class="card-list card-number">
        <div class="card-body" tabIndex="0">
          <div class="image-container">
            <Image src={item.image.url} alt={item.image.title} width="/" height="/" loading="lazy"
            ></Image>
          </div>
          <div class="text-content">
            <div class="span-cirkel">
              <span aria-label="Step {index + 1}">{index + 1}</span>
              <h3>{item.title}</h3>
            </div>
            <p>{item.textParagraph}</p>
          </div>
        </div>
      </li>
    {/each}
  </ul>
</section>

<style>
  section {
    --cards: 4;
    --cardHeight: 87vh;
    --cardTopPadding: 1.5em;
    --cardMargin: 4vw;
    width: 90%;
    margin: 0 auto;
  }

  ul {
    list-style: none;
    padding-left: 0;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(var(--cards), var(--cardHeight));
    gap: var(--cardMargin);
    padding-bottom: calc(var(--cards) * var(--cardTopPadding));
    margin-bottom: var(--cardMargin);
  }

  .card-list {
    position: sticky;
    top: 0;
    padding-top: calc(var(--index) * var(--cardTopPadding));
  }

  .card-number:nth-child(1) {
    --index: 1;
  }
  .card-number:nth-child(2) {
    --index: 2;
  }
  .card-number:nth-child(3) {
    --index: 3;
  }
  .card-number:nth-child(4) {
    --index: 4;
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
    align-items: center;
    justify-content: center;
    gap: 3.5rem;
    height: var(--cardHeight);
    padding: 2rem;
    border-radius: 50px;
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.3);
    transition: all 0.5s;
  }

  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    min-width: 200px;
    max-width: 300px;
    overflow: hidden;
  }

  .text-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .span-cirkel {
    display: flex;
    flex-direction: row;
    gap: 0.5em;
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
      gap: 1rem;
      padding: 3rem;
      place-items: center;
    }

    h3 {
      font-size: 2rem;
    }

    p {
      font-size: 1.5rem;
      padding: 0 2rem;
    }

    span {
      width: 35px;
      height: 35px;
      line-height: 35px;
    }
  }
</style>
