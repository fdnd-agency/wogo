<script>
  import ButtonLink from '../atoms/ButtonLink.svelte'

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
  <ButtonLink title="Book now" />
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
    font-weight: 600;
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
