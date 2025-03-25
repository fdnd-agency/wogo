<script>
  export let id;
  export let name;
  export let type = "text";
  export let required = false;

   
  let touched = false;

  function handleBlur() {
    touched = true; // Mark the field as touched when it loses focus
  }
</script>

<div class="formGroup">
  <label for={id}><slot /></label>
  <input {id} {name} {type} min="0" max="30" {required}/>
</div>

<style>
  .formGroup {
    margin-bottom: 1em;
  }

  #persons {
    max-width: 4rem;
  }

  input {
    width: 100%;
    padding: 0.7em;
    border: none;
    border-radius: 25px;
    background-color: var(--accent2-tertiary);
    color: #000;
  }

  input:-webkit-autofill {
    -webkit-box-shadow:0 0 0 50px  var(--accent2-tertiary) inset; 
}

  /* input:valid {
    border:solid 2px rgb(103, 158, 103);
  }
  input:invalid {
    border:solid 2px rgb(234, 107, 107);
  } */

  .valid {
    border:solid 2px rgb(103, 158, 103);
  }

  
  .invalid {
    border:solid 2px rgb(234, 107, 107);
  }

  label {
    color: var(--accent2-tertiary);
    font-weight: 600;
    margin-bottom: 0.5em;
    display: block;
    margin-left: 0.5rem;
  }
</style>
