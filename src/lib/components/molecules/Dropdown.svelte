<script>
  export let title
  export let items = [] // Default value for items is an empty array
</script>

<details>
  <summary>
    {title} <span>▼</span>
  </summary>
  <ul class="ul-dropdown">
    {#each items as item}
      <li><a href="/">{item}</a></li>
    {/each}
  </ul>
</details>

<style>
  summary {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding: 1rem;
    background-color: var(--accent2-primary);
    color: var(--accent1-primary);
    text-transform: uppercase;
    border-radius: 0.8rem;
    width: 8vw;
    list-style: none;
  }

  summary::-webkit-details-marker {
    list-style: none;
  }

  details[open] summary {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .ul-dropdown {
    position: absolute;
    background-color: var(--accent2-primary);
    width: 8vw;
    border-bottom-left-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
    text-decoration: none;
    z-index: 1;
  }

  li {
    padding: 1rem;
    list-style: none;
    text-transform: uppercase;
  }

  li:hover,
  li:hover a {
    color: var(--accent2-primary);
    background-color: var(--accent1-primary);
  }

  a {
    color: var(--accent1-primary);
    text-decoration: none;
  }
</style>
