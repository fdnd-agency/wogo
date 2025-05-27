<script>
      import logo from '$lib/assets/logo.webp';
</script>
<h2>CADEAUKAARTEN</h2>
<section class="gift-button-container">


<article class="gift-button">
    <h1>€20</h1>
    <img src={logo} height="70" width="70" alt="onder navigatie" />
</article>

<article class="gift-button">
    <h1>€50</h1>
    <img src={logo} height="70" width="70" alt="onder navigatie" />
</article>

<article class="gift-button">
    <h1>€100</h1>
    <img src={logo} height="70" width="70" alt="onder navigatie" />
</article>
</section>

<style>
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
    padding: 4em;
    height: 6.5em;
    width: 14em;
    border-radius: 0.5rem;
    margin-right: 1em;
    box-shadow: rgba(0, 0, 0, 0.6) 0px 3px 8px;
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
    font-size: 2.5rem;
    color: var(--btn-primary-bg);
}

/* Voor Chrome, Safari, Edge */
.gift-button-container::-webkit-scrollbar {
    height: 10px;
}

.gift-button-container::-webkit-scrollbar-track {
    background-color: #FFE6D9; /* Achtergrondkleur van de hele scrollbar */
    border-radius: 10px;
}

.gift-button-container::-webkit-scrollbar-thumb {
    background-color: #FFD4BD; /* Kleur van de 'duim' (het scrollblokje) */
    border-radius: 10px;
    border: 2px solid transparent;
    background-clip: content-box;
}

/* Voor Firefox */
.gift-button-container {
    scrollbar-width: thin;
    scrollbar-color: #FFD4BD #FFE6D9; /* duimkleur trackkleur */
}

</style>