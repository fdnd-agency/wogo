<script>
  import { Link, Image, Button } from '$lib/index'
  export let footerItems
</script>

<footer>
  <div class="footer-wrapper">
    <div class="footer-logo-social">
      <Link href="/" ariaLabel={footerItems[0].logo.title}
        ><Image
          src={footerItems[0].logo.url}
          alt={footerItems[0].logo.description}
          width="100"
          height="100"
        /></Link
      >

      <ul class="social-list" role="list" aria-label="Social links">
        {#each footerItems[0].socialMediaLinksCollection.items as item}
          <li>
            <Link href={item.mediaUrl} ariaLabel={item.mediaCollection.items[0].title}
              ><Image
                src={item.mediaCollection.items[0].url}
                alt={item.mediaCollection.items[0].description}
                width="40"
                height="40"
              /></Link
            >
          </li>
        {/each}
      </ul>
    </div>

    <nav>
      <ul aria-label="Footer" role="list">
        {#each footerItems[0].footerLinksCollection.items as link}
          <li><Link href={link.url} ariaLabel={link.title} title={link.internalName} /></li>
        {/each}
      </ul>
    </nav>

    <div class="container-footer-form">
      <h2>{footerItems[0].formNewsletterTitle}</h2>
      <form action="/" method="POST">
        <label for="email">{footerItems[0].formLabel}</label>
        <div class="input-button-wrapper">
          <input
            type="email"
            id="email"
            name="email"
            required
            aria-required="true"
            placeholder="Enter your email"
          />
          <Button type="submit" title={footerItems[0].formButtonText} />
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
