<script>
  export let id;
  export let name;
  export let required = false;
  export let min = "";
  export let max = "";
  export let value = "";
</script>

<label for={id}><slot /></label>
<input type="time" id={id} name={name} {min} {max} {value} {required} />

<style>
  input {
    width: 100%;
    padding: 0.7em;
    border: solid 1px;
    border-radius: 25px;
    background-color: var(--accent2-tertiary);
    color: #000;
  }
  label {
    color: var(--accent2-tertiary);
    font-weight: 600;
    margin-bottom: .5em;
   
  }
</style>
