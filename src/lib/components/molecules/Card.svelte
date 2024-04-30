<script>
  import { ButtonLink, Image } from '$lib/index'
  export let title
  export let price
  export let buttonText
  export let icon
  export let locationDescription
</script>

<a href="/">
  <article>
    <price class="price">€ {price}</price>
    <h3>{title}</h3>
    <p>
      <Image fill="#fff" src={icon.url} alt="location icon" width="24" height="24">{icon}</Image
      >{locationDescription}
    </p>
    <div class="button-container">
      <ButtonLink title={buttonText}></ButtonLink>
    </div>
  </article>
</a>

<style>
  a {
    display: block;
    position: relative;
    text-decoration: none;
    scroll-snap-align: center;
    border-radius: 0.8rem;
    padding: 2rem;
    background-color: var(--accent1-secondary);
    color: var(--accent2-tertiary);
  }

  article {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 0.5rem;
  }
  .price {
    font-size: 24px;
    font-weight: 600;
  }
  .button-container {
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
  }

  p {
    font-size: 24px;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }

  h3 {
    font-size: 28px;
  }
</style>
