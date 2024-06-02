<script>
  const mockData = {
    details: [
      {
        price: '€25,95',
        duration: '3 hours',
        startTimes: '17:00 - 22:00',
        days: 'ma - zo',
        cocktails: '3 cocktails',
        avaiable: 'till August 24',
      },
    ],
  }
</script>

<!-- Ticket details -->
<ul>
  {#each mockData.details as detail}
    {#each Object.entries(detail) as [key, value]}
      <li>{value}</li>
    {/each}
  {/each}
</ul>

<style>
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 2rem;
  }

  li {
    list-style: none;
    padding: 0.5rem 1rem;
    color: white;
    background-color: var(--accent1-tertiary);
    border-radius: 50px;
  }

  /* large screens */
  @media (min-width: 55em) {
    ul {
      justify-content: center;
      padding-bottom: 2rem;
      gap: 2rem;
    }
  }
</style>
