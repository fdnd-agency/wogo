<script>
  import AboutThisWalk from '../organisms/AboutThisWalk.svelte'
  import HeaderDetailPage from '../organisms/HeaderDetailPage.svelte'
  import LargeText from '../molecules/LargeText.svelte'
  export let data
</script>

<svelte:head>
  <title></title>
</svelte:head>

<HeaderDetailPage items={data.pageData} />
<AboutThisWalk />
<LargeText />
