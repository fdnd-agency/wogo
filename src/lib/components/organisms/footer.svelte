<script>
  import { Link, WogoLogo, Button, Image } from '$lib'
  //   export let items
  //   console.log(items)
</script>

<footer>
  <div class="footer-wrapper">
    <div class="footer-logo-social">
      <a href="#" aria-label="home"><Image src="" alt="" />img-logo</a>

      <ul class="social-list" role="list" aria-label="Social links">
        <li>
          <a href="/" aria-label="home"><Image src="" alt="" />ICON</a>
        </li>
      </ul>
    </div>

    <nav>
      <ul class="flow" style="--flow-spacer: 1em" aria-label="Footer" role="list">
        <li><Link href="/" title="home" /></li>
      </ul>
    </nav>

    <div class="container-footer-form">
      <h2>Get your newsletters for all the latest news, bars and events</h2>
      <form action="JOUW_VERWERKINGSSCRIPT_URL" method="POST">
        <label for="email">E-mailadres:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          aria-required="true"
          placeholder="jouwemail@voorbeeld.com"
        />
        <label for="naam">Volledige naam:</label>
        <input
          type="text"
          id="naam"
          name="naam"
          required
          aria-required="true"
          placeholder="Jouw naam"
        />

        <button type="submit">Inschrijven</button>
      </form>
    </div>
  </div>
</footer>

<style>
  footer {
    border: 1px solid green;
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: var(--size-700);
  }

  .footer-wrapper {
    display: grid;
    gap: var(--size-700);
    grid-template-areas:
      'form'
      'nav'
      'logo-social';
  }

  .footer-logo-social {
    grid-area: logo-social;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    gap: var(--size-700);
  }

  /* social list */

  .social-list {
    display: flex;
    gap: var(--size-600);
  }

  .social-icon {
    width: var(--size-600);
    aspect-ratio: 1;
    fill: var(--accent2-tertiary);
  }

  .social-list a:is(:hover, :focus) .social-icon {
    fill: var(--accent2-primary);
  }

  footer nav {
    grid-area: nav;
  }

  footer nav {
    columns: 2;
    gap: clamp(var(--size-200), 30vw, var(--size-900));
  }

  footer li {
    list-style: none;
  }

  .footer nav a {
    color: var(--accent2-tertiary);
    text-decoration: none;
  }

  .footer nav a:is(:hover, :focus) {
    color: var(--accent2-primary);
  }

  .container-footer-form {
    display: grid;
    align-content: space-between;
    grid-area: form;
    gap: var(--size-200);
    color: var(--accent2-tertiary);
  }

  .container-footer-form h2 {
    color: var(--accent2-primary);
  }

  .container-footer-form form {
    display: flex;
    flex-direction: column;
    gap: var(--size-300);
  }

  input:is([type='text'], [type='email']) {
    border-radius: 100vw;
    border: 0;
    padding: var(--size-300) var(--size-400);
  }

  @media (min-width: 50em) {
    .footer-wrapper {
      grid-template-areas: 'logo-social nav form';
    }

    .footer-logo-social {
      align-items: flex-start;
      justify-content: space-between;
      gap: var(--size-700);
    }

    .footer-wrapper > * {
      margin-inline: auto;
    }
  }
</style>
