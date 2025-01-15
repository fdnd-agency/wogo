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
    padding: 0.625em;
    border: none;
    border-radius: 5px;
    background-color: #fff;
    color: #000;
  }
  label {
    color: white;
  }
</style>
