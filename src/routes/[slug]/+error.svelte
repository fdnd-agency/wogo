<script>
  import { Button } from '$lib/index'
</script>

<section id="error">
  <h1>404</h1>
  <p>
    "Looks like you've taken a wrong turn at the bar. This page isn't available, but 
    our cocktail menu is still on point. Let’s get you back to something delicious!"
  </p>
  <Button
    style="width: 25%;"
    href="/home" 
    variant="primary" 
    title="Back to home" 
    size="sm" 
  />
</section>

<style>
  * {
    letter-spacing: 0.09em;
  }

  #error {
    width: 100vw;
    height: 100vh;
		display: flex;
    position: relative;
		align-items: center;
		flex-direction: column;
		justify-content: center;
    background: var(--page-bg-color);
  }
  h1 {
    font-size: 7rem;
    font-weight: 900;
    color: var(--accent2-primary);
  }
  p {
    max-width: 80ch;
    font-size: 1.1em;
    font-weight: 600;
    font-style: italic;
    margin-bottom: 10vh;
    color: var(--txt-quaternary-clr);
    margin: 0 3em 10vh 3em;
  }
</style>
