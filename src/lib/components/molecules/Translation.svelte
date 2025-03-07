<script>
  import Button from "../atoms/Button.svelte";
</script>

<!-- <section class="language-switcher">
  <Button id="language-button">EN</Button>
  <ul class="dropDown">
    <button class="dropdown-item">NL</button>
  </ul>
</section> -->



<section class="language-switcher">
  <button id="language-button">
    <span id="icon" class="arrow">⏵</span> <!-- Default icon for open state -->
    EN 
  </button>
  <ul class="dropDown">
    <li>
    <button class="dropdown-item">NL</button>
  </li>
  </ul>
</section>
<!-- <details>
  <summary>EN</summary>
  <ul class="ul-dropdown">
    <li>
      <a href="/">NL</a>
    </li>
  
  </ul>
</details> -->

<style>
   .language-switcher {
    position: relative;
    display: inline-block;
  }

  #language-button {
    background:none;
    color: var(--accent2-primary);
    border-radius: var( --border-lg);
    padding: 8px 12px;
    font-size: 16px;
    cursor: pointer;
    border: none;
    display: flex;
    align-items: center;
    gap: 5px;
  }
#language-button:hover {
  background-color: var( --page-bg-color);
}
  .dropDown {
    display: none; /* Hide dropdown by default */
    position: absolute;
    top: 100%; /* Position it right below the button */
    left: 0;
    background: white;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
    min-width: 120px;
    z-index: 999; /* Make sure it's above other elements */
  }

  .dropdown-item {
    width: 100%;
    padding: 8px 12px;
    border: none;
    background: white;
    text-align: left;
    cursor: pointer;
    font-size: 16px;
  }

  .dropdown-item:hover {
    background: #f0f0f0;
  }

  /* Change the arrow direction when the dropdown is open */
  .dropDown.open {
    display: block;
  }

  .arrow {
    transition: transform 0.3s ease;
  }

  .dropDown.open + #language-button .arrow {
    transform: rotate(180deg); /* Rotate the arrow when open */
  }
  details {
    color: var(--accent2-secondary);
    position: relative;
    cursor: pointer;
  }

  details > summary {
    list-style-type: "⏵";
  }

  details[open] > summary {
    list-style-type: "⏷";
  }

  .ul-dropdown {
    list-style: none;
  }

  .ul-dropdown li a {
    color: var(--accent2-secondary);
    text-decoration: none;
  }
</style>
