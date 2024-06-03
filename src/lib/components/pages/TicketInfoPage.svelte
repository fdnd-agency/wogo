<script>
  import { LargeText, AboutThisWalk, HeaderDetailPage } from '$lib/index'
  export let data
</script>

<svelte:head>
  <title></title>
</svelte:head>

<HeaderDetailPage items={data.pageData} />
<AboutThisWalk />
<LargeText />
