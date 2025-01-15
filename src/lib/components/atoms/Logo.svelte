<script>
  // Adjustable source and alt-tag
  export let source = ''
  export let alt = ''
</script>

<li>
  <picture>
    <source srcset="/images/{source}.webp">
    <img loading="lazy" src="/images/{source}.png" alt={alt} >
  </picture>
</li>

<style>
  li {
    display: inline-block;

    /* Regular list for reduced-motion */
    @media (prefers-reduced-motion) {
      display: flex;
    }
  }
  
  img {
    /* Responsive values for all screen-sizes */
    height: clamp(2rem, 3vw, 4rem);
    margin: 0 calc(0.5rem + 1.75vw);    

    @media (prefers-reduced-motion) {
      margin: 0.5rem 0;
    }
  }
</style>