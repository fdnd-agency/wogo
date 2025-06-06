<script>
  import { onMount } from 'svelte';

  export let items;

  // Skeleton state
  let isLoading = true;

  // Cadeaubon opties
  let giftCardOptions = [];

  // Selectie uit localStorage ophalen
  let selectedAmount = null;

  onMount(() => {
    const storedAmount = localStorage.getItem('selectedAmount');
    if (storedAmount) {
      selectedAmount = parseInt(storedAmount);
    }

    // Simuleer loading (optioneel: kun je aanpassen of verwijderen als je directe data hebt)
    if (
      items &&
      Array.isArray(items) &&
      items.length > 0 &&
      items[0]?.componentsCollection?.items
    ) {
      giftCardOptions = items[0].componentsCollection.items;
    }

    isLoading = false;
  });

  // Bewaar selectie
  $: if (selectedAmount !== null) {
    localStorage.setItem('selectedAmount', selectedAmount);
  }
</script>

<h2>CADEAUKAARTEN</h2>
<p>
  Met een cadeaubon kan het nooit misgaan. Kies een bedrag en schrijf een persoonlijke boodschap.
</p>

<p>
  De cadeaubon kan worden ingewisseld voor al onze producten en diensten op onze site!
</p>

{#if isLoading}
  <div class="skeleton-container">
    {#each Array(3) as _}
      <div class="skeleton-card"></div>
    {/each}
  </div>
{:else if giftCardOptions.length > 0}
  <section class="gift-button-container">
    {#each giftCardOptions as option}
      <button
        class="gift-button {selectedAmount === option.price ? 'selected' : ''}"
        on:click={() => selectedAmount = option.price}
        aria-pressed={selectedAmount === option.price}
        aria-label={`Cadeaubon van €${option.price}`}
      >
        <h1>€{option.price}</h1>
        <img
          srcset="{option.image.url}?w=140 2x, {option.image.url}?w=70 1x"
          src="{option.image.url}"
          height="70"
          width="70"
          alt="Cadeaubon"
          loading="lazy"
        />
      </button>
    {/each}
  </section>
{:else}
  <p class="error-message">
    Er is een fout opgetreden bij het laden van de cadeaubonopties. Probeer het later opnieuw.
  </p>
{/if}

<style>
  p {
    color: #FFE5D9;
    margin: 2em;
    text-align: center;
    font-size: 14px;
  }

  .error-message {
    color: #b00020;
    background-color: #ffeaea;
    border: 1px solid #f5c2c7;
    padding: 1em;
    margin: 2em auto;
    max-width: 400px;
    text-align: center;
    border-radius: 0.5rem;
  }

  .gift-button-container {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    padding: 2em;
    gap: 1em;
    background-color: #FFE5D9;
    scrollbar-width: thin;
    scrollbar-color: #FFD4BD #FFE6D9;
  }

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
    transition: transform 0.3s ease-in-out, border 0.3s ease-in-out;
  }

  .gift-button.selected {
    border: 4px solid #F0A07A;
    transform: scale(1.05);
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

  /* 🦴 Skeleton loader styles */
  .skeleton-container {
    display: flex;
    justify-content: center;
    gap: 1em;
    padding: 2em;
  }

  .skeleton-card {
    width: 16em;
    height: 6.5em;
    background: linear-gradient(90deg, #ddd 25%, #f0f0f0 50%, #ddd 75%);
    background-size: 200% 100%;
    animation: loading 1.2s infinite;
    border-radius: 0.5rem;
  }

  @keyframes loading {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }
</style>
