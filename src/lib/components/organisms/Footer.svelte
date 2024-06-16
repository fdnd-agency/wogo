<script>
  import { Link, Image, Button, ArrowRight } from '$lib/index'
  import logo from '$lib/assets/logo.webp'
  export let footerItems
</script>

<footer class="footer">
  <div class="footer-wrapper">
    <div class="footer-logo-social">
      <ul class="social-media-list" role="list" aria-label="Social links">
        {#each footerItems[0].socialMediaIconsCollection.items as item}
          <li>
            <Link href={item.url}>
              <Image
                src={item.assetCollection.items[0].url}
                height="50"
                width="50"
                alt={item.assetCollection.items[0].title}
                loading="lazy"
              />
            </Link>
          </li>
        {/each}
      </ul>
      <p class="footer-text">Follow us:</p>
      <img src={logo} height="100" width="100" alt="Wogo Logo" />
    </div>
    <div class="footer-section">
      <nav>
        <ul aria-label="Footer" role="list">
          {#each footerItems[0].footerLinksCollection.items as item}
            <li>
              <Link href={item.slug} aria-label={item.title} title={item.title}></Link>
            </li>
          {/each}
        </ul>
      </nav>
    </div>
    <div class="footer-newsletter">
      <h3 class="newsletter-title">{footerItems[0].newsletterTitle}</h3>
      <form action="https://www.freecodecamp.org/email-submit" id="form" method="post">
        <label for="email">{footerItems[0].newsLetterDescription}</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder={footerItems[0].placeholderText}
          required
        />
        <Button
          type="submit"
          variant="primary"
          title="Subscribe"
          icon={ArrowRight}
          iconColor="var(--btn-primary-text-clr)"
          size="sm"
        />
      </form>
    </div>
  </div>
  <div class="copyright">
    <p class="copyright-text">copyright test</p>
  </div>
</footer>

<style>
  /* Mobile  */
  footer {
    padding: 0 5vw;
  }

  .footer-wrapper {
    display: grid;
    gap: 3rem;
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
    gap: 0.5rem;
  }

  footer nav {
    grid-area: nav;
    columns: 2;
    gap: clamp(1rem, 30vw, 2rem);
  }

  .footer-text {
    margin: 0.625rem 0;
    color: var(--accent2-quaternary);
  }

  footer li {
    padding: 1rem;
    font-size: var(--fs-md);
    text-transform: lowercase;
    list-style: none;
    color: var(--accent2-tertiary);
  }

  .social-media-list {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  /* Footer newsletter */
  .footer-newsletter {
    grid-area: form;
    flex: 0 1 340px;
  }

  label {
    color: var(--accent2-quaternary);
  }

  .footer-newsletter h3 {
    color: var(--accent2-primary);
  }
  input:where([type='email']) {
    display: block;
    margin: 1rem 0;
    font-size: 1rem;
    font-family: inherit;
    padding: 1rem;
    width: 100%;
    border: 0;
    background-color: var(--accent2-quaternary);
    border-radius: 10px;
  }

  input::placeholder {
    color: var(--accent1-tertiary);
  }

  .footer-text,
  .newsletter-title {
    margin-bottom: 1rem;
  }

  .copyright {
    background-color: var(--sec-color-alpha);
    text-align: center;
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
    font-size: 0.875rem;
  }

  /* Desktop */
  @media screen and (min-width: 48em) {
    footer {
      padding: 0 3vw;
    }

    .footer-wrapper {
      grid-template-areas: 'logo-social nav nav form';
    }

    .footer nav {
      gap: clamp(2rem, 30vw, 4rem);
    }

    .footer-wrapper > * {
      margin-inline: auto;
    }
  }
</style>
