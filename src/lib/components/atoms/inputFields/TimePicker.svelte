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
    border: none;
    border-radius: 5px;
    background-color: var(--accent2-tertiary);
    color: #000;
    margin-top: 1em;
  }

  
  input:user-valid {
    border:solid 2px rgb(103, 158, 103);
  }
  input:user-invalid {
    border:solid 2px rgb(239, 90, 90);
  }

  label {
    color: var(--accent2-tertiary);
    font-weight: 600;
    margin-bottom:1em;
   
  }
</style>
