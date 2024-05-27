<script>
  import HeaderDetailPage from '../organisms/HeaderDetailPage.svelte'
  export let data
  console.log(data)
</script>

<svelte:head>
  <title></title>
</svelte:head>

<HeaderDetailPage items={data.pageData} />
