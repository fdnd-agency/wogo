<script>
  import { Image, Button, ArrowRight } from "$lib/index";

  export let items;
  const { textParagraph, asset } = items;
</script>

<div class="img-wrapper">
  <Image src={asset.url} alt={asset.title} width="65" height="65" />
</div>
<section>
  <h2>{textParagraph}</h2>
  <Button
    type="button"
    variant="mobile"
    title="buya gift"
    icon={ArrowRight}
    iconColor="var(--btn-primary-text-clr)"
    size="lg"
  />
</section>

<style>
  section {
    display: flex;
    border: 3px solid var(--accent2-primary);
    border-radius: 3rem;
    padding: 2rem 1rem 2rem;
    justify-content: center;
    flex-direction: column;
    width: 20rem;
    margin-bottom: 2rem;
  }

  .img-wrapper :global(img) {
    position: relative;
    top: 2.28rem;
    background-color: var(--page-bg-color);
  }

  h2 {
    color: var(--accent2-tertiary);

    text-align: center;
    padding: 1.5rem 0;
  }

  @media (min-width: 48em) {
    h2 {
      max-width: 630px;
      font-size: var(--fs-lg);
    }
    .img-wrapper :global(img) {
      left: 12rem;
      position: relative;
      bottom: 7.5rem;
      top: unset;
    }
  }
</style>
