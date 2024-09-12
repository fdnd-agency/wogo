<script>
  import { Button } from '$lib/index'
  export let width = ''
  export let height = ''
  export let fill = ''
</script>

<div class="button-cart">
  <Button type="button" aria-label="shopping cart">
    <svg {width} {height} viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21.182 5.5h-3.477v-.44C17.704 2.266 15.598 0 13 0S8.295 2.266 8.295 5.06v.44H4.818c-.452 0-.818.393-.818.88v14.74c0 .487.366.88.818.88h16.364c.452 0 .818-.393.818-.88V6.38c0-.487-.366-.88-.818-.88Zm-5.318 0h-5.728v-.44c0-1.702 1.281-3.08 2.864-3.08s2.864 1.378 2.864 3.08v.44Z"
        {fill}
      />
    </svg>
  </Button>
  <span class="button-cart-counter" id="cart-counter">0</span>
</div>

<style>
  .button-cart {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .button-cart-counter {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    border-radius: 50%;
    padding: 0.5em;
    font-size: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
