<script>
  import {
    TextInput,
    TextareaInput,
    DatePicker,
    TimePicker,
    Image,
  } from "$lib/index";
  import logo from "$lib/assets/logo.webp";
  export let items;
  export let success = false;

  let FormulierInfo = items[3].componentsCollection.items;
  let SocialIcons = items[4].componentsCollection.items;

  let isLoading = false;
  let errorMessage = "";
  let activeSection = 1;

  // Function to handle form submission
  async function handleSubmit(event) {
    event.preventDefault(); //prevent page refresh

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
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // Send the data as a JSON payload
      });

      const result = await response.json();

      if (result.success) {
        success = true;
        setTimeout(() => {
          success = false;
          errorMessage = "";
          form.reset();
        }, 3000);
      } else {
        errorMessage = "Er is iets misgegaan. Probeer het later opnieuw.";
      }
    } catch (error) {
      errorMessage =
        "Er is een onverwachte fout opgetreden. Probeer het later opnieuw.";
    } finally {
      isLoading = false;
    }
  }

  function nextSection() {
    if ((activeSection === 1)) {
      activeSection++;
    }
  }

  function previousSection() {
    if (activeSection > 1) {
      activeSection--;
    }
  }

</script>

<section id="form">
  <div class="background-color">
    <h1 id="form-title">Boeken</h1>
    <form
      action="/api/submit"
      on:submit={handleSubmit}
      method="post"
      class={errorMessage ? "error-form" : ""}
    >
      <input type="hidden" name="jsEnabled" id="jsEnabled" value="false" />
      {#if activeSection === 1}
        <section class="sectionForm">
          <div class="fullName">
            <TextInput id="firstName" name="firstName" required
              >Voornaam*</TextInput
            >
            <TextInput id="lastName" name="lastName" required
              >Achternaam*</TextInput
            >
          </div>
          <TextInput id="email" name="email" type="email" required
            >Email*</TextInput
          >
          <TextInput
            id="phone"
            name="phone"
            type="tel"
            pattern="\d${10}"
            max="10"
            required
            >Telefoonnummer*</TextInput
          >
        </section>
      {/if}

      {#if activeSection === 2}
        <section class="sectionForm">
          <TextInput id="persons" name="persons" type="number" min="0" max="30" required
            >Hoeveel personen?*</TextInput
          >
          <TextareaInput
            id="request"
            name="request"
            placeholder="Typ hier uw bericht...">Aanvraag</TextareaInput
          >
          <DatePicker id="date" name="date" required>Datum*</DatePicker>
          <TimePicker
            id="time"
            name="time"
            value="14:30"
            min="09:00"
            max="22:00"
            required> Kies een tijdstip*</TimePicker
          >
        </section>
      {/if}

      <div class="buttonsSection">
        {#if activeSection !== 2}
          <button type="button" id="nextButton" on:click={nextSection}
            >Volgende</button
          >
        {/if}

        {#if activeSection > 1}
          <button type="button" id="backButton" on:click={previousSection}
            >Vorige</button
          >
        {/if}

        {#if activeSection === 2}
          <button type="submit">Verstuur</button>
        {/if}
      </div>

      {#if isLoading}
        <article class="loading-state">
          <div class="spinner"></div>
          <h2>Even Geduld</h2>
          <p>Boeking verwerken...</p>
        </article>
      {/if}

      {#if success}
        <article class="success-state">
          <svg
            fill="#41a146"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="120px"
            height="120px"
            viewBox="-30.5 -30.5 366.00 366.00"
            xml:space="preserve"
            stroke="#41a146"
          >
            <g transform="translate(44.22529,44.22529), scale(0.71)">
              <rect
                x="-30.5"
                y="-30.5"
                width="366.00"
                height="366.00"
                rx="183"
                fill="#ffffff"
                strokewidth="0"
              />
            </g>
            <g>
              <path
                d="M152.502,0.001C68.412,0.001,0,68.412,0,152.501s68.412,152.5,152.502,152.5c84.089,0,152.5-68.411,152.5-152.5 S236.591,0.001,152.502,0.001z M152.502,280.001C82.197,280.001,25,222.806,25,152.501c0-70.304,57.197-127.5,127.502-127.5 c70.304,0,127.5,57.196,127.5,127.5C280.002,222.806,222.806,280.001,152.502,280.001z"
              />
              <path
                d="M218.473,93.97l-90.546,90.547l-41.398-41.398c-4.882-4.881-12.796-4.881-17.678,0c-4.881,4.882-4.881,12.796,0,17.678 l50.237,50.237c2.441,2.44,5.64,3.661,8.839,3.661c3.199,0,6.398-1.221,8.839-3.661l99.385-99.385 c4.881-4.882,4.881-12.796,0-17.678C231.269,89.089,223.354,89.089,218.473,93.97z"
              />
            </g>
          </svg>
          <h2>Bedankt!</h2>
          <p>Je boeking is voltooid.</p>
        </article>
      {/if}

      {#if errorMessage}
        <p class="error">{errorMessage}</p>
      {/if}
    </form>
  </div>
  <article class="more-info">
    <picture>
      <img src={logo} height="150" width="150" alt="Wogo" loading="lazy" />
    </picture>

    <div class="info-list">
      <div class="info-number">
        <img src="{FormulierInfo[0].icon.url}" alt="{FormulierInfo[0].icon.title}" width="25" height="25" />
          <p class="title">
            <a href="tel:{FormulierInfo[0].title}">
            {FormulierInfo[0].title}</a>
          </p>
        </div>
        <div class="info-mail">
          <img src="{FormulierInfo[1].icon.url}" alt="{FormulierInfo[1].icon.title}" width="25" height="25" />
          <p class="title">
            <a href="mailto:{FormulierInfo[1].title}">
              {FormulierInfo[1].title}</a>
          </p> 
        </div>
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
    gap: 3em;
    max-width: 83em;
  }

  .background-color {
    background-color: var(--accent1-tertiary);
    padding: 0 2rem .5em;
    border-radius: 0.5em;
    margin: 1em;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1em;
    position: relative;
    padding: 2em;
    background-color: var(--accent1-tertiary);
    margin-bottom: 2em;
    border-radius: 0.5em;
    border: solid var(--accent2-tertiary);
  }

  .sectionForm {
    display: block;
  }

  #form-title {
    font-size: var(--fs-xl);
    color: var(--accent2-tertiary);
    background-color: var(--accent1-tertiary);
    box-sizing: border-box;
    width: 4.2em;
    padding-left: 0.2em;
    /* positioning */
    position: relative;
    top: 1em;
    z-index: 2;
    margin: 0.5em 0.2em;
    left: 0.5em;
  }

  .fullName {
    display: flex;
    justify-content: space-between;
    gap: 1em;
  }

  .loading-state,
  .success-state {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #3f2b21;
    color: white;
    border-radius: 8px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }

  .loading-state,
  .success-state,
  h2 {
    font-size: var(--fs-2xl);
  }
  .loading-state,
  .success-state,
  p {
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
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .buttonsSection {
    display: flex;
    justify-content: space-around;
  }

  button {
    background-color: var(--btn-primary-bg);
    border: none;
    padding: 0.5em;
    color: black;
    font-weight: bold;
    font-size: 1em;
    cursor: pointer;
    border-radius: 25px;
    width: 8em;
  }

  #nextButton,
  #backButton {
    background-color: var(--accent1-quaternary);
  }

  #nextButton:hover,
  #backButton:hover {
    background-color: var(--btn-primary-bg);
  }

  .more-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #3f2b21;
    padding: 2em;
  }

  .more-info picture img {
    margin: 3em 0;
  }

  .info-list {
    margin: 2em 0;
  }
.info-number a, .info-mail a {
  color: #fff;
  text-decoration: none;
  margin-left: .5em;
}
.info-number, .info-mail {
    display: flex;
    margin: 1em 0;
}
  .info {
    display: flex;
    margin: 1em;
  }

  .info p {
    color: #f3f3f3;
    display: flex;
  }

  .info .title {
    margin-left: 1em;
  }

  .social-media-list {
    display: flex;
    list-style: none;
    margin: 2em 0;
  }

  .social-media-list li {
    margin-right: 1em;
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
      justify-content: space-between;
      display: flex;
      flex-direction: row-reverse;
    }
    section > article:nth-of-type(1) {
      flex-direction: column;
      min-height: max-content;
    }
    #form {
      flex-direction: row-reverse;
    }
  }

  @media (min-width: 55em) {
    form {
      justify-content: space-around;
      min-height: 23em;
      width: 29em;
    }
  }
  @media (max-width: 768px) {
    .fullName {
      flex-direction: column;
    }
  }
</style>
