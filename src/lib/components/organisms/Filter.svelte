<script>
  import { page } from '$app/stores'
  import { onMount } from 'svelte'

  let filter = []
  export let cities

  onMount(() => {
    const urlSearchParams = new URLSearchParams($page.url.search)
    filter = urlSearchParams.getAll('locatie') || []
  })

  function applyFilter() {
    return function (event) {
      event.preventDefault()
      const formData = new FormData(event.target)
      const locatie = formData.get('locatie')
      const url = new URL(window.location)

      if (locatie) {
        url.searchParams.set('locatie', locatie)
      } else {
        url.searchParams.delete('locatie')
      }

      window.location = url
    }
  }
</script>

<section>
  <form on:submit={applyFilter()}>
    <select name="locatie" id="locatie-select" tabindex="0">
      <option value="" selected={!filter}>Alle locaties</option>
      {#each cities as city}
        <option value={city} selected={filter === city}>
          {city}
        </option>
      {/each}
    </select>
    <button type="submit">Pas filter toe</button>
  </form>
</section>

<style>
  section {
    margin: 2rem 0;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  form {
    display: flex;
    gap: 1rem;
    font-weight: bold;
  }

  form select,
  form button {
    padding: 0.5rem;
    border: none;
    background-color: var(--accent2-primary);
    color: var(--accent1-primary);
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 0.8rem;
  }
</style>
