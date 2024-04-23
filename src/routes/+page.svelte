<script>
  import { Hero } from '$lib/index'
  export let data
</script>

<Hero items={data?.landingPage?.[0]?.sectionCollection?.items?.[1] || {}} />
