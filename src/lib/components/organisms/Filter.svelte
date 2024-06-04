<script>
  import { page } from '$app/stores'
  import { onMount } from 'svelte'

  let filter = []
  export let cities

  onMount(() => {
    const urlSearchParams = new URLSearchParams($page.url.search)
    filter = urlSearchParams.getAll('locatie') || []
  })

  function applyFilter(event) {
    const locatie = event.target.value
    const url = new URL(window.location)

    if (locatie) {
      url.searchParams.set('locatie', locatie)
    } else {
      url.searchParams.delete('locatie')
    }

    window.location = url
  }
</script>

<section>
  <form>
    <select name="locatie" id="locatie-select" tabindex="0" on:change={applyFilter}>
      <option value="" selected={!filter.length}>Alle locaties</option>
      {#each cities as city}
        <option value={city} selected={filter.includes(city)}>
          {city}
        </option>
      {/each}
    </select>
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
  }

  form select {
    padding: 0.5rem;
    border: none;
    background-color: var(--accent2-primary);
    color: var(--accent1-primary);
    font-weight: 900;
    text-transform: uppercase;
    border-radius: 0.8rem;
  }

  option {
    font-weight: 900;
  }
</style>
