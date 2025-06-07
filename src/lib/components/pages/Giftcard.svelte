<script>
    import { Giftinfo, Giftbutton, Giftcardinput } from '$lib/index';
      export let items

</script>

<h2>CADEAUKAARTEN</h2>
<Giftinfo/>
<Giftbutton {items}/>
<Giftcardinput/>

<style>
    h2 {
    text-align: center;
    margin-top: 1em;
    font-size: 2rem;
    color: var(--btn-primary-bg);
  }
</style>