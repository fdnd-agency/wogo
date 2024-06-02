<script>
  import AboutThisWalk from '../organisms/AboutThisWalk.svelte'
  import HeaderDetailPage from '../organisms/HeaderDetailPage.svelte'
  export let data
</script>

<svelte:head>
  <title></title>
</svelte:head>

<HeaderDetailPage items={data.pageData} />
<!-- <AboutThisWalk items={data.pageData} /> -->
<AboutThisWalk />
