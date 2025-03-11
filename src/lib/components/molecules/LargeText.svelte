<script>
  import { Button, ArrowRight } from '$lib/index'

  const mockData = {
    largetext: [
      {
        title: 'We make walking a lot more fun. Got excited?',
        textParagraph: '',
      },
    ],
  }
</script>

<section>
  <p>{mockData.largetext[0].title}</p>
  <Button
    type="button"
    variant="primary"
    title="book a walk"
    icon={ArrowRight}
    size="lg"
    on:click
  />
</section>

<style>
  section {
    width: 100%;
    padding: 2rem;
  }

  p {
    font-size: 2rem;
    color: white;
    text-align: left;
    margin-bottom: 2rem;
  }

  /* Large screens */
  @media (min-width: 55em) {
    section {
      margin: 0 auto;
      width: 50%;
    }
    p {
      font-size: 3rem;
    }
  }
</style>
