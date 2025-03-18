<script>
  export let id;
  export let name;
  export let placeholder = "";
  export let required = false;
</script>

<label for={id}><slot /></label>
<textarea id={id} name={name} placeholder={placeholder} {required}></textarea>

<style>
  textarea {
    width: 100%;
    padding: 0.7em;
    border: solid 1px;
    border-radius: 10px;
    background-color: var(--accent2-tertiary);
    color: #000;
  }
  label {
    color: var(--accent2-tertiary);
    font-weight: 600;
    margin-bottom: .5em;
    display: block;
  }
</style>
