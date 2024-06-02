<script>
  import ButtonLink from '../atoms/ButtonLink.svelte'
  //   import IconRoute from '../atoms/IconRoute.svelte'
  const mockData = {
    title: 'About this walk',
    details: [
      {
        icon: 'url',
        subtitle: 'Visit 3 bars',
        content:
          'For the Cocktail Walk, we have selected three of our favorite bars, all within walking distance of each other. After you have completed your booking, we will send you the cocktail guide with the directions and the menu.',
      },
      {
        icon: 'url',
        subtitle: 'What’s included?',
        content:
          'Kaartjes zijn € 24,95 en omvatten één cocktail bij elke bar die je bezoekt. Bij elke bar kunt u kiezen uit twee cocktails van ons speciale menu. Het enige wat u hoeft te doen is uw naam aan de barman te vertellen en zij zullen u een aantal fantastische cocktails serveren!',
      },
      {
        icon: 'url',
        subtitle: 'Booking information',
        content:
          'Deze walk is van maandag tot en met zondag beschikbaar en duurt 3 uur. de starttijden zijn tussen 17:00 en 22:00 uur. Klik op onderstaande knop om naar het boekingsscherm te gaan en selecteer de datum en tijd waarop u wilt starten. Wij zorgen voor de rest!',
      },
    ],
  }
</script>

<section>
  <h1>{mockData.title}</h1>
  <div class="information-container-wrapper">
    {#each mockData.details as detail, index}
      <article class="information-container">
        <img class="information-image" src="/Mock-image2.png" alt="mensen die lachen" />
        <div class="information-details">
          <div class="icon-subtitle">
            <!-- <IconRoute width="25" height="25" color="hsl(21.23, 100%, 87.25%)" /> -->
            <h2>{detail.subtitle}</h2>
          </div>
          <p>{detail.content}</p>
        </div>
      </article>
    {/each}
  </div>
</section>

<style>
  section {
    padding: 2rem;
  }

  .icon-subtitle {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    gap: 1rem;
  }

  .information-container-wrapper {
    display: grid;
  }

  article {
    margin-bottom: 3rem;
  }

  .information-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .information-image {
    display: none;
  }

  h1 {
    color: white;
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  h2 {
    color: var(--accent2-tertiary);
    font-size: 1.2rem;
  }

  p {
    color: white;
    line-height: 1.4;
    font-weight: 200;
    max-width: 30rem;
  }

  @media (min-width: 48em) {
    .information-container {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 5rem;
    }

    .information-container-wrapper {
      gap: 5rem;
    }

    .icon-subtitle {
      margin-bottom: 1rem;
    }

    .information-container:nth-child(even) {
      direction: rtl;
    }

    .information-container:nth-child(even) > .information-details,
    .information-container:nth-child(even) > .information-image {
      direction: ltr;
    }

    .information-image {
      width: 100%;
      height: auto;
      opacity: 0.3;
      display: block;
    }

    .information-image {
      order: 2;
    }

    .information-details {
      order: 1;
    }

    h1 {
      margin-top: 3rem;
      margin-bottom: 6rem;
      font-size: 2.5rem;
      text-align: center;
    }

    h2 {
      font-size: 1.8rem;
      min-width: 31rem;
    }

    p {
      font-size: 1.2rem;
      max-width: 30rem;
    }
  }

  @media (min-width: 64em) {
    section {
      padding: 4rem;
    }

    h2,
    p {
      max-width: 32rem;
    }
  }
</style>
