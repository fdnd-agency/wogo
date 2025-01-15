<script>
  import { Button, ArrowRight, HeaderImage} from '$lib/index'
  export let items
</script>
<section>
    <figure>
      <HeaderImage src={items[0].asset.url} width="/" height="/" loading="lazy"></HeaderImage>
    </figure>
    <div class="hero-content">
      <p>{items[0].location}</p>
      <h1>{items[0].title}</h1>
      <Button
        variant="primary"
        title="book now"
        icon={ArrowRight}
        iconColor="var(--btn-primary-text-clr)"
        size="lg"
      />
    </div>
  </section>
  
  <style>
    section {
      display: grid;
      place-items: center;
      position: relative;
      height: 55vh;
      overflow: hidden;
    }
  
    figure {
      width: 100%;
      height: 100%; 
    }
  
    .hero-content {
      position: absolute;
      top: 50%; 
      left: 50%; 
      transform: translate(-50%, -50%); 
      padding: 1rem;
      margin-top: 0; 
      font-weight: 700;
      color: #fff;
      z-index: 1; 
    }
  
    h1 {
      position: relative;
      display: inline-block;
      font-weight: 700;
      font-size: clamp(2.648rem, 6vw, 4.241rem);
      letter-spacing: -1px;
      filter: drop-shadow(0 0 0.4rem #000);
      animation: heading;
      animation-duration: 3s;
      animation-fill-mode: forwards;
    }
  
    @keyframes heading {
      0% {
        top: -200px;
      }
      100% {
        top: -2px;
      }
    }
  
    p {
      font-size: 1.5rem;
      font-weight: 700;
      letter-spacing: 0.2rem;
      padding: 0.5rem;
      text-transform: lowercase;
      filter: drop-shadow(0 0 0.4rem #000);
      position: relative;
      animation-name: content;
      animation-duration: 3s;
      animation-fill-mode: forwards;
    }
  
    @keyframes content {
      0% {
        left: -1000px;
      }
      100% {
        left: 0px;
      }
    }
  
    @media (min-width: 30em) {
      section {
        height: 70vh;
      }
  
      .hero-content {
        max-width: 45rem;
      }
  
      h1 {
        font-size: 70px;
      }
    }
  </style>
  