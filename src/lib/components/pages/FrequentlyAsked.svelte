<script>
  import { HeadLine } from '$lib/index'
  export let items;
</script>

<svelte:head>
  <title>Veelgestelde Vragen</title>
</svelte:head>

<section id="FAQ" class="faq-section">
  <article class="faq-vragen">
      <h1>Veelgestelde Vragen</h1>
        {#each items[0].componentsCollection.items as item}
          <div class="faq-item">
              <details>
                  <summary>
                      <p class="question-title">{item.title}</p>
                  </summary>
                  <p>{item.textParagraph}</p>
              </details>
          </div>
      {/each}
  </article>
</section>

<style>

.faq-section {
      color: white;
      height: 100%;
      padding: 1em;
      max-width: 90em;
      margin: 0 auto; 

      @media (max-width: 1280px) {
        padding: 2em; 
      }
  }

  .faq-vragen {
      padding: 2em;
      background-color: #3F2B21;
      border-radius: 8px;
      box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
      max-width: 100%; 

      & h1{
        font-size: var(--fs-lg);
        color: white;
        text-align: center;
        margin-bottom: 1em;
        
        @media (max-width: 1280px) {
          font-size: var(--fs-xl);
          margin-bottom: 1.5em;
        }
      }
      
      @media (max-width: 1280px) {
        padding: 2em;
      }
  }

  .faq-item {
      margin-bottom: 1rem;
      border-bottom: 1px solid var(--accent2-primary); 
      padding-bottom: 1rem;
    
      &  summary {
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 1rem;
      font-weight: bold;
      color: white;
      flex-wrap: nowrap;
      justify-content: flex-start; 

      &::after{
        content: '';
        width: 20px;
        height: 20px;
        background: url('../../assets/plus.svg') no-repeat;
        background-size: contain;
        transition: 0.2s;
        flex-shrink: 0;
        margin-left: 10px; 
      }

      &::-webkit-details-marker {
      display: none;
      }

      &  .question-title {
      flex-grow: 1;
      }
    }
  }

  details:hover {
    cursor: pointer;
  }

  details[open] > summary::after {
      background: url('../../assets/min.svg') no-repeat;
      background-size: contain;
      transition: 0.5s;
  }
</style>
