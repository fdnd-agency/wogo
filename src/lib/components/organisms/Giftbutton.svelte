<script>
      import logo from '$lib/assets/logo.webp';
</script>

<article class="gift-button">
    <h1>€20</h1>
    <img src={logo} height="70" width="70" alt="onder navigatie" />
</article>

<style>
.gift-button {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #3F2B21;
    padding: 3em;
    margin: auto;
    margin-top: 1em;
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
</style>