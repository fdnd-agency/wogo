<script>
  import { ButtonLink } from '$lib/index'
  export let items
</script>

<section>
  {#each items as item}
    <article>
      <div>
        <h3>{item.title}</h3>
        <p>
          {item.description}
        </p>
      </div>
      <ButtonLink href="/" title={item.buttonText} />
    </article>
  {/each}
</section>

<style>
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 4rem;
    width: 100%;
    padding: 0 2rem;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 36px;
    padding-bottom: 40px;
  }

  h3 {
    color: var(--accent2-primary);
    font-size: 32px;
    line-height: 40px;
    font-weight: 500;
    text-align: left;
  }

  p {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color: var(--accent2-secondary);
    text-align: left;
  }

  @media (min-width: 48em) {
    article {
      width: 60%;
    }
  }
</style>
