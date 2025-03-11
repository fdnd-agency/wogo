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
