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
    border-radius: 5px;
    background-color: var(--accent2-tertiary);
    color: #000;
    margin-bottom: 1rem;
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
    margin-bottom: .5em;
    display: block;
  }
</style>
