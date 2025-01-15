<script>
  import Cartoon from "../molecules/Cartoon.svelte";
</script>

<Cartoon />

<style>
  :root {
    /* Primary Colors */
    --primary: #FFC2EC;
    --secondary: #F79EDB;
    --tertiary: #C581B0;

    /* Cartoon Colors */
    --iris: var(--primary);
    --hair: var(--secondary);
    --shirt: var(--tertiary);
    --line: rgba(80, 0, 0, 0.15);
    --skin: rgba(255, 204, 170, 1);
    --glass: rgba(255,255,255,0.35);
  } 
</style>