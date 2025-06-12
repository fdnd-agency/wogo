<script>
  import { Giftinfo, Giftbutton, Giftcardinput } from "$lib/index";
  export let items;
</script>

<h2>CADEAUKAARTEN</h2>

<!-- MOBILE layout -->
<div class="mobile">
  <Giftinfo />
  <Giftbutton {items} />
  <Giftcardinput />
</div>

<!-- DESKTOP layout -->
<div class="desktop">
  <Giftbutton {items} />
  <div class="side-by-side">
    <Giftinfo />
    <Giftcardinput />
  </div>
</div>

<style>
  .mobile {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .desktop {
    display: none;
  }

  @media (min-width: 768px) {
    .mobile {
      display: none;
    }

    .desktop {
      display: flex;
      flex-direction: column;
    }

    .side-by-side {
      display: flex;
    }

    .side-by-side > :global(*) {
      flex: 1;
    }
  }

  h2 {
    text-align: center;
    margin-top: 1em;
    font-size: 2rem;
    color: var(--btn-primary-bg);
  }
</style>
