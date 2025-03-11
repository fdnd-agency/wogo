<script>
  import Logo from "../atoms/Logo.svelte";

  // Adjustable aria-attribute
  export let hidden = ''
</script>

<ul class="logo-container color-logo" aria-hidden="{hidden}"> 
  <Logo source='Vibe' alt='Vibe' />
  <Logo source='Lillet' alt='Lillet' />
  <Logo source='Pernod' alt='Pernod Ricard' />
  <Logo source='Bacardi' alt='Bacardi' />
  <Logo source='Hendricks' alt='Hendricks Dry Gin' />
  <Logo source='London' alt='The London Essence' />
  <Logo source='Absolut' alt='Absolut Vodka' />
  <Logo source='Cocacola' alt='Coca Cola' />
  <Logo source='Passoa' alt='Passoa' />
</ul>

<style>
  .logo-container {
    display: inline-block;
    animation: 35s slide infinite linear;
  }

  /* Infinite animation for the carrousel */
  @keyframes slide {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }

  /* Media Query for users with reduced-motion enabled */
  /* (Didnt use the 'no-preference' for a reason) */  
  @media (prefers-reduced-motion) {
    .logo-container {
      animation: none;
    }
    .logo-container:last-of-type {
      display: none;
    }
  }
</style>

