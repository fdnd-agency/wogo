<script>
  import { Link, Image, Button } from '$lib/index'
  import Logo from '/WogoLogo.svg'

  export let footerItems
</script>

<footer>
  <div class="footer-wrapper">
    <div class="footer-logo-social">
      <Link href="/" ariaLabel=""><enhanced:img src={Logo} alt="Some alt text" /></Link>
      <ul class="social-list" role="list" aria-label="Social links">
        {#each footerItems[0].socialMediaIconsCollection.items as item}
          <li>
            <Link href={item.url}>
              <Image src={item.assetCollection.items[0].url} alt="" width="40" height="40" />
            </Link>
          </li>
        {/each}
      </ul>
    </div>

    <nav>
      {#each footerItems[0].footerLinksCollection.items as item}
        <ul aria-label="Footer" role="list">
          <li>
            <Link href={item.slug} aria-label="" title={item.title}></Link>
          </li>
        </ul>
      {/each}
    </nav>

    <div class="container-footer-form">
      <h2>{footerItems[0].newsletterTitle}</h2>
      <form action="/" method="POST">
        <label for="email">{footerItems[0].newsLetterDescription}</label>
        <div class="input-button-wrapper">
          <input
            type="email"
            id="email"
            name="email"
            required
            aria-required="true"
            placeholder={footerItems[0].placeholderText}
          />
          <Button type="submit" title="Subscribe" />
        </div>
      </form>
    </div>
  </div>
</footer>

<style>
  footer {
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
  footer nav {
    grid-area: nav;
  }
  footer li {
    padding-bottom: 0.5rem;
    list-style: none;
    color: var(--accent2-tertiary);
  }
  .container-footer-form {
    grid-area: form;
    color: var(--accent2-tertiary);
  }
  .container-footer-form form {
    display: grid;
    max-width: 500px;
    gap: var(--size-200);
  }

  h2 {
    color: var(--accent2-tertiary);
    padding-bottom: 1rem;
  }
  footer form label {
    margin-bottom: 0.5em;
  }

  .input-button-wrapper {
    display: flex;
    gap: 1em;
  }

  input:where([type='email']) {
    flex: 1;
    border-radius: 100vw;
    padding: var(--size-300) var(--size-400);
    border: 0;
    background-color: var(--accent2-quaternary);
  }

  input::placeholder {
    color: var(--accent1-tertiary);
  }

  @media (min-width: 50em) {
    .footer-wrapper {
      grid-template-areas: 'logo-social nav form';
    }
  }

  @media (max-width: 50em) {
    .footer-wrapper > * {
      margin-inline: auto;
    }
  }

  footer nav {
    columns: 2;
    gap: clamp(var(--size-200), 30vw, var(--size-900));
  }

  .social-list {
    display: flex;
    gap: var(--size-600);
  }
</style>
