<script>
  export let title = ''
  export let id = "";
</script>

<h2 id={id}>{title} </h2>

<style>
  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    color: var(--txt-tertiary-clr);
    font-size: var(--fs-xl);
    padding: 1em;
  }
</style>
