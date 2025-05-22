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
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    margin: 2em;
}
.gift-button {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #3F2B21;
    padding: 4em;
    margin-top: 1em;
    margin-right: 3em;
    margin-bottom: 1em;
    height: 6.5em;
    width: 14em;
    border-radius: 0.5rem;
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
</style>