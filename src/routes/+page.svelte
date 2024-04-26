<script>
  import { Hero, Carrousel, Link } from '$lib/index'
  export let data
  console.log(data)
  const newData = data?.landingPage?.[0].sectionCollection.items
</script>

<Hero items={newData?.[1]} />

<h2>
  <span>Explore the cocktail walks</span>
  <Link title="see all walks" />
</h2>

<Carrousel items={newData?.[3].carrouselCollection?.items} />

<style>
  h2 {
    display: flex;
    justify-content: space-between;
    padding: 2rem 1rem;
    font-size: 16px;
    color: var(--accent2-tertiary);
  }
</style>
