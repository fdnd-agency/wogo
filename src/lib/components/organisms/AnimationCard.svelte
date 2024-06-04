<script>
  import { Image } from '$lib/index.js'
  export let items
</script>

<section>
  <ul>
    {#each items[2].componentsCollection.items as item, index}
      <li class="card-list card-number">
        <div class="card-body">
          <div class="image-container">
            <Image src={item.image.url} alt="iphone" width="" height=""></Image>
          </div>
          <div class="text-content">
            <h3><span>{index + 1}</span>{item.title}</h3>
            <p>{item.textParagraph}</p>
          </div>
        </div>
      </li>
    {/each}
  </ul>
</section>

<style>
  section {
    background: green;
    --cards: 4;
    --cardHeight: 87vh;
    --cardTopPadding: 1.5em;
    --cardMargin: 4vw;
    width: 90%;
    margin: 0 auto;
  }

  ul {
    background-color: red;
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
    background-color: purple;
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
    background-color: #ffe5d9;
  }
  .card-number:nth-child(2) .card-body {
    background-color: #ffd6c5;
  }
  .card-number:nth-child(3) .card-body {
    background-color: #cab2a6;
  }
  .card-number:nth-child(4) .card-body {
    background-color: #cba38f;
  }

  .card-number .card-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .card-body {
    background-color: orange;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: var(--cardHeight);
    padding: 30px;
    border-radius: 50px;
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.3);
    transition: all 0.5s;
  }

  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    min-width: 200px;
    max-width: 300px;
    overflow: hidden;
  }

  h3 {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 0;
    font-weight: 700;
  }

  span {
    font-size: 16px;
    background-color: var(--page-bg-color);
    width: 24px;
    height: 24px;
    border-radius: 50%;
    color: var(--accent2-quaternary);
  }

  @media (min-width: 48em) {
    .card-number .card-body {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

    .text-content {
      text-align: right;
      padding-right: 20px;
    }
  }
</style>
