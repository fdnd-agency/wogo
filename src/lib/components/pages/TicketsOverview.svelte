<script>
  import { TicketCard } from "$lib/index";
  export let itemCollection;
</script>

<section class="tours-city">
  <h1>Tours</h1>
  <ul>
    <li>Amsterdam</li>
    <li>Rotterdam</li>
    <li>Utrecht</li>
  </ul>
</section>

<section class="tours-cards">
  <TicketCard {itemCollection} />
</section>

<style>
  .tours-city {
    margin-top: 8em;
    padding: 2em;
    width: 100%;
    background-color: var(--accent1-tertiary);
    & h1 {
      text-align: center;
      color: var(--accent2-primary);
      font-size: 3.5rem;
    }
  }

  ul {
    display: flex;
    list-style: none;
    justify-content: center;

    padding-top: 0.5em;
    padding-right: 2em;
    font-size: 14px;
    @media (min-width: 768px) {
      font-size: 16px;
    }
  }

  li {
    color: var(--accent2-quaternary);
    cursor: pointer;
    padding: 0.5em 1em 0 2em;
    &:hover {
      color: var(--accent2-primary);
    }
  }

  .tours-city ul li::after {
    content: "";
    width: 0%;
    height: 2px;
    background: var(--accent2-primary);
    display: block;
    margin: auto;
    transition: 0.5s;
  }

  .tours-city ul li:hover::after {
    width: 100%;
  }

  .tours-cards {
    width: 100%;
    min-width: 300px;
    margin: 0 auto;
    margin: 2rem 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: var(--margin);
  }
</style>
