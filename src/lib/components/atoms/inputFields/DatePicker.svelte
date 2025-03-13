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
    border: none;
    border-radius: 25px;
    background-color: #fff;
    color: #000;
  }
  label {
    color: white;
  }
</style>
