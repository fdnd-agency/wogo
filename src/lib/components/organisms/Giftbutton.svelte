<script>
  export let items;
  let giftCardOptions = items[0].componentsCollection.items;

  let selectedAmount = null;
</script>

<h2>CADEAUKAARTEN</h2>
<p>
  Met een cadeaubon kan het nooit misgaan. Kies een bedrag en schrijf een persoonlijke boodschap.
</p>

<p>
  De cadeaubon kan worden ingewisseld voor al onze producten en diensten op onze site!
</p>

<section class="gift-button-container">
  {#each giftCardOptions as option}
    <button
      class="gift-button {selectedAmount === option.price ? 'selected' : ''}"
      on:click={() => selectedAmount = option.price}
    >
      <h1>€{option.price}</h1>
      <img src={option.image.url} height="70" width="70" alt="onder navigatie" />
    </button>
  {/each}
</section>

<style>
  p {
    color: #FFE5D9;
    margin: 2em;
    text-align: center;
    font-size: 14px;
  }

  .gift-button-container {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    padding: 2em;
    gap: 1em;
    background-color: #FFE5D9;
  }

  .gift-button {
    flex: 0 0 auto;
    scroll-snap-align: center;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #3F2B21;
    border: none;
    padding: 4em;
    height: 6.5em;
    width: 16em;
    border-radius: 0.5rem;
    margin-right: 1em;
    box-shadow: rgba(0, 0, 0, 0.6) 0px 3px 8px;
  }

  .gift-button.selected {
    border: 4px solid #F0A07A;
    transform: scale(1.05);
    transition: transform 0.3s ease-in-out, border 0.3s ease-in-out;
  }

  h1 {
    position: absolute;
    top: 7.5%;
    right: 5%;
    color: var(--txt-tertiary-clr);
    font-weight: 1000;
    font-size: 1.4rem;
  }

  h2 {
    text-align: center;
    margin-top: 1em;
    font-size: 2rem;
    color: var(--btn-primary-bg);
  }

  /* Voor Chrome, Safari, Edge */
  .gift-button-container::-webkit-scrollbar {
    height: 10px;
  }

  .gift-button-container::-webkit-scrollbar-track {
    background-color: #FFE6D9;
    border-radius: 10px;
  }

  .gift-button-container::-webkit-scrollbar-thumb {
    background-color: #FFD4BD;
    border-radius: 10px;
    border: 2px solid transparent;
    background-clip: content-box;
  }

  /* Voor Firefox */
  .gift-button-container {
    scrollbar-width: thin;
    scrollbar-color: #FFD4BD #FFE6D9;
  }
</style>
