<script>
  import { page } from '$app/stores'
</script>

<section>
  <span>404</span>
  <h1>{$page.error.message}</h1>
  <p>{$page.error.hint}</p>
  <a href="/"
    >In the meantime, head back to our <button>Home</button> to discover more amazing experiences.</a
  >
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100vw;
    height: 100vh;

    background-color: var(--accent2-quaternary);
  }

  span {
    font-size: 7em;
    display: inline-block;
  }

  section span {
    width: auto;
    line-height: 100%;
    letter-spacing: 0.2em;
  }

  section h1 {
    font-size: 2.5em;
  }

  section p {
    font-size: 16px;
  }

  section a {
    padding: 15px 15px;
    font-size: 0.9em;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.09em;
  }
</style>
