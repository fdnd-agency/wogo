<script>
  export let id;
  export let name;
  export let type = "text";
  export let required = false;
</script>

<label for={id}><slot /></label>
<input
  id={id}
  name={name}
  type={type}
  {required}
/>

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
