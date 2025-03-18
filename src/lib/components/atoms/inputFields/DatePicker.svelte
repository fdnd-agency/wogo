<script>
  export let id;
  export let name;
  export let required = false;
</script>

<label for={id}><slot /></label>
<input type="date" id={id} name={name} {required} />

<style>
  input {
    width: 100%;
    padding: 0.7em;
    border: solid 1px;
    border-radius: 25px;
    background-color: var(--accent2-tertiary);
    color: #000;
    margin-bottom: .5rem
  }
  label {
    color: var(--accent2-tertiary);
    font-weight: 600;
    margin-bottom: .5em;
    display: block;
  }
</style>
