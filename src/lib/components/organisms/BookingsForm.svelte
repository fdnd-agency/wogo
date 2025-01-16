<script>
  import { TextInput, TextareaInput, DatePicker, TimePicker, Image } from '$lib/index';
  import logo from '$lib/assets/logo.webp';
  export let items;

  let FormulierInfo = items[3].componentsCollection.items;
  let SocialIcons = items[4].componentsCollection.items;

  let isLoading = false;
  let isSuccess = false;
  let errorMessage = '';

  // Function to handle form submission
  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const jsEnabledField = document.getElementById("jsEnabled");

    jsEnabledField.value = "true"; // Mark JS as enabled

    isLoading = true;

    // Prepare the form data as JSON
    const formData = new FormData(form);
    const data = {};

    // Convert FormData to a plain object
    formData.forEach((value, key) => {
      data[key] = value;
    });

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),  // Send the data as a JSON payload
      });

      const result = await response.json();

      if (result.success) {
        isSuccess = true;
        setTimeout(() => {
        isSuccess = false;
        errorMessage = ''; 
        form.reset();
      }, 3000);
      } else {
        errorMessage = 'Er is iets misgegaan. Probeer het later opnieuw.';
      }
    } catch (error) {
      errorMessage = 'Er is een onverwachte fout opgetreden. Probeer het later opnieuw.';
    } finally {
      isLoading = false;
    }
  }
</script>

<section id="form">
  <form action="/api/submit" on:submit={handleSubmit} method="post" class="{errorMessage ? 'error-form' : ''}">
    <h1>Boeken</h1>
    <input type="hidden" name="jsEnabled" id="jsEnabled" value="false">
    <TextInput id="firstName" name="firstName" required>Voornaam:</TextInput>
    <TextInput id="lastName" name="lastName" required>Achternaam:</TextInput>
    <TextInput id="email" name="email" type="email" required>Email:</TextInput>
    <TextInput id="phone" name="phone" type="tel" pattern="\d{10}" required>Telefoonnummer:</TextInput>
    <TextInput id="persons" name="persons" type="number" required>Hoeveel personen?</TextInput>
    <TextareaInput id="request" name="request" placeholder="Typ hier uw bericht...">Aanvraag:</TextareaInput>
    <DatePicker id="date" name="date" required>Datum:</DatePicker>
    <TimePicker id="time" name="time" value="14:30" min="09:00" max="22:00" required>Kies een tijdstip:</TimePicker>

    {#if isLoading}
      <article class="loading-state">
        <div class="spinner"></div>
        <h2>Even Geduld</h2>
        <p>Boeking verwerken...</p>
      </article>
    {/if}

    {#if isSuccess}
      <article class="success-state">
        <svg fill="#41a146" version="1.1" xmlns="http://www.w3.org/2000/svg" width="120px" height="120px" viewBox="-30.5 -30.5 366.00 366.00" xml:space="preserve" stroke="#41a146">
          <g transform="translate(44.22529,44.22529), scale(0.71)">
            <rect x="-30.5" y="-30.5" width="366.00" height="366.00" rx="183" fill="#ffffff" strokewidth="0"/>
          </g>
          <g> 
            <path d="M152.502,0.001C68.412,0.001,0,68.412,0,152.501s68.412,152.5,152.502,152.5c84.089,0,152.5-68.411,152.5-152.5 S236.591,0.001,152.502,0.001z M152.502,280.001C82.197,280.001,25,222.806,25,152.501c0-70.304,57.197-127.5,127.502-127.5 c70.304,0,127.5,57.196,127.5,127.5C280.002,222.806,222.806,280.001,152.502,280.001z"/>
            <path d="M218.473,93.97l-90.546,90.547l-41.398-41.398c-4.882-4.881-12.796-4.881-17.678,0c-4.881,4.882-4.881,12.796,0,17.678 l50.237,50.237c2.441,2.44,5.64,3.661,8.839,3.661c3.199,0,6.398-1.221,8.839-3.661l99.385-99.385 c4.881-4.882,4.881-12.796,0-17.678C231.269,89.089,223.354,89.089,218.473,93.97z"/>
          </g>
        </svg>
        <h2>Bedankt!</h2>
        <p>Je boeking is voltooid.</p>
      </article>
    {/if}

    {#if errorMessage}
      <p class="error">{errorMessage}</p>
    {/if}

    <button type="submit">Verstuur</button>
  </form>
  <article>
    <picture>
      <img src={logo} height="150" width="150" alt="Wogo" loading="lazy" />
    </picture>
    <div>
      {#each FormulierInfo as item}
        <p>
          {#if item.icon}
            <Image
              src={item.icon.url}
              alt={item.icon.title}
              width="30"
              height="auto"
              loading="lazy"
            />
          {/if}
          {item.title}
        </p>
      {/each}
    </div>
    <ul class="social-media-list" role="list">
      {#each SocialIcons as item}
        <li>
          <a href={item.slug}>
            <Image
              src={item.asset.url}
              alt={item.asset.title}
              width="50"
              height="50"
              loading="lazy"
            />
          </a>
        </li>
      {/each}
    </ul>
  </article>
</section>

<style>
  section {
    padding-inline: 2em;
    display: flex;
    flex-direction: column;
    gap: 3em;
    padding-block: 4em;
    max-width: 90em;
    margin: auto;
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 1em;
    position: relative;
    padding: 2em;
  }

  form::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #3F2B21;
    border-radius: 8px;
    z-index: -1;
    box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
  }

  form > h1 {
    font-size: var(--fs-2xl);
    color: white;
  }

  .loading-state, .success-state {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #3F2B21;
    color: white;
    border-radius: 8px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }

  .loading-state, .success-state, h2 {
    font-size: var(--fs-2xl);
  }
  .loading-state, .success-state, p {
    font-size: var(--fs-md);
  }

  .spinner {
    border: 16px solid #f3f3f3;
    border-top: 16px solid #f7956f;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 1s linear infinite;
    margin-bottom: 2em;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }


  button {
    background-color: #f7956f;
    border: none;
    padding: 1em;
    color: white;
    cursor: pointer;
    border-radius: 5px;
  }
  
  section > article > picture,
  section > article > div {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
  section > article:nth-of-type(1) {
    display: flex;
    flex-direction: column-reverse;
    gap: 1em;
  }

  article > picture,
  article > div,
  article > ul > li {
    background-color: #3F2B21;
    border-radius: 8px;
    box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
  }

  section > article > picture {
    align-items: center;
    padding: 3em;
  }
  
  section > article > div:nth-of-type(1) {
    padding: 1em;
  }

  section > article > div:nth-of-type(1) > p {
    display: flex;
    gap: 1em;
    align-items: center;
    color: white;
  }

  article > ul {
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    gap: 0.5em
  }

  article > ul > li {
    background-color: #3F2B21;
    border-radius: 8px;
  }

  article > ul > li > a {
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 1em;
  }
  
  .error-form {
    border: 2px solid red;
    border-radius: 8px;
  }

  .error {
    color: white;
  }

  @media (min-width: 44em) {
    section {
      flex-direction: row;
      justify-content: space-between;
    }
    form {
      width: 50%;
      max-width: 50%;
    }
    section > article:nth-of-type(1) {
      flex-direction: column;
    }
  }

  @media (min-width: 55em) {
    section {
      padding-inline: 8em;
    }
  }
</style>
