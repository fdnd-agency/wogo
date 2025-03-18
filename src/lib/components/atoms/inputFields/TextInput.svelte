<script>
  export let id;
  export let name;
  export let type = "text";
  export let required = false;
</script>

<div class="formGroup">
<label for={id}><slot /></label>
<input
  id={id}
  name={name}
  type={type}
  {required}
/>
</div>

<style>
  .formGroup {
    /* margin-left: 1em; */
    margin-bottom: 1em;
  }
  #persons {
  max-width: 4rem;
}

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
    display: block;
    margin-left: .5rem
  }
</style>
