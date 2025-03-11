<script>
  import { Link, CocktailIcon, Button, ArrowRight} from '$lib/index'
  import logo from '$lib/assets/logo.webp'
  import nix from '$lib/assets/nix-18.webp'
  export let footerItems
</script>

<footer>
  <img src={logo} height="50" width="50" alt="onder navigatie" />

  <section>
    <!-- Nieuwsbrief -->
    <form>
      <legend>{footerItems[0].newsletterTitle}</legend>
      <p>{footerItems[0].newsLetterDescription}</p>

      <label>
        Email*
        <input type="email" name="email" placeholder={footerItems[0].placeholderText} required />
      </label>
      <div class="form-button">
        <Button
          type="submit"
          variant="primary"
          title="Abonneer"
          icon={ArrowRight}
          iconColor="var(--btn-primary-text-clr)"
          size="xs"
        />
      </div>
    </form>

    <!-- Navigatie -->
    <nav>
      <ul>
        <h4>Navigatie</h4>
        {#each footerItems[0].footerLinksCollection.items as item}
          <li>
            <Link
              href={item.slug}
              aria-label={item.title}
              title={item.title}
              fontSize="1rem"
              color="var(--txt-primary-clr)"
              decoration="underline"
            ></Link>
          </li>
        {/each}
      </ul>

      <ul>
        <h4>Bronnen</h4>
        {#each footerItems[0].footerLinksCollection.items as item}
          <li>
            <Link
              href={item.slug}
              aria-label={item.title}
              title={item.title}
              fontSize="1rem"
              color="var(--txt-primary-clr)"
              decoration="underline"
            ></Link>
          </li>
        {/each}
      </ul>

      <ul>
        <h4>Social</h4>
        {#each footerItems[0].socialMediaIconsCollection.items as item}
          <li>
            <Link
              href={item.url}
              fontSize="1rem"
              aria-label={item.title}
              color="var(--txt-primary-clr)"
              decoration="underline"
            >
              {item.assetCollection.items[0].title}
            </Link>
          </li>
        {/each}
      </ul>

      <ul class="review">
        <h4>Review ons</h4>
        <li>
          <form
            aria-label="review ons op Tripadvisor"
            class="feedback"
            action="https://www.tripadvisor.nl/Attraction_Review-g188590-d25182767-Reviews-Cocktail_Walk-Amsterdam_North_Holland_Province.html"
          >
            <Button
              type="submit"
              variant="primary"
              title="Tripadvisor"
              icon={CocktailIcon}
              iconColor="var(--btn-primary-text-clr)"
              size="sm"
            />
          </form>
        </li>
        <li>
          <form
            class="feedback"
            aria-label="review ons op Trustpilot"
            action="https://uk.trustpilot.com/review/wogoamsterdam.com?utm_medium=trustbox&utm_source=TrustBoxReviewCollector"
          >
            <Button
              type="submit"
              variant="primary"
              title="Trustpilot"
              icon={CocktailIcon}
              iconColor="var(--btn-primary-text-clr)"
              size="sm"
            />
          </form>
        </li>
      </ul>
    </nav>
  </section>

  <div class="copyright">
    <p><small>© 2024 WOGO Amsterdam. Alle rechten voorbehouden.</small></p>
    <img src={nix} height="30" width="90" alt="NIX18 is niet voor niks" />
  </div>
</footer>

<style>
  legend,
  h4 {
    font-family: "LuloClean", sans-serif;
  }

  footer {
    width: 100%;
    padding: 2em 5vw;
    display: flex;
    flex-direction: column;
    gap: 2em;
    background-color: var(--accent1-tertiary);
    color: var(--txt-tertiary-clr);
  }
  h4 {
    font-size: 1em;
    line-height: 2em;
    margin-bottom: 0.5em;
  }
  legend {
    font-size: 1.7em;
  }
  form {
    display: grid;
    gap: 1em;
    width: 100%;

    @media (min-width: 48em) {
      width: 30rem;
    }
  }

  .feedback {
    margin-top: 1rem;
    width: 100%;
  }
  input:where([type="email"]) {
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

  nav {
    display: flex;
    flex-wrap: wrap;
    gap: 2em 5em;
    justify-content: space-evenly;

    @media (min-width: 48em) {
      flex-wrap: nowrap;
    }
  }

  section {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid var(--accent2-quaternary);
    padding-bottom: 3rem;
    gap: 2em;


    @media (min-width: 48em) {
      gap: 5em;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: space-evenly;
    }
  }

  ul {
    list-style: none;
  }

  div {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  li{
    margin-top: 0.5rem;
  }

  .copyright {
    justify-content: space-between;
    align-self: center;
    width: 100%;
  }
</style>
