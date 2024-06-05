<script>
  import { Image } from '$lib/index.js'
  export let items
</script>

<section>
  {#each items[2].componentsCollection.items as item, index}
    <article>
      <div>
        <h3><span>{index + 1}</span>{item.title}</h3>
        <p>{item.textParagraph}</p>
      </div>
      <Image src="/" alt="iphone" width="" height=""></Image>
    </article>
  {/each}
</section>

<style>
  section {
    max-width: 80%;
    margin: 0 auto;
  }

  article {
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: sticky;
    top: 20px;
    background-color: var(--accent2-tertiary);
    color: var(--page-bg-color);
    padding: 2.5rem;
    border-radius: 10px;
    transition: all 0.5s;
  }

  article:nth-child(1) {
    background-color: #ffe5d9;
  }

  article:nth-child(2) {
    background-color: #ffd6c5;
    top: 130px;
  }
  article:nth-child(3) {
    background-color: #cab2a6;
    top: 230px;
  }
  article:nth-child(4) {
    background-color: #cba38f;
    top: 330px;
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
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--page-bg-color);
    width: 24px;
    height: 24px;
    border-radius: 50%;
    color: var(--accent2-quaternary);
  }

  @media (min-width: 48em) {
    h3 {
      font-size: 32px;
    }
    p {
      padding: 1rem 0;
      font-size: 24px;
    }
  }
</style>
