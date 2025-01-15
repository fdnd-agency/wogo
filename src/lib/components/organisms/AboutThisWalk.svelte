<script>
  import { IconRoute, TicketDetails } from '$lib/index'

  const mockData = {
    title: 'About this walk',
    details: [
      {
        icon: 'url',
        subtitle: 'Visit 3 bars',
        textParagraph:
          'For the Cocktail Walk, we have selected three of our favorite bars, all within walking distance of each other. After you have completed your booking, we will send you the cocktail guide with the directions and the menu.For the Cocktail Walk, we have selected three of our favorite bars, all within walking distance of each other.',
      },
      {
        icon: 'url',
        subtitle: 'What’s included?',
        textParagraph:
          'Kaartjes zijn € 24,95 en omvatten één cocktail bij elke bar die je bezoekt. Bij elke bar kunt u kiezen uit twee cocktails van ons speciale menu. Het enige wat u hoeft te doen is uw naam aan de barman te vertellen en zij zullen u een aantal fantastische cocktails serveren!',
      },
      {
        icon: 'url',
        subtitle: 'Booking information',
        textParagraph:
          'Deze walk is van maandag tot en met zondag beschikbaar en duurt 3 uur. de starttijden zijn tussen 17:00 en 22:00 uur. Klik op onderstaande knop om naar het boekingsscherm te gaan en selecteer de datum en tijd waarop u wilt starten. Wij zorgen voor de rest!',
      },
    ],
  }
</script>

<section>
  <h1>{mockData.title}</h1>
  <TicketDetails />
  {#each mockData.details as detail}
    <article class="information">
      <img class="information-image" src="/Mock-image2.webp" alt="mensen die lachen" />
      <div class="information-details">
        <div class="icon-subtitle">
          <IconRoute width="25" height="25" color="hsl(19.52, 100%, 75.29%)" />
          <h2>{detail.subtitle}</h2>
        </div>
        <p>{detail.textParagraph}</p>
      </div>
    </article>
  {/each}
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

  article {
    margin-bottom: 3rem;
  }

  .information-image {
    display: none;
  }

  /* Typography */
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
    max-width: 32rem;
    text-align: left;
  }

  /* Large screens */
  @media (min-width: 55em) {
    .information {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      align-items: center;
      justify-content: space-around;
      gap: 3rem;
      max-width: 80em;
      margin: 0 auto;
    }

    .information:nth-child(even) {
      direction: rtl;
    }

    .information:nth-child(even) > * {
      direction: ltr;
    }

    .information-image {
      width: 100%;
      display: block;
      height: auto;
      opacity: 0.3;
    }

    .information-details {
      margin: 0 auto;
    }

    h1 {
      margin-top: 3rem;
      font-size: 2.5rem;
      text-align: center;
    }

    h2 {
      font-size: 1.6rem;
    }

    p {
      font-size: 1.1rem;
    }
  }
</style>
