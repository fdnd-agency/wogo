<script>
  import { Image, Button, ArrowRight } from '$lib/index'

  export let items
  const { textParagraph, asset } = items
</script>

<section>
  <Image src={asset.url} alt={asset.title} width="350" height="350" />
  <h2>{textParagraph}</h2>
  <Button
    type="button"
    variant="primary"
    title="buy a gift"
    icon={ArrowRight}
    iconColor="var(--btn-primary-text-clr)"
    size="lg"
  />
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    gap: 4rem;
    width: 100%;
    min-height: 90vh;
    padding: 5rem 0;
  }

  h2 {
    min-width: 300px;
    max-width: 350px;
    color: var(--accent2-tertiary);
    font-size: var(--fs-xl);
    text-align: left;
  }

  @media (min-width: 48em) {
    h2 {
      max-width: 630px;
      font-size: var(--fs-2xl);
    }
  }
</style>
