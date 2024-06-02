<script>
</script>

<button onclick="addToCart()" aria-label="Voeg toe aan winkelwagen">
  <svg width="50" height="50" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg"
    ><g filter="url(#filter0_d_1593_3808)"
      ><path
        d="M21.182 5.5h-3.477v-.44C17.704 2.266 15.598 0 13 0S8.295 2.266 8.295 5.06v.44H4.818c-.452 0-.818.393-.818.88v14.74c0 .487.366.88.818.88h16.364c.452 0 .818-.393.818-.88V6.38c0-.487-.366-.88-.818-.88Zm-5.318 0h-5.728v-.44c0-1.702 1.281-3.08 2.864-3.08s2.864 1.378 2.864 3.08v.44Z"
        fill="#FFA378"
      /></g
    ></svg
  >
  <span class="cart-counter" id="cart-counter">0</span>
</button>

<style>
  button {
    position: relative;
    display: inline-flex;
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 24px;
  }

  span {
    position: absolute;
    top: 17px;
    right: -10px;
    background: #fff;
    color: var(--accent2-primary);
    border-radius: 50%;
    padding: 0.2em 0.5em;
    font-size: 0.7em;
  }
</style>
