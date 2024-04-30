<script>
  import { Image } from '$lib/index.js'
  export let items
</script>

<section>
  {#each items as item}
    <article>
      <div>
        <h3><span>{item.cardNumber}</span>{item.title}</h3>
        <p>
          {item.description}
        </p>
      </div>
      <Image
        src="https://www.pngall.com/wp-content/uploads/15/iPhone-Frame-PNG-Images.png"
        alt="iphone"
        width=""
        height=""
      ></Image>
    </article>
  {/each}
</section>

<style>
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
  section {
    padding-top: 280px;
    padding-bottom: 280px;
    max-width: 750px;
    margin: 0 auto;
  }

  article {
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: sticky;
    top: 180px;
    background-color: var(--accent2-tertiary);
    color: var(--page-bg-color);
    padding: 2.5rem;
    border-radius: 10px;
    margin-bottom: 20px;
  }

  article:nth-child(2n) {
    top: 280px;
  }

  article:nth-child(3n) {
    top: 380px;
  }

  @media (min-width: 48em) {
    h3 {
      font-size: 32px;
    }
    p {
      padding: 40% 0;
      font-size: 24px;
    }
  }
</style>
