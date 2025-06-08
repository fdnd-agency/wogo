<script>
  import { onMount } from "svelte";
  export let id;
  export let name;
  export let type = "text";
  export let required = false;
  export let min = "2";
  export let max = "30";

   
  let touched = false;

  function handleBlur() {
    touched = true; // Mark the field as touched when it loses focus
  }

  onMount(() => {
    setTimeout(() => {
      document.querySelectorAll("input").forEach((input) => {
        if (input.matches(":-webkit-autofill")) {
          // Forceer een revalidatie van het veld
          input.reportValidity();
        }
      });
    }, 500); // Wacht even zodat autofill kan plaatsvinden
  });
</script>

<div class="formGroup">
  <label for={id}><slot /></label>
  <input {id} {name} {type} {min} {max} {required}/>
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
    border-radius: 5px;
    background-color: var(--accent2-tertiary);
    color: #000;
    transition: border 300ms ease-in;
  }

  input:-webkit-autofill {
    -webkit-box-shadow:0 0 0 50px  var(--accent2-tertiary) inset; 
    border:none;
}

input:-webkit-autofill:focus,
input:-webkit-autofill:valid {
  border: solid px rgb(103, 158, 103);
}

input:-webkit-autofill:invalid {
  border: solid 2px rgb(239, 90, 90);
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
    margin-bottom: 0.5em;
    display: block;
  }
</style>
