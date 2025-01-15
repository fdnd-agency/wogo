<script>
  import { RotterdamTicketHero, Details} from '$lib/index'
  export let items
</script>
  
<svelte:head>
  <title></title>
</svelte:head>

<RotterdamTicketHero {items} />
<Details {items} />