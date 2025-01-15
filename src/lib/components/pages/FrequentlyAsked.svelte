<script>
    import {HeadLine} from '$lib/index'
    export let items;
  </script>
  
  <svelte:head>
    <title>Veelgestelde Vragen</title>
  </svelte:head>
  
  <section id="FAQ" class="faq-section">
    
    <article class="faq-vragen">
        <HeadLine title="Veelgestelde Vragen" />
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
      background-color: #3F2B21;
      color: white;
      height: 100%;
      padding: 2rem;
    }

    .faq-vragen{
      width: 80%;
      padding: 2rem;
      background-color: #000;
      border-radius: 8px;
    }
  
    .faq-item {
      margin-bottom: 1rem;
    }
  
    details {
      background: none;
      border: none;
      padding: 0;
      cursor: pointer;
    }
  
    summary {
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 15px;
        font-weight: bold;
    }

    summary::after {
        content: '';
        width: 20px;
        height: 20px;
        background: url('../../assets/plus.svg') no-repeat;
        background-size: cover;
        transition: 0.2s;
    }

    details[open] > summary::after {
        background: url('../../assets/min.svg') no-repeat;
        background-size: cover;
        transition: 0.5s;
    }

    summary::-webkit-details-marker {
        display: none;
    }

    .question-title {
      flex-grow: 1;
    }
  
  </style>
  